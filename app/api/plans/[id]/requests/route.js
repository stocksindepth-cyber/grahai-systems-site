import { NextResponse } from "next/server";
import { categories } from "../../../../../content/jobCatalog";
import { planById } from "../../../../../content/planCatalog";
import { allow, clientIp } from "../../../../../lib/rateLimit";
import { loadPlan, listRequests, planClientView, createPlanRequest, effectiveStatus, requestsUsedThisPeriod } from "../../../../../lib/plans";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request, { params }) {
  const sub = await loadPlan(params.id, request.headers.get("x-plan-key"));
  if (!sub) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  if (effectiveStatus(sub) !== "active") return NextResponse.json({ error: "Your plan isn't active — renew it to send new requests." }, { status: 400 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const title = String(body.title || "").trim().slice(0, 120);
  const description = String(body.description || "").trim().slice(0, 5000);
  const category = categories.some((c) => c.id === body.category) ? body.category : "other";
  if (title.length < 6) return NextResponse.json({ error: "Give the request a short title." }, { status: 400 });
  if (description.length < 30) return NextResponse.json({ error: "Describe the request in a couple of sentences." }, { status: 400 });

  try {
    if (!(await allow(`planreq:${sub.id}:${clientIp(request)}`, 15, 3600))) {
      return NextResponse.json({ error: "Too many requests in a short time — please wait a little." }, { status: 429 });
    }
  } catch (e) {
    console.error("[plans] rate limit check failed:", e?.message || e);
  }

  const cap = planById(sub.plan)?.requestsPerPeriod;
  const existing = await listRequests(sub.id);
  if (cap && requestsUsedThisPeriod(sub, existing) >= cap) {
    return NextResponse.json({ error: `Your ${sub.planName} includes ${cap} requests a month and they're used up. Upgrade to the Retainer for unlimited requests, or post this as a one-off job.` }, { status: 400 });
  }

  try {
    await createPlanRequest(sub, { title, description, category });
  } catch (e) {
    console.error("[plans] request failed:", e?.message || e);
    return NextResponse.json({ error: "Couldn't log that request just now. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ plan: planClientView(sub, await listRequests(sub.id)) });
}
