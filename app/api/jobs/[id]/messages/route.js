import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { allow, clientIp } from "../../../../../lib/rateLimit";
import {
  loadJob,
  loadMessages,
  addMessage,
  clientView,
  jobsCol,
  agentReply,
  notifyTeam,
  amountFor,
} from "../../../../../lib/jobs";

export const runtime = "nodejs";
export const maxDuration = 60;

const PRE_PAYMENT_LIMIT = 20;

// Before payment the AI agent answers instantly (and may revise the offer).
// After payment, messages go to the delivery team, who reply from /admin/jobs.
export async function POST(request, { params }) {
  const job = await loadJob(params.id, request.headers.get("x-job-key"));
  if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const text = String(body.body || "").trim().slice(0, 3000);
  if (!text) return NextResponse.json({ error: "Message is empty." }, { status: 400 });
  if (["cancelled"].includes(job.status)) return NextResponse.json({ error: "This job is closed." }, { status: 400 });

  try {
    if (!(await allow(`msg:ip:${clientIp(request)}`, 40, 3600))) {
      return NextResponse.json({ error: "Too many messages — please wait a few minutes." }, { status: 429 });
    }
  } catch (e) {
    console.error("[jobs] rate limit check failed:", e?.message || e);
  }

  const ref = jobsCol().doc(job.id);
  const preSale = job.status === "proposed" && job.payment?.status !== "paid";

  if (preSale) {
    if ((job.clientMessageCount || 0) >= PRE_PAYMENT_LIMIT) {
      return NextResponse.json({ error: "You've reached the message limit for this proposal. Email hello@grahaisystems.com and a person will pick it up." }, { status: 429 });
    }
    const history = await loadMessages(job.id);
    await addMessage(job.id, "client", text);
    await ref.update({ clientMessageCount: FieldValue.increment(1), updatedAt: new Date() });

    let result;
    try {
      result = await agentReply(job, history, text);
    } catch (e) {
      console.error("[jobs] agent reply failed:", e?.message || e);
      await addMessage(job.id, "system", "The agent couldn't reply just now. The team has your message and will answer here.");
      await notifyTeam(job, "💬 Pre-sale question (agent failed)", text);
      const fresh = await loadJob(job.id, job.accessKey);
      return NextResponse.json({ job: clientView(fresh, await loadMessages(job.id)) });
    }

    await addMessage(job.id, "agent", result.reply);
    if (result.revised) {
      await ref.update({ proposal: result.revised, updatedAt: new Date() });
      const note = (result.revised.changeNote || "").replace(/[.\s]+$/, "");
      const price = amountFor(result.revised.priceUsd, job.currency).display;
      await addMessage(job.id, "system", `Offer updated to v${result.revised.version}: ${price} · ${result.revised.deliveryDays} day${result.revised.deliveryDays === 1 ? "" : "s"}${note ? ` — ${note}` : ""}`, { kind: "revised" });
    }
  } else {
    await addMessage(job.id, "client", text);
    await ref.update({ clientMessageCount: FieldValue.increment(1), updatedAt: new Date() });
    await notifyTeam(job, `💬 Client message (${job.status})`, text);
  }

  const fresh = await loadJob(job.id, job.accessKey);
  return NextResponse.json({ job: clientView(fresh, await loadMessages(job.id)) });
}
