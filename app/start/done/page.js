import crypto from "crypto";
import Link from "next/link";
import { Check, Clock, AlertTriangle } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = { title: "Booking confirmation | GrahAI Systems", robots: { index: false } };

function verify(sp) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const id = sp.razorpay_payment_link_id;
  const ref = sp.razorpay_payment_link_reference_id;
  const status = sp.razorpay_payment_link_status;
  const pay = sp.razorpay_payment_id;
  const sig = sp.razorpay_signature;
  if (!secret || !id || !status || !sig) return "unknown";
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${id}|${ref || ""}|${status}|${pay || ""}`)
    .digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(String(sig));
  const ok = a.length === b.length && crypto.timingSafeEqual(a, b);
  if (!ok) return "unknown";
  return status === "paid" ? "paid" : "unpaid";
}

export default function DonePage({ searchParams }) {
  const state = verify(searchParams || {});

  const view = {
    paid: {
      icon: Check,
      color: "emerald",
      title: "You're booked 🎉",
      body: "Payment confirmed. We'll email you within one business day to schedule your kickoff and confirm the final scope. Your booking deposit is credited in full to your project.",
    },
    unpaid: {
      icon: Clock,
      color: "amber",
      title: "Payment not completed",
      body: "It looks like the payment wasn't completed. No charge was made. You can head back and try again, or email us to arrange another way to pay.",
    },
    unknown: {
      icon: AlertTriangle,
      color: "slate",
      title: "Nothing to confirm here",
      body: "We couldn't find a completed payment for this page. If you just paid and were charged, email support@grahai.com with your payment reference and we'll sort it out right away.",
    },
  }[state];

  const Icon = view.icon;
  const ring = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    slate: "bg-slate-100 text-slate-500",
  }[view.color];

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-slate-50/40 pt-16 pb-28">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${ring}`}>
              <Icon size={28} />
            </div>
            <h1 className="mt-5 font-display text-2xl font-extrabold text-slate-900">{view.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{view.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {state !== "paid" && (
                <Link href="/start" className="inline-flex items-center justify-center gap-2 rounded-xl bg-azure-600 px-5 py-3 text-sm font-semibold text-white hover:bg-azure-700">
                  Back to scoping
                </Link>
              )}
              <a href="mailto:support@grahai.com" className="text-sm font-semibold text-azure-600 hover:text-azure-700">
                support@grahai.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
