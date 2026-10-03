import { NextResponse } from "next/server";
import { verifyPaymentLinkSignature } from "../../../../../lib/jobs";
import { loadPlanById, reconcilePlanPayment } from "../../../../../lib/plans";

export const runtime = "nodejs";

// Razorpay return URL. Only a correctly signed redirect for this plan's own
// link carries the access key back; payment is confirmed with Razorpay itself.
export async function GET(request, { params }) {
  const url = new URL(request.url);
  const q = Object.fromEntries(url.searchParams.entries());
  const sub = await loadPlanById(params.id);
  if (!sub) return NextResponse.redirect(new URL("/hire/retainer", url.origin), 303);

  const genuine = verifyPaymentLinkSignature(q) && q.razorpay_payment_link_id === sub.payment?.linkId;
  let paid = false;
  if (genuine && q.razorpay_payment_link_status === "paid") {
    try {
      const fresh = await reconcilePlanPayment(sub.id);
      paid = fresh?.payment?.status === "paid";
    } catch (e) {
      console.error("[plans] paid callback reconcile failed:", e?.message || e);
    }
  }
  const dest = new URL(`/hire/plans/${sub.id}`, url.origin);
  if (genuine) dest.searchParams.set("k", sub.accessKey);
  dest.searchParams.set("checkout", paid ? "paid" : "pending");
  return NextResponse.redirect(dest, 303);
}
