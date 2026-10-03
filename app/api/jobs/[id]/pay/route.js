import { NextResponse } from "next/server";
import { loadJob, getOrCreatePaymentLink, jobsCol } from "../../../../../lib/jobs";

export const runtime = "nodejs";

// The amount always comes from the stored proposal — never from the client.
export async function POST(request, { params }) {
  const job = await loadJob(params.id, request.headers.get("x-job-key"));
  if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });
  if (job.payment?.status === "paid") return NextResponse.json({ error: "This job is already paid." }, { status: 400 });
  if (job.status !== "proposed" || !job.proposal?.priceUsd) {
    return NextResponse.json({ error: "This job doesn't have an open offer to pay for." }, { status: 400 });
  }

  let body = {};
  try {
    body = await request.json();
  } catch {}
  const phone = String(body.phone || job.phone || "").replace(/[\s().-]/g, "");
  if (!/^\+[1-9]\d{6,14}$/.test(phone)) {
    return NextResponse.json({ error: "Add your phone number with country code (e.g. +1 415 555 0123) — the payment provider requires it for your receipt." }, { status: 400 });
  }
  if (phone !== job.phone) {
    await jobsCol().doc(job.id).update({ phone, updatedAt: new Date() });
    job.phone = phone;
  }

  const origin = new URL(request.url).origin;
  try {
    const url = await getOrCreatePaymentLink(job, origin);
    if (!url) return NextResponse.json({ error: "This job is already paid." }, { status: 400 });
    return NextResponse.json({ url });
  } catch (e) {
    console.error("[jobs] payment link failed:", e?.message || e);
    return NextResponse.json({ error: "Couldn't open secure checkout. Please try again or email hello@grahaisystems.com." }, { status: 502 });
  }
}
