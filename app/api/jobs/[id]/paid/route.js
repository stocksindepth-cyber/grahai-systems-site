import { NextResponse } from "next/server";
import { loadJobById, reconcilePayment, verifyPaymentLinkSignature } from "../../../../../lib/jobs";

export const runtime = "nodejs";

// Razorpay redirects the buyer here after checkout. The signature proves the
// redirect is genuine; reconcilePayment then confirms amount + currency with
// Razorpay directly before starting the job.
export async function GET(request, { params }) {
  const url = new URL(request.url);
  const q = Object.fromEntries(url.searchParams.entries());
  const job = await loadJobById(params.id);
  if (!job) return NextResponse.redirect(new URL("/hire", url.origin), 303);

  // Only a genuine Razorpay redirect for THIS job's link may carry the access
  // key back; anyone else lands on the room without it (the browser that
  // posted the job still has it saved locally).
  const genuine = verifyPaymentLinkSignature(q) && q.razorpay_payment_link_id === job.payment?.linkId;
  let paid = false;
  if (genuine && q.razorpay_payment_link_status === "paid") {
    try {
      const fresh = await reconcilePayment(job.id);
      paid = fresh?.payment?.status === "paid";
    } catch (e) {
      console.error("[jobs] paid callback reconcile failed:", e?.message || e);
    }
  }
  const dest = new URL(`/hire/jobs/${job.id}`, url.origin);
  if (genuine) dest.searchParams.set("k", job.accessKey);
  dest.searchParams.set("checkout", paid ? "paid" : "pending");
  return NextResponse.redirect(dest, 303);
}
