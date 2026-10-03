import { NextResponse } from "next/server";
import { loadPlan, plansCol, getOrCreatePlanPaymentLink, effectiveStatus } from "../../../../../lib/plans";

export const runtime = "nodejs";

// The amount always comes from the plan's locked price — never from the client.
export async function POST(request, { params }) {
  const sub = await loadPlan(params.id, request.headers.get("x-plan-key"));
  if (!sub) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  let body = {};
  try {
    body = await request.json();
  } catch {}
  const phone = String(body.phone || sub.phone || "").replace(/[\s().-]/g, "");
  if (!/^\+[1-9]\d{6,14}$/.test(phone)) {
    return NextResponse.json({ error: "Add your phone number with country code (e.g. +1 415 555 0123) — the payment provider requires it." }, { status: 400 });
  }
  if (phone !== sub.phone) {
    await plansCol().doc(sub.id).update({ phone, updatedAt: new Date() });
    sub.phone = phone;
  }
  const status = effectiveStatus(sub);
  if (status === "active" && !sub.cancelAtPeriodEnd) {
    const end = sub.periodEnd?.toDate?.();
    if (end && end.getTime() - Date.now() > 7 * 86400000) {
      return NextResponse.json({ error: "Your plan is paid up — renewal opens a few days before the period ends." }, { status: 400 });
    }
  }
  try {
    const url = await getOrCreatePlanPaymentLink(sub, new URL(request.url).origin);
    if (!url) return NextResponse.json({ error: "This payment is already complete — refresh the page." }, { status: 400 });
    return NextResponse.json({ url });
  } catch (e) {
    console.error("[plans] payment link failed:", e?.message || e);
    return NextResponse.json({ error: "Couldn't open secure checkout. Please try again or email hello@grahaisystems.com." }, { status: 502 });
  }
}
