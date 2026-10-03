import { NextResponse } from "next/server";
import { REVISION_ROUNDS } from "../../../../content/jobCatalog";
import {
  loadJob,
  loadMessages,
  addMessage,
  clientView,
  jobsCol,
  reconcilePayment,
  notifyTeam,
  notifyClient,
} from "../../../../lib/jobs";
import { loadPlanById, promoteQueued } from "../../../../lib/plans";

export const runtime = "nodejs";

const keyOf = (request) => request.headers.get("x-job-key");

// GET — the client's job room. If a payment link is open, re-check it with
// Razorpay so a buyer who paid but never came back still gets started.
export async function GET(request, { params }) {
  let job = await loadJob(params.id, keyOf(request));
  if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });

  const lastCheck = job.payment?.checkedAt?.toMillis?.() || 0;
  if (job.payment?.linkId && job.payment.status !== "paid" && Date.now() - lastCheck > 15000) {
    try {
      await jobsCol().doc(job.id).update({ "payment.checkedAt": new Date() });
      job = (await reconcilePayment(job.id)) || job;
    } catch (e) {
      console.error("[jobs] reconcile failed:", e?.message || e);
    }
  }
  return NextResponse.json({ job: clientView(job, await loadMessages(job.id)) });
}

// POST — client actions on a delivered job: approve, or request a revision.
export async function POST(request, { params }) {
  const job = await loadJob(params.id, keyOf(request));
  if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const ref = jobsCol().doc(job.id);

  if (body.action === "approve") {
    if (job.status !== "delivered") return NextResponse.json({ error: "There's no delivery to approve yet." }, { status: 400 });
    await ref.update({ status: "completed", completedAt: new Date(), updatedAt: new Date() });
    await addMessage(job.id, "system", "Client approved the delivery. Job complete.", { kind: "completed" });
    await notifyTeam(job, "✅ Approved & completed", `${job.email} approved the delivery.`);
    if (job.kind === "plan_request") {
      await promoteQueued(await loadPlanById(job.membershipId));
    } else {
      await notifyClient(
        job,
        "Thanks — your job is complete",
        `<p style="margin:0 0 14px">Thanks for approving the delivery for <strong>${job.title.replace(/[<>&]/g, "")}</strong>. Everything we built is yours.</p>
         <p style="margin:0">Want us to keep it running? A <strong>Care plan</strong> covers fixes and small changes every month, and a <strong>Retainer</strong> gives you an AI dev team on call for new work. Both are on your job page and can be cancelled anytime.</p>`,
        `Thanks for approving "${job.title}". Keep it running with a Care plan, or get a Retainer for ongoing work — both are on your job page.`,
      );
    }
  } else if (body.action === "request_revision") {
    const note = String(body.note || "").trim().slice(0, 3000);
    if (job.status !== "delivered") return NextResponse.json({ error: "Revisions open once a delivery lands." }, { status: 400 });
    if (note.length < 10) return NextResponse.json({ error: "Tell us what to change (a sentence or two)." }, { status: 400 });
    const used = (job.revisionsUsed || 0) + 1;
    await ref.update({ status: "revision", revisionsUsed: used, updatedAt: new Date() });
    await addMessage(job.id, "client", note, { kind: "revision_request" });
    await addMessage(
      job.id,
      "system",
      used <= REVISION_ROUNDS
        ? `Revision ${used} of ${REVISION_ROUNDS} requested. The agent is on it.`
        : `Revision requested. This is beyond the ${REVISION_ROUNDS} included rounds — the team will confirm here whether it's covered.`,
      { kind: "revision" },
    );
    await notifyTeam(job, `🔁 Revision ${used}/${REVISION_ROUNDS} requested`, note);
  } else {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  const fresh = await loadJob(job.id, keyOf(request));
  return NextResponse.json({ job: clientView(fresh, await loadMessages(job.id)) });
}
