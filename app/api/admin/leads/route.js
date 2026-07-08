import { NextResponse } from "next/server";
import { adminDb, adminFromRequest } from "../../../../lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

export const runtime = "nodejs";

const LEAD_STATUSES = ["new", "contacted", "quoted", "won", "lost"];

// GET — every /start lead (admin only), newest first.
export async function GET(request) {
  const admin = await adminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const snap = await adminDb().collection("leads").get();
    const leads = snap.docs.map((d) => {
      const x = d.data();
      return {
        id: d.id,
        email: x.email || "",
        name: x.name || "",
        company: x.company || "",
        country: x.country || "",
        useCase: x.useCase || "",
        scale: x.scale || "",
        urgency: x.urgency || "",
        requirements: x.requirements || "",
        packageName: x.packageName || "",
        priceFromDisplay: x.priceFromDisplay || "",
        totalWeeks: x.totalWeeks || null,
        status: x.status || "new",
        notes: x.notes || [],
        createdAt: x.createdAt?.toDate?.()?.toISOString() || null,
      };
    });
    leads.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    return NextResponse.json({ leads });
  } catch (e) {
    console.error("[admin/leads] list:", e?.message || e);
    return NextResponse.json({ error: "Failed to load leads" }, { status: 500 });
  }
}

// POST — update a lead's status and/or append an admin note.
// body: { id, status?, note? }
export async function POST(request) {
  const admin = await adminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Bad request" }, { status: 400 }); }
  const { id, status, note } = body || {};
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const ref = adminDb().collection("leads").doc(id);
  const snap = await ref.get();
  if (!snap.exists) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

  const update = { updatedAt: FieldValue.serverTimestamp() };
  if (status !== undefined) {
    if (!LEAD_STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    update.status = status;
  }
  if (note && String(note).trim()) {
    update.notes = FieldValue.arrayUnion({
      text: String(note).trim().slice(0, 1000),
      by: admin.email || "admin",
      at: new Date().toISOString(),
    });
  }
  if (!update.status && !update.notes) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    await ref.set(update, { merge: true });
    const fresh = (await ref.get()).data();
    return NextResponse.json({ success: true, status: fresh.status, notes: fresh.notes || [] });
  } catch (e) {
    console.error("[admin/leads] update:", e?.message || e);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
