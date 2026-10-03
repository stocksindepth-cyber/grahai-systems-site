import { NextResponse } from "next/server";
import { categories, budgets, timelines } from "../../../content/jobCatalog";
import { detectCountry } from "../../../lib/pricing";
import { allow, clientIp } from "../../../lib/rateLimit";
import { jobsCol, newAccessKey, generateProposal, notifyNewJob } from "../../../lib/jobs";

export const runtime = "nodejs";
export const maxDuration = 60;

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const ids = (arr) => arr.map((x) => x.id);

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Job posting is offline right now. Email hello@grahaisystems.com and we'll reply fast." }, { status: 503 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (body.website) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const title = String(body.title || "").trim().slice(0, 120);
  const description = String(body.description || "").trim().slice(0, 5000);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
  const name = String(body.name || "").trim().slice(0, 80);
  const category = ids(categories).includes(body.category) ? body.category : "other";
  const budget = ids(budgets).includes(body.budget) ? body.budget : "unsure";
  const timeline = ids(timelines).includes(body.timeline) ? body.timeline : "flexible";
  const source = String(body.source || "").replace(/[^a-z0-9/_-]/gi, "").slice(0, 80);

  if (title.length < 6) return NextResponse.json({ error: "Give your job a short title (at least a few words)." }, { status: 400 });
  if (description.length < 40) return NextResponse.json({ error: "Describe the job in a bit more detail (at least a couple of sentences) so the agent can price it." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email — that's where your proposal link goes." }, { status: 400 });

  const ip = clientIp(request);
  try {
    const okIp = await allow(`jobs:ip:${ip}`, 6, 3600);
    const okEmail = await allow(`jobs:email:${email}`, 12, 86400);
    if (!okIp || !okEmail) {
      return NextResponse.json({ error: "You've posted several jobs in a short time. Please wait a little, or email hello@grahaisystems.com." }, { status: 429 });
    }
  } catch (e) {
    console.error("[jobs] rate limit check failed:", e?.message || e);
  }

  const country = detectCountry(request.headers, null);
  const job = {
    title,
    description,
    email,
    name,
    category,
    budget,
    timeline,
    country,
    currency: country === "IN" ? "INR" : "USD",
    source,
    accessKey: newAccessKey(),
  };

  let proposal;
  try {
    proposal = await generateProposal(job);
  } catch (e) {
    console.error("[jobs] proposal failed:", e?.message || e);
    return NextResponse.json({ error: "The agent couldn't write your proposal just now. Please try again in a moment." }, { status: 502 });
  }

  const status = proposal.fit === "ready" ? "proposed" : proposal.fit === "too_large" ? "custom" : "declined";
  const now = new Date();
  const ref = await jobsCol().add({
    ...job,
    proposal,
    status,
    payment: { status: "unpaid" },
    revisionsUsed: 0,
    clientMessageCount: 0,
    createdAt: now,
    updatedAt: now,
  });

  await notifyNewJob({ id: ref.id, ...job, proposal, status });

  return NextResponse.json({ id: ref.id, key: job.accessKey, status });
}
