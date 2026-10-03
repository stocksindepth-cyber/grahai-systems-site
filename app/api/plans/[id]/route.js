import { NextResponse } from "next/server";
import { loadPlan, listRequests, planClientView, plansCol, reconcilePlanPayment, effectiveStatus } from "../../../../lib/plans";

export const runtime = "nodejs";

const keyOf = (request) => request.headers.get("x-plan-key");

export async function GET(request, { params }) {
  let sub = await loadPlan(params.id, keyOf(request));
  if (!sub) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  const lastCheck = sub.payment?.checkedAt?.toMillis?.() || 0;
  if (sub.payment?.status === "link_created" && Date.now() - lastCheck > 15000) {
    try {
      await plansCol().doc(sub.id).update({ "payment.checkedAt": new Date() });
      sub = (await reconcilePlanPayment(sub.id)) || sub;
    } catch (e) {
      console.error("[plans] reconcile failed:", e?.message || e);
    }
  }
  return NextResponse.json({ plan: planClientView(sub, await listRequests(sub.id)) });
}

// POST — { action: "cancel" | "resume" }: cancel stops renewal at period end.
export async function POST(request, { params }) {
  const sub = await loadPlan(params.id, keyOf(request));
  if (!sub) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  if (effectiveStatus(sub) !== "active") return NextResponse.json({ error: "This plan isn't active." }, { status: 400 });
  if (body.action === "cancel") {
    await plansCol().doc(sub.id).update({ cancelAtPeriodEnd: true, updatedAt: new Date() });
  } else if (body.action === "resume") {
    await plansCol().doc(sub.id).update({ cancelAtPeriodEnd: false, updatedAt: new Date() });
  } else {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }
  const fresh = await loadPlan(sub.id, sub.accessKey);
  return NextResponse.json({ plan: planClientView(fresh, await listRequests(sub.id)) });
}
