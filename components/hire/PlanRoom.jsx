"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Check, CheckCircle2, Clock3, CreditCard, Loader2, Lock, Plus, ShieldCheck, AlertTriangle, ChevronRight } from "lucide-react";
import { categories, dialFor } from "../../content/jobCatalog";
import { PLAN_REQUEST_RULE } from "../../content/planCatalog";

const PILL = {
  pending: { label: "Awaiting first payment", cls: "bg-amber-50 text-amber-700" },
  active: { label: "Active", cls: "bg-emerald-50 text-emerald-700" },
  lapsed: { label: "Paused", cls: "bg-slate-100 text-slate-600" },
  cancelled: { label: "Cancelled", cls: "bg-slate-100 text-slate-500" },
};
const REQ = {
  queued: "Queued",
  in_progress: "In progress",
  revision: "Revision",
  delivered: "Delivered — review",
  completed: "Done",
  declined: "Not a fit",
  custom: "Needs a quote",
  cancelled: "Cancelled",
};
const fmtDate = (iso) => (iso ? new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "");

export default function PlanRoom({ id }) {
  const params = useSearchParams();
  const checkout = params.get("checkout");
  const [key, setKey] = useState(null);
  const [plan, setPlan] = useState(null);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [paying, setPaying] = useState(false);
  const [req, setReq] = useState({ title: "", description: "", category: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let k = params.get("k");
    if (!k) {
      try {
        k = JSON.parse(localStorage.getItem("gs_hire_plans") || "[]").find((x) => x.id === id)?.k || null;
      } catch {}
    }
    if (!k) { setState("missing"); return; }
    setKey(k);
  }, [id, params]);

  const load = useCallback(async () => {
    if (!key) return null;
    const res = await fetch(`/api/plans/${id}`, { headers: { "x-plan-key": key }, cache: "no-store" });
    if (res.status === 404) { setState("missing"); return null; }
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Failed to load"); setState("error"); return null; }
    setPlan(data.plan);
    setState("ok");
    setPhone((cur) => cur || data.plan.phone || dialFor(data.plan.country));
    setReq((r) => (r.description || data.plan.requests.length ? r : { ...r, description: data.plan.firstRequest || "" }));
    try {
      const list = JSON.parse(localStorage.getItem("gs_hire_plans") || "[]").filter((x) => x.id !== id);
      localStorage.setItem("gs_hire_plans", JSON.stringify([{ id, k: key, plan: data.plan.plan }, ...list].slice(0, 20)));
    } catch {}
    return data.plan;
  }, [id, key]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (checkout !== "pending" || !key) return;
    let tries = 0;
    const t = setInterval(async () => {
      tries += 1;
      const p = await load();
      if (p?.status === "active" || tries >= 8) clearInterval(t);
    }, 5000);
    return () => clearInterval(t);
  }, [checkout, key, load]);

  async function pay() {
    setPaying(true);
    setError("");
    try {
      const res = await fetch(`/api/plans/${id}/pay`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan-key": key },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't open checkout");
      window.location.href = data.url;
    } catch (e) {
      setError(e.message);
      setPaying(false);
    }
  }

  async function toggleCancel(action) {
    setError("");
    const res = await fetch(`/api/plans/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-plan-key": key },
      body: JSON.stringify({ action }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Failed"); return; }
    setPlan(data.plan);
  }

  async function sendRequest(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`/api/plans/${id}/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan-key": key },
        body: JSON.stringify({ ...req, category: req.category || "other" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't send");
      setPlan(data.plan);
      setReq({ title: "", description: "", category: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  if (state === "loading") return <div className="flex min-h-[60vh] items-center justify-center"><Loader2 className="animate-spin text-teal-600" /></div>;
  if (state !== "ok") {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <Lock className="mx-auto text-slate-300" size={36} />
        <h1 className="mt-4 font-display text-xl font-bold text-slate-900">This plan room is private</h1>
        <p className="mt-2 text-sm text-slate-600">{state === "missing" ? "Open it from the link in your email. Can't find it? Email support@grahai.com from the address you signed up with." : error}</p>
      </div>
    );
  }

  const pill = PILL[plan.status] || PILL.pending;
  const field = "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20";
  const capped = plan.requestsPerPeriod && plan.requestsUsed >= plan.requestsPerPeriod;
  const showPay = plan.status === "pending" || plan.status === "lapsed" || plan.status === "cancelled" || plan.renewalDue;
  const payLabel = plan.status === "pending" ? `Start — pay ${plan.priceDisplay}` : plan.renewalDue ? `Renew — pay ${plan.priceDisplay}` : `Restart — pay ${plan.priceDisplay}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/hire/retainer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><ArrowLeft size={14} /> Plans</Link>

      {checkout === "paid" && plan.status === "active" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <div><strong>Payment confirmed.</strong> Your {plan.planName} runs until {fmtDate(plan.periodEnd)}. Send your first request below.</div>
        </div>
      )}
      {checkout === "pending" && plan.status !== "active" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <Loader2 size={18} className="mt-0.5 shrink-0 animate-spin" />
          <div>Checking your payment… If you closed checkout without paying, nothing was charged.</div>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-6">
          <div>
            <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${pill.cls}`}>{plan.cancelAtPeriodEnd && plan.status === "active" ? "Ends at period end" : pill.label}</span>
            <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Your {plan.planName}</h1>
            <p className="mt-1 text-sm text-slate-500">{plan.tagline}{plan.status === "active" ? ` · paid until ${fmtDate(plan.periodEnd)}` : ""}</p>
          </div>

          {plan.status === "active" ? (
            <form onSubmit={sendRequest} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-bold text-slate-900">New request</h2>
                {plan.requestsPerPeriod ? (
                  <span className="text-xs text-slate-500">{plan.requestsUsed} of {plan.requestsPerPeriod} used this month</span>
                ) : (
                  <span className="text-xs text-slate-500">Unlimited · {plan.activeLimit} in progress at a time</span>
                )}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{PLAN_REQUEST_RULE}</p>
              <div className="mt-4 space-y-3">
                <input className={field} placeholder="Short title — e.g. Add a size filter to the shop page" value={req.title} onChange={(e) => setReq({ ...req, title: e.target.value })} maxLength={120} required disabled={capped} />
                <textarea className={`${field} min-h-[120px]`} placeholder="What should change, where, and how you'll know it's done. No passwords." value={req.description} onChange={(e) => setReq({ ...req, description: e.target.value })} maxLength={5000} required disabled={capped} />
                <select className={field} value={req.category} onChange={(e) => setReq({ ...req, category: e.target.value })} disabled={capped} aria-label="Category">
                  <option value="">Category (optional)</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <button disabled={sending || capped} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500 disabled:opacity-50">
                {sending ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />} {sending ? "The agent is scoping it…" : "Send request"}
              </button>
              {capped && <p className="mt-3 text-xs text-slate-500">This month's requests are used. <Link href="/hire/retainer" className="font-semibold text-teal-700">Upgrade to the Retainer</Link> for unlimited requests.</p>}
            </form>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-sm sm:p-7">
              {plan.status === "pending"
                ? "Once your first payment clears, you can send requests from here and track every one of them."
                : "Your plan is paused, so new requests are on hold. Anything already in progress will still be finished. Restart any time."}
            </div>
          )}

          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <h2 className="border-b border-slate-100 px-6 py-4 font-display text-sm font-bold text-slate-900">Requests</h2>
            {plan.requests.length === 0 ? (
              <p className="px-6 py-8 text-center text-xs text-slate-400">No requests yet.</p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {plan.requests.map((r) => (
                  <li key={r.id}>
                    <Link href={r.url} className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50">
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-slate-900">{r.title}</div>
                        <div className="text-xs text-slate-500">{fmtDate(r.createdAt)}{r.dueAt && ["in_progress", "revision"].includes(r.status) ? ` · due ${fmtDate(r.dueAt)}` : ""}</div>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">{REQ[r.status] || r.status}</span>
                      <ChevronRight size={16} className="text-slate-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{plan.planName}</div>
            <div className="mt-1 font-display text-4xl font-extrabold text-slate-900">{plan.priceDisplay}<span className="text-base font-medium text-slate-500">/mo</span></div>
            <ul className="mt-5 space-y-2 text-xs text-slate-600">
              {plan.includes.map((x) => <li key={x} className="flex gap-2"><Check size={14} className="shrink-0 text-teal-600" />{x}</li>)}
            </ul>

            {plan.renewalDue && (
              <div className="mt-5 flex gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-800"><Clock3 size={14} className="mt-0.5 shrink-0" /> Renews {fmtDate(plan.periodEnd)}. Pay now to keep requests moving.</div>
            )}
            {plan.status === "active" && !plan.renewalDue && (
              <div className="mt-5 flex gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" /> Paid until {fmtDate(plan.periodEnd)}. We'll email a renewal link 3 days before.</div>
            )}
            {(plan.status === "lapsed" || plan.status === "cancelled") && (
              <div className="mt-5 flex gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600"><AlertTriangle size={14} className="mt-0.5 shrink-0 text-amber-500" /> Paused since {fmtDate(plan.periodEnd)}.</div>
            )}

            {showPay && (
              <>
                <label htmlFor="plan-phone" className="mt-5 block text-xs font-semibold text-slate-700">Phone (with country code)</label>
                <input id="plan-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 415 555 0123" className={`mt-1.5 ${field}`} />
                <p className="mt-1 text-[11px] text-slate-400">Needed by the payment provider for your receipt.</p>
                <button onClick={pay} disabled={paying} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-teal-500 disabled:opacity-60">
                  {paying ? <Loader2 size={16} className="animate-spin" /> : <CreditCard size={16} />} {payLabel}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                  <ShieldCheck size={12} /> Secure checkout by Razorpay · one month at a time
                </p>
              </>
            )}

            {plan.status === "active" && (
              <div className="mt-5 border-t border-slate-100 pt-4 text-center">
                {plan.cancelAtPeriodEnd ? (
                  <button onClick={() => toggleCancel("resume")} className="text-xs font-semibold text-teal-700 hover:text-teal-800">Keep my plan — undo cancellation</button>
                ) : (
                  <button onClick={() => toggleCancel("cancel")} className="text-xs font-semibold text-slate-400 hover:text-slate-700">Cancel at end of period</button>
                )}
              </div>
            )}
            {error && <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{error}</p>}
          </div>
          <p className="mt-4 px-2 text-center text-[11px] leading-relaxed text-slate-400">This page is private to you. Keep the email we send — the link is your key.</p>
        </aside>
      </div>
    </div>
  );
}
