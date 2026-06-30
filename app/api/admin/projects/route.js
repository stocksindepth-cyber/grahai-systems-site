import { NextResponse } from "next/server";
import { adminDb, adminFromRequest } from "../../../../lib/firebaseAdmin";

export const runtime = "nodejs";

const PROJECT_STATUSES = ["quote", "booked", "in_progress", "delivered"];
const MILESTONE_STATUSES = ["upcoming", "in_progress", "done"];

// GET — every client project across all users (admin only).
export async function GET(request) {
  const admin = await adminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const snap = await adminDb().collectionGroup("projects").get();
    const projects = snap.docs.map((d) => {
      const ownerUid = d.ref.parent.parent?.id || null;
      const data = d.data();
      return {
        id: d.id,
        ownerUid,
        packageName: data.packageName,
        status: data.status || "quote",
        company: data.company || "",
        contactEmail: data.contactEmail || "",
        priceFromDisplay: data.priceFromDisplay || "",
        payNowDisplay: data.payNowDisplay || "",
        paymentMode: data.paymentMode || "",
        totalWeeks: data.totalWeeks || null,
        deliveryDate: data.deliveryDate || null,
        startDate: data.startDate || null,
        milestones: data.milestones || [],
        hasProposal: !!data.proposal,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || null,
      };
    });
    projects.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    return NextResponse.json({ projects });
  } catch (e) {
    console.error("[admin/projects] list:", e?.message || e);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

// POST — update a project's status and/or one milestone's status (admin only).
// body: { uid, id, status?, milestoneIndex?, milestoneStatus? }
export async function POST(request) {
  const admin = await adminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Bad request" }, { status: 400 }); }
  const { uid, id, status, milestoneIndex, milestoneStatus } = body || {};
  if (!uid || !id) return NextResponse.json({ error: "Missing uid/id" }, { status: 400 });

  const ref = adminDb().collection("users").doc(uid).collection("projects").doc(id);
  const snap = await ref.get();
  if (!snap.exists) return NextResponse.json({ error: "Project not found" }, { status: 404 });
  const data = snap.data();

  const update = {};

  if (status !== undefined) {
    if (!PROJECT_STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    update.status = status;
  }

  if (milestoneIndex !== undefined && milestoneStatus !== undefined) {
    if (!MILESTONE_STATUSES.includes(milestoneStatus)) return NextResponse.json({ error: "Invalid milestone status" }, { status: 400 });
    const milestones = Array.isArray(data.milestones) ? [...data.milestones] : [];
    const idx = Number(milestoneIndex);
    if (idx < 0 || idx >= milestones.length) return NextResponse.json({ error: "Bad milestone index" }, { status: 400 });
    milestones[idx] = { ...milestones[idx], status: milestoneStatus };
    update.milestones = milestones;

    // Light auto-derivation of project status from milestone progress
    // (only when the admin didn't set status explicitly in this call).
    if (status === undefined) {
      const allDone = milestones.every((m) => m.status === "done");
      const anyActive = milestones.some((m) => m.status === "done" || m.status === "in_progress");
      if (allDone) update.status = "delivered";
      else if (anyActive && (data.status === "quote" || data.status === "booked")) update.status = "in_progress";
    }
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }
  update.updatedAt = new Date();

  try {
    await ref.set(update, { merge: true });
    return NextResponse.json({ success: true, status: update.status ?? data.status, milestones: update.milestones ?? data.milestones });
  } catch (e) {
    console.error("[admin/projects] update:", e?.message || e);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
