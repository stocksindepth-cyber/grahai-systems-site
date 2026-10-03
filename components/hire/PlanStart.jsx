"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2, Lock } from "lucide-react";
import { plans } from "../../content/planCatalog";
import { DIAL } from "../../content/jobCatalog";

export default function PlanStart({ defaultPlan = "retainer" }) {
  const [plan, setPlan] = useState(defaultPlan);
  const [form, setForm] = useState({ name: "", email: "", phone: "", firstRequest: "", website: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const region = (navigator.language || "").split("-")[1]?.toUpperCase();
    if (DIAL[region]) setForm((f) => (f.phone ? f : { ...f, phone: `${DIAL[region]} ` }));
    const fromHash = window.location.hash.replace("#start-", "");
    if (plans.some((p) => p.id === fromHash)) setPlan(fromHash);
    const onHash = () => {
      const h = window.location.hash.replace("#start-", "");
      if (plans.some((p) => p.id === h)) setPlan(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan, source: "retainer-page" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      try {
        const list = JSON.parse(localStorage.getItem("gs_hire_plans") || "[]");
        localStorage.setItem("gs_hire_plans", JSON.stringify([{ id: data.id, k: data.key, plan }, ...list].slice(0, 20)));
      } catch {}
      const pay = await fetch(`/api/plans/${data.id}/pay`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan-key": data.key },
        body: JSON.stringify({ phone: form.phone }),
      });
      const payData = await pay.json();
      window.location.href = pay.ok ? payData.url : `/hire/plans/${data.id}?k=${encodeURIComponent(data.key)}`;
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  const field = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20";
  const label = "mb-1.5 block text-xs font-semibold text-slate-700";
  const chosen = plans.find((p) => p.id === plan);

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <h2 className="font-display text-xl font-extrabold text-slate-900">Start your plan</h2>
      <fieldset className="mt-5">
        <legend className={label}>Plan</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {plans.map((p) => (
            <label key={p.id} className={`cursor-pointer rounded-xl border p-3 text-sm transition-colors ${plan === p.id ? "border-teal-500 bg-teal-50/60 ring-2 ring-teal-500/20" : "border-slate-200 hover:border-slate-300"}`}>
              <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} className="sr-only" />
              <div className="font-semibold text-slate-900">{p.name}</div>
              <div className="text-xs text-slate-500">${p.priceUsd}/mo</div>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ps-name" className={label}>Your name</label>
          <input id="ps-name" className={field} value={form.name} onChange={set("name")} autoComplete="name" maxLength={80} />
        </div>
        <div>
          <label htmlFor="ps-email" className={label}>Email</label>
          <input id="ps-email" type="email" className={field} value={form.email} onChange={set("email")} autoComplete="email" required maxLength={200} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="ps-phone" className={label}>Phone (with country code)</label>
        <input id="ps-phone" type="tel" className={field} value={form.phone} onChange={set("phone")} autoComplete="tel" placeholder="+1 415 555 0123" required />
        <p className="mt-1 text-[11px] text-slate-400">Needed by the payment provider for your receipt. We won&apos;t call you.</p>
      </div>
      <div className="mt-4">
        <label htmlFor="ps-first" className={label}>First thing you need <span className="font-normal text-slate-400">(optional)</span></label>
        <textarea id="ps-first" className={`${field} min-h-[90px]`} value={form.firstRequest} onChange={set("firstRequest")} maxLength={3000} placeholder="We'll have it ready to send as your first request." />
      </div>
      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>
      {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
      <button disabled={busy} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-teal-500 disabled:opacity-60">
        {busy ? <Loader2 size={16} className="animate-spin" /> : null} Start {chosen?.name} — ${chosen?.priceUsd}/mo <ArrowRight size={16} />
      </button>
      <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
        <li className="flex items-center gap-1"><Lock size={11} /> Secure checkout by Razorpay</li>
        <li className="flex items-center gap-1"><Check size={11} /> Cancel anytime</li>
        <li className="flex items-center gap-1"><Check size={11} /> India pays in INR</li>
      </ul>
    </form>
  );
}
