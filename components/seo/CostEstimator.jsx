"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PRICE_LADDER, MAX_PRICE_USD } from "../../content/jobCatalog";

// Illustrative only — the agent's proposal for the real brief is the actual price.
const CONFIG = {
  website: {
    category: "web",
    types: [
      { id: "landing", label: "One-page / landing page", base: 149, included: 1 },
      { id: "business", label: "Small business site (about 5 pages)", base: 399, included: 5 },
      { id: "wordpress", label: "WordPress site with blog", base: 499, included: 6 },
      { id: "store", label: "Online store", base: 999, included: 8 },
      { id: "booking", label: "Booking or membership site", base: 999, included: 6 },
      { id: "webapp", label: "Custom web app", base: 1999, included: 5 },
    ],
    unit: "pages",
    unitMax: 30,
    perUnit: 40,
    features: [
      { id: "blog", label: "Blog / news section", add: 100 },
      { id: "booking", label: "Online booking", add: 250 },
      { id: "payments", label: "Payments or checkout", add: 300 },
      { id: "multilingual", label: "Multiple languages", add: 200 },
      { id: "seo", label: "On-page SEO setup", add: 100 },
      { id: "integrations", label: "CRM / email integrations", add: 200 },
    ],
  },
  app: {
    category: "mobile",
    types: [
      { id: "prototype", label: "Clickable prototype", base: 299, included: 5 },
      { id: "simple", label: "Simple app, one platform", base: 999, included: 5 },
      { id: "crossplatform", label: "Cross-platform MVP (iOS + Android)", base: 1999, included: 6 },
      { id: "accounts", label: "App with accounts and payments", base: 2499, included: 8 },
      { id: "saas", label: "SaaS MVP (web)", base: 2999, included: 8 },
      { id: "marketplace", label: "Marketplace MVP", base: 3999, included: 10 },
    ],
    unit: "screens",
    unitMax: 40,
    perUnit: 80,
    features: [
      { id: "login", label: "Sign-up and login", add: 200 },
      { id: "payments", label: "Payments or subscriptions", add: 400 },
      { id: "push", label: "Push notifications", add: 200 },
      { id: "admin", label: "Admin panel", add: 400 },
      { id: "chat", label: "In-app chat", add: 500 },
      { id: "maps", label: "Maps or location", add: 300 },
      { id: "ai", label: "AI feature", add: 500 },
      { id: "offline", label: "Offline mode", add: 400 },
    ],
  },
};

const snap = (n) => PRICE_LADDER.find((p) => p >= n) || MAX_PRICE_USD;
const money = (n) => `$${n.toLocaleString("en-US")}`;

export default function CostEstimator({ kind, slug }) {
  const cfg = CONFIG[kind];
  const [typeId, setTypeId] = useState(cfg.types[1].id);
  const type = cfg.types.find((t) => t.id === typeId);
  const [units, setUnits] = useState(type.included);
  const [features, setFeatures] = useState([]);

  const { low, high, raw } = useMemo(() => {
    const extra = Math.max(0, units - type.included) * cfg.perUnit;
    const add = cfg.features.filter((f) => features.includes(f.id)).reduce((a, f) => a + f.add, 0);
    const total = type.base + extra + add;
    return { raw: total, low: snap(total), high: snap(total * 1.3) };
  }, [type, units, features, cfg]);

  const tooBig = raw * 1.3 > MAX_PRICE_USD;
  const summary = `${type.label}, about ${units} ${cfg.unit}${features.length ? `, with ${cfg.features.filter((f) => features.includes(f.id)).map((f) => f.label.toLowerCase()).join(", ")}` : ""}.`;
  const postHref = `/hire/post?category=${cfg.category}&title=${encodeURIComponent(type.label)}&brief=${encodeURIComponent(`I need: ${summary} `)}&from=${encodeURIComponent(slug)}`;

  return (
    <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-6">
        <div>
          <label htmlFor={`${kind}-type`} className="text-sm font-semibold text-slate-900">What are you building?</label>
          <select
            id={`${kind}-type`}
            value={typeId}
            onChange={(e) => { const t = cfg.types.find((x) => x.id === e.target.value); setTypeId(t.id); setUnits(t.included); }}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          >
            {cfg.types.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor={`${kind}-units`} className="text-sm font-semibold text-slate-900">Number of {cfg.unit}</label>
            <span className="font-display text-lg font-semibold text-slate-900">{units}</span>
          </div>
          <input id={`${kind}-units`} type="range" min={1} max={cfg.unitMax} step={1} value={units} onChange={(e) => setUnits(+e.target.value)} className="mt-2 w-full accent-teal-600" />
        </div>
        <fieldset>
          <legend className="text-sm font-semibold text-slate-900">Features</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {cfg.features.map((f) => (
              <label key={f.id} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 hover:border-slate-300">
                <input
                  type="checkbox"
                  checked={features.includes(f.id)}
                  onChange={(e) => setFeatures((cur) => (e.target.checked ? [...cur, f.id] : cur.filter((x) => x !== f.id)))}
                  className="h-4 w-4 accent-teal-600"
                />
                {f.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col rounded-xl bg-slate-950 p-6 text-white" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">Estimated fixed price</p>
        {tooBig ? (
          <>
            <p className="mt-3 font-display text-3xl font-semibold">{money(low)}+</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">This scope is larger than a single fixed-price job. Start with a focused first version, or scope the full build with our team.</p>
            <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-300 hover:text-teal-200">Scope a larger build <ArrowRight size={14} /></Link>
          </>
        ) : (
          <>
            <p className="mt-3 font-display text-4xl font-semibold">{money(low)} – {money(high)}</p>
            <p className="mt-2 text-sm text-slate-400">Fixed price, agreed before work starts.</p>
          </>
        )}
        <p className="mt-6 text-sm leading-relaxed text-slate-300">{summary}</p>
        <div className="mt-auto pt-6">
          <Link href={postHref} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500">
            Get my exact price <ArrowRight size={15} />
          </Link>
        </div>
        <p className="mt-4 flex gap-1.5 text-xs leading-relaxed text-slate-500"><Info size={13} className="mt-0.5 shrink-0" /> An estimate from typical jobs. The agent prices your actual brief in about a minute.</p>
      </div>
    </div>
  );
}
