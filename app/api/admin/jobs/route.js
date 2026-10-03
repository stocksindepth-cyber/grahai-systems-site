import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminFromRequest } from "../../../../lib/firebaseAdmin";
import { loadPlanById, promoteQueued } from "../../../../lib/plans";
import {
  jobsCol,
  loadJobById,
  loadMessages,
  addMessage,
  clientView,
  reconcilePayment,
  notifyClient,
  esc,
  jobUrl,
} from "../../../../lib/jobs";

export const runtime = "nodejs";

const STATUSES = ["proposed", "queued", "custom", "declined", "in_progress", "delivered", "revision", "completed", "cancelled"];

const adminView = (job, messages) => ({
  ...clientView(job, messages),
  country: job.country,
  source: job.source || "",
  paymentStatus: job.payment?.status || "unpaid",
  membershipId: job.membershipId || null,
  paymentId: job.payment?.paymentId || null,
  roomUrl: jobUrl(job),
});

// GET — all marketplace jobs (admin only), newest first. ?id= for one job + thread.
export async function GET(request) {
  if (!(await adminFromRequest(request))) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const id = new URL(request.url).searchParams.get("id");
  try {
    if (id) {
      const job = await loadJobById(id);
      if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json({ job: adminView(job, await loadMessages(id)) });
    }
    const snap = await jobsCol().orderBy("createdAt", "desc").limit(300).get();
    return NextResponse.json({ jobs: snap.docs.map((d) => adminView({ id: d.id, ...d.data() }, [])) });
  } catch (e) {
    console.error("[admin/jobs] list:", e?.message || e);
    return NextResponse.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}

// POST — { id, action: "message" | "deliver" | "status" | "check_payment", ... }
export async function POST(request) {
  if (!(await adminFromRequest(request))) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const job = await loadJobById(body.id);
  if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const ref = jobsCol().doc(job.id);

  if (body.action === "message") {
    const text = String(body.body || "").trim().slice(0, 4000);
    if (!text) return NextResponse.json({ error: "Empty message" }, { status: 400 });
    await addMessage(job.id, "team", text);
    await ref.update({ updatedAt: new Date() });
    await notifyClient(job, "New message on your job", `<p style="margin:0;white-space:pre-wrap">${esc(text)}</p>`, text);
  } else if (body.action === "deliver") {
    const note = String(body.note || "").trim().slice(0, 6000);
    const links = (Array.isArray(body.links) ? body.links : [])
      .map((l) => String(l).trim())
      .filter((l) => /^https:\/\//i.test(l))
      .slice(0, 10);
    if (!note) return NextResponse.json({ error: "Add a delivery note" }, { status: 400 });
    const delivery = { note, links, deliveredAt: new Date() };
    await ref.update({ status: "delivered", delivery, deliveries: FieldValue.arrayUnion(delivery), updatedAt: new Date() });
    await addMessage(job.id, "system", "Delivery is ready for your review.", { kind: "delivered" });
    await notifyClient(
      job,
      "Your delivery is ready",
      `<p style="margin:0 0 14px">Your delivery for <strong>${esc(job.title)}</strong> is ready. Open your job room to review it, then approve or request changes (2 revision rounds are included).</p>`,
      `Your delivery for "${job.title}" is ready. Review it, then approve or request changes.`,
    );
  } else if (body.action === "status") {
    if (!STATUSES.includes(body.status)) return NextResponse.json({ error: "Bad status" }, { status: 400 });
    await ref.update({ status: body.status, updatedAt: new Date() });
    if (job.kind === "plan_request" && ["completed", "cancelled", "declined"].includes(body.status)) {
      await promoteQueued(await loadPlanById(job.membershipId));
    }
  } else if (body.action === "check_payment") {
    await reconcilePayment(job.id);
  } else {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  const fresh = await loadJobById(job.id);
  return NextResponse.json({ job: adminView(fresh, await loadMessages(job.id)) });
}
