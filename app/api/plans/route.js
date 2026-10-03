import { NextResponse } from "next/server";
import { planById } from "../../../content/planCatalog";
import { detectCountry } from "../../../lib/pricing";
import { allow, clientIp } from "../../../lib/rateLimit";
import { loadJob } from "../../../lib/jobs";
import { createPlan } from "../../../lib/plans";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const normPhone = (p) => String(p || "").replace(/[\s().-]/g, "");

// Start a plan — either fresh (from /hire/retainer) or from a completed job,
// which carries over the client's details so it's one click.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ error: "Bad request" }, { status: 400 });
  const plan = planById(body.plan);
  if (!plan) return NextResponse.json({ error: "Choose a plan." }, { status: 400 });

  try {
    if (!(await allow(`plans:ip:${clientIp(request)}`, 10, 3600))) {
      return NextResponse.json({ error: "Too many attempts — please wait a few minutes." }, { status: 429 });
    }
  } catch (e) {
    console.error("[plans] rate limit check failed:", e?.message || e);
  }

  if (body.fromJob?.id) {
    const job = await loadJob(body.fromJob.id, body.fromJob.key);
    if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });
    const sub = await createPlan({
      plan: plan.id,
      email: job.email,
      name: job.name,
      phone: job.phone,
      country: job.country,
      linkedJobId: job.id,
      source: `job-upsell/${job.id}`,
    });
    return NextResponse.json({ id: sub.id, key: sub.accessKey });
  }

  const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
  const name = String(body.name || "").trim().slice(0, 80);
  const phone = normPhone(body.phone);
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  if (!/^\+[1-9]\d{6,14}$/.test(phone)) {
    return NextResponse.json({ error: "Add your phone number with country code (e.g. +1 415 555 0123) — the payment provider requires it." }, { status: 400 });
  }
  const sub = await createPlan({
    plan: plan.id,
    email,
    name,
    phone,
    country: detectCountry(request.headers, null),
    firstRequest: String(body.firstRequest || "").trim().slice(0, 3000),
    source: String(body.source || "retainer-page").replace(/[^a-z0-9/_-]/gi, "").slice(0, 80),
  });
  return NextResponse.json({ id: sub.id, key: sub.accessKey });
}
