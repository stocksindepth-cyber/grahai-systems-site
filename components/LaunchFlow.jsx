"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { launchTiers, carePlans } from "../content/launchTiers";
import { USD_TO_INR } from "../content/rateCard";
import { useAuth } from "./AuthProvider";

const inr = (usd) => `₹${Math.round(usd * USD_TO_INR).toLocaleString("en-IN")}`;

export default function LaunchFlow() {
  const router = useRouter();
  const { user } = useAuth();

  // No anonymous checkout on the marketing site: every package starts with a
  // signed-in requirements conversation, and the confirmed plan is shared in
  // the client dashboard before any payment happens.
  function start(tier) {
    const dest = `/start?package=${encodeURIComponent(tier.id)}`;
    router.push(user ? dest : `/login?next=${encodeURIComponent(dest)}`);
  }

  return (
    <div>
      {/* Tiers */}
      <div className="grid gap-6 lg:grid-cols-3">
        {launchTiers.map((t) => (
          <div
            key={t.id}
            className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm ${
              t.highlight ? "border-azure-500 ring-2 ring-azure-500/20 shadow-md" : "border-slate-200"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-azure-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-extrabold text-slate-900">{t.name}</h3>
            <p className="mt-1 text-xs text-slate-500">{t.tagline}</p>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-extrabold text-slate-900">{t.priceUsdDisplay}</span>
              <span className="text-xs font-medium text-slate-400">one-time</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">≈ {inr(t.priceUsd)} for customers in India · {t.supportDays}-day support</p>

            <button
              onClick={() => start(t)}
              className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-xs font-bold transition-all ${
                t.highlight
                  ? "bg-azure-600 text-white hover:bg-azure-700 shadow-md shadow-azure-600/10"
                  : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
              }`}
            >
              <ArrowRight size={14} />
              Start with {t.name}
            </button>
            <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-400">
              Sign in, share your requirements — we confirm the plan with you before any payment.
            </p>

            <ul className="mt-6 space-y-2.5">
              {t.includes.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                  <Check size={14} className="mt-0.5 shrink-0 text-azure-600" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Not sure which fits? <a href="/start" className="font-semibold text-azure-600 hover:text-azure-700">Scope a custom build in 60 seconds →</a>
      </p>

      {/* Care plans */}
      <div className="mt-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <Sparkles size={12} className="text-azure-600" /> Optional after launch
          </span>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-slate-900">Keep it running & improving</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
            A one-time build gets you live. A Care plan keeps it hosted, patched and getting better — cancel anytime, no lock-in.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {carePlans.map((c) => (
            <div key={c.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-sm font-extrabold text-slate-900">{c.name}</h3>
              <div className="mt-1 font-display text-xl font-extrabold text-azure-600">{c.priceUsdDisplay}</div>
              <p className="mt-0.5 text-xs text-slate-400">{c.for}</p>
              <ul className="mt-4 space-y-2">
                {c.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check size={13} className="mt-0.5 shrink-0 text-slate-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-slate-400">
          Care plans are billed monthly and set up after your build ships — just tell us which one at handover.
        </p>
      </div>
    </div>
  );
}
