"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2, Clock3, Copy, CreditCard, ExternalLink, Loader2, Lock,
  MessageSquare, PackageCheck, RotateCcw, Send, ShieldCheck, Sparkles, AlertTriangle, LifeBuoy, Repeat,
} from "lucide-react";
import { saveJobLocally } from "./PostJobForm";
import { planById } from "../../content/planCatalog";
import { toLocalAmount, DIAL } from "../../content/jobCatalog";

const STATUS = {
  proposed: { label: "Proposal ready", cls: "bg-teal-50 text-teal-700" },
  queued: { label: "Queued", cls: "bg-slate-100 text-slate-600" },
  custom: { label: "Custom project", cls: "bg-violet-50 text-violet-700" },
  declined: { label: "Not a fit", cls: "bg-slate-100 text-slate-600" },
  in_progress: { label: "In progress", cls: "bg-amber-50 text-amber-700" },
  delivered: { label: "Delivered — review it", cls: "bg-emerald-50 text-emerald-700" },
  revision: { label: "Revision in progress", cls: "bg-amber-50 text-amber-700" },
  completed: { label: "Completed", cls: "bg-emerald-50 text-emerald-700" },
  cancelled: { label: "Cancelled", cls: "bg-slate-100 text-slate-500" },
};

const fmtDate = (iso) => (iso ? new Date(iso).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }) : "");
const fmtTime = (iso) => (iso ? new Date(iso).toLocaleString("en-US", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) : "");
const initials = (s) => s.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function JobRoom({ id }) {
  const params = useSearchParams();
  const [key, setKey] = useState(null);
  const [job, setJob] = useState(null);
  const [state, setState] = useState("loading"); // loading | ok | missing | error
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [paying, setPaying] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");
  const [showRevision, setShowRevision] = useState(false);
  const [startingPlan, setStartingPlan] = useState("");
  const threadBox = useRef(null);
  const checkout = params.get("checkout");

  useEffect(() => {
    let k = params.get("k");
    if (!k) {
      try {
        k = JSON.parse(localStorage.getItem("gs_hire_jobs") || "[]").find((j) => j.id === id)?.k || null;
      } catch {}
    }
    if (!k) { setState("missing"); return; }
    setKey(k);
  }, [id, params]);

  const load = useCallback(async () => {
    if (!key) return null;
    try {
      const res = await fetch(`/api/jobs/${id}`, { headers: { "x-job-key": key }, cache: "no-store" });
      if (res.status === 404) { setState("missing"); return null; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load");
      setJob(data.job);
      setState("ok");
      setPhone((cur) => cur || data.job.phone || `${DIAL[data.job.country] || "+"}${DIAL[data.job.country] ? " " : ""}`);
      saveJobLocally({ id, k: key, title: data.job.title, createdAt: data.job.createdAt });
      return data.job;
    } catch (e) {
      setError(e.message);
      setState((s) => (s === "ok" ? s : "error"));
      return null;
    }
  }, [id, key]);

  useEffect(() => { load(); }, [load]);

  // Coming back from checkout: Razorpay can take a few seconds to settle.
  useEffect(() => {
    if (checkout !== "pending" || !key) return;
    let tries = 0;
    const t = setInterval(async () => {
      tries += 1;
      const j = await load();
      if (j?.paid || tries >= 8) clearInterval(t);
    }, 5000);
    return () => clearInterval(t);
  }, [checkout, key, load]);

  useEffect(() => {
    const onFocus = () => load();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [load]);

  useEffect(() => {
    const el = threadBox.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [job?.messages?.length, sending]);

  async function send(e) {
    e.preventDefault();
    const body = msg.trim();
    if (!body) return;
    setSending(true);
    setError("");
    setJob((j) => ({ ...j, messages: [...j.messages, { id: "pending", role: "client", body, createdAt: new Date().toISOString() }] }));
    setMsg("");
    try {
      const res = await fetch(`/api/jobs/${id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-job-key": key },
        body: JSON.stringify({ body }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't send");
      setJob(data.job);
    } catch (err) {
      setError(err.message);
      setMsg(body);
      setJob((j) => ({ ...j, messages: j.messages.filter((m) => m.id !== "pending") }));
    } finally {
      setSending(false);
    }
  }

  async function pay() {
    setPaying(true);
    setError("");
    try {
      const res = await fetch(`/api/jobs/${id}/pay`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-job-key": key },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't open checkout");
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setPaying(false);
    }
  }

  async function action(payload) {
    setError("");
    const res = await fetch(`/api/jobs/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-job-key": key },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Something went wrong"); return; }
    setJob(data.job);
    setShowRevision(false);
    setRevisionNote("");
  }

  async function startPlan(planId) {
    setError("");
    setStartingPlan(planId);
    try {
      const res = await fetch("/api/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, fromJob: { id, key } }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't start the plan");
      try {
        const list = JSON.parse(localStorage.getItem("gs_hire_plans") || "[]").filter((x) => x.id !== data.id);
        localStorage.setItem("gs_hire_plans", JSON.stringify([{ id: data.id, k: data.key, plan: planId }, ...list].slice(0, 20)));
      } catch {}
      window.location.href = `/hire/plans/${data.id}?k=${encodeURIComponent(data.key)}`;
    } catch (err) {
      setError(err.message);
      setStartingPlan("");
    }
  }

  function copyLink() {
    navigator.clipboard?.writeText(`${window.location.origin}/hire/jobs/${id}?k=${key}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (state === "loading") {
    return <div className="flex min-h-[60vh] items-center justify-center"><Loader2 className="animate-spin text-teal-600" /></div>;
  }
  if (state === "missing" || state === "error") {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <Lock className="mx-auto text-slate-300" size={36} />
        <h1 className="mt-4 font-display text-xl font-bold text-slate-900">{state === "missing" ? "This job room is private" : "Couldn't load this job"}</h1>
        <p className="mt-2 text-sm text-slate-600">
          {state === "missing"
            ? "Open it with the link from your email (the one with the “View your proposal” button). If you can't find it, email hello@grahaisystems.com from the address you posted with."
            : error}
        </p>
        <Link href="/hire/post" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500">Post a new job</Link>
      </div>
    );
  }

  const p = job.proposal || {};
  const badge = STATUS[job.status] || STATUS.proposed;
  const preSale = job.status === "proposed" && !job.paid;
  const hasDelivery = ["delivered", "revision", "completed"].includes(job.status) && job.delivery;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/hire" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900">
          <ArrowLeft size={14} /> GrahAI Agents
        </Link>
        <button onClick={copyLink} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900">
          {copied ? <Check size={13} className="text-teal-600" /> : <Copy size={13} />} {copied ? "Link copied" : "Copy private link"}
        </button>
      </div>

      {checkout === "paid" && job.paid && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <div><strong>Payment confirmed.</strong> Your agent has started. You&apos;ll get an email when the delivery lands here.</div>
        </div>
      )}
      {checkout === "pending" && !job.paid && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <Loader2 size={18} className="mt-0.5 shrink-0 animate-spin" />
          <div>Checking your payment with the bank… If you closed checkout without paying, nothing was charged — you can pay below whenever you&apos;re ready.</div>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-6">
          {/* Header */}
          <div>
            <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${badge.cls}`}>{badge.label}</span>
            <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{p.title || job.title}</h1>
            <p className="mt-1 text-xs text-slate-500">{job.categoryName} · posted {fmtTime(job.createdAt)}</p>
          </div>

          {/* Delivery */}
          {hasDelivery && (
            <section className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-2 text-emerald-700">
                <PackageCheck size={18} />
                <h2 className="font-display text-lg font-bold">Your delivery</h2>
                <span className="ml-auto text-xs text-slate-400">{fmtTime(job.delivery.deliveredAt)}</span>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{job.delivery.note}</p>
              {job.delivery.links?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {job.delivery.links.map((l) => (
                    <li key={l}>
                      <a href={l} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 break-all text-sm font-semibold text-teal-700 hover:text-teal-800">
                        <ExternalLink size={14} className="shrink-0" /> {l}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {job.deliveries?.length > 1 && (
                <details className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                  <summary className="cursor-pointer text-xs font-semibold text-slate-600">Earlier deliveries ({job.deliveries.length - 1})</summary>
                  <div className="mt-3 space-y-4">
                    {job.deliveries.slice(0, -1).reverse().map((d) => (
                      <div key={d.deliveredAt} className="border-t border-slate-200 pt-3 first:border-0 first:pt-0">
                        <div className="text-[11px] text-slate-400">{fmtTime(d.deliveredAt)}</div>
                        <p className="mt-1 whitespace-pre-wrap text-slate-600">{d.note}</p>
                        {d.links?.map((l) => (
                          <a key={l} href={l} target="_blank" rel="noopener noreferrer nofollow" className="mt-1 block break-all text-xs font-semibold text-teal-700">{l}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              )}
              {job.status === "delivered" && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  {!showRevision ? (
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => action({ action: "approve" })} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500">
                        <Check size={16} /> Approve & complete
                      </button>
                      <button onClick={() => setShowRevision(true)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                        <RotateCcw size={15} /> Request changes ({Math.max(0, job.revisionsIncluded - job.revisionsUsed)} left)
                      </button>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="rev" className="text-xs font-semibold text-slate-700">What should change?</label>
                      <textarea id="rev" value={revisionNote} onChange={(e) => setRevisionNote(e.target.value)} className="mt-1.5 min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20" placeholder="Be specific: what you expected, what you got, and where." />
                      <div className="mt-3 flex gap-3">
                        <button onClick={() => action({ action: "request_revision", note: revisionNote })} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">Send revision request</button>
                        <button onClick={() => setShowRevision(false)} className="text-sm font-semibold text-slate-500">Cancel</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
          )}

          {job.status === "completed" && job.kind !== "plan_request" && (
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="font-display text-lg font-bold text-slate-900">Keep it running, or keep building</h2>
              <p className="mt-1 text-sm text-slate-600">Want us to stay on after this job? Month to month, cancel anytime.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {["care", "retainer"].map((pid) => {
                  const pl = planById(pid);
                  const Icon = pid === "care" ? LifeBuoy : Repeat;
                  return (
                    <div key={pid} className={`flex flex-col rounded-2xl border p-5 ${pid === "retainer" ? "border-teal-300 bg-teal-50/40" : "border-slate-200"}`}>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Icon size={16} className="text-teal-600" /> {pl.name}</div>
                      <div className="mt-2 font-display text-2xl font-extrabold text-slate-900">{toLocalAmount(pl.priceUsd, job.currency).display}<span className="text-sm font-medium text-slate-500">/mo</span></div>
                      <p className="mt-1 text-xs text-slate-500">{pl.tagline}</p>
                      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                        {pl.includes.slice(0, 3).map((x) => <li key={x} className="flex gap-1.5"><Check size={13} className="mt-0.5 shrink-0 text-teal-600" />{x}</li>)}
                      </ul>
                      <button onClick={() => startPlan(pid)} disabled={!!startingPlan} className={`mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold disabled:opacity-60 ${pid === "retainer" ? "bg-teal-600 text-white hover:bg-teal-500" : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"}`}>
                        {startingPlan === pid ? <Loader2 size={15} className="animate-spin" /> : null} Start {pl.name}
                      </button>
                    </div>
                  );
                })}
              </div>
              <Link href="/hire/retainer" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800">Compare all plans <ArrowRight size={12} /></Link>
            </section>
          )}

          {/* Proposal */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 font-display text-sm font-bold text-teal-300">{initials(job.agentName)}</span>
              <div>
                <div className="font-display text-sm font-bold text-slate-900">{job.agentName}</div>
                <div className="flex items-center gap-1 text-xs text-slate-500"><Sparkles size={11} className="text-teal-600" /> AI agent · GrahAI Systems</div>
              </div>
              {p.version > 1 && <span className="ml-auto rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Offer v{p.version}</span>}
            </div>

            {p.coverLetter && <p className="mt-5 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">{p.coverLetter}</p>}

            {p.fit !== "ready" && p.declineReason && (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><AlertTriangle size={16} className="text-amber-500" /> {p.fit === "too_large" ? "This is bigger than a marketplace job" : "This one isn't a fit for our agents"}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.declineReason}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.fit === "too_large" && (
                    <Link href="/services" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-teal-500">See custom AI & software projects <ArrowRight size={13} /></Link>
                  )}
                  <Link href="/hire/post" className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">Post a different job</Link>
                </div>
              </div>
            )}

            {p.deliverables?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">What you get</h3>
                <ul className="mt-3 space-y-2.5">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-teal-600" />{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {p.plan?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">How I&apos;ll do it</h3>
                <ol className="mt-3 space-y-3">
                  {p.plan.map((s, i) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">{i + 1}</span>
                      <div className="text-sm"><span className="font-semibold text-slate-900">{s.step}</span><span className="text-slate-600"> — {s.detail}</span></div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {(p.assumptions?.length > 0 || p.questions?.length > 0) && (
              <div className="mt-6 grid gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2">
                {p.assumptions?.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Assumptions</h3>
                    <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600">{p.assumptions.map((a) => <li key={a}>• {a}</li>)}</ul>
                  </div>
                )}
                {p.questions?.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">I&apos;ll ask at kickoff</h3>
                    <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600">{p.questions.map((a) => <li key={a}>• {a}</li>)}</ul>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Thread */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
              <MessageSquare size={16} className="text-slate-400" />
              <h2 className="font-display text-sm font-bold text-slate-900">{preSale ? `Ask ${job.agentName} anything` : "Messages"}</h2>
              <span className="ml-auto text-[11px] text-slate-400">{preSale ? "Replies instantly · can update the offer" : "The delivery team replies here"}</span>
            </div>
            <div ref={threadBox} className="max-h-[480px] space-y-4 overflow-y-auto px-6 py-5">
              {job.messages.length === 0 && (
                <p className="text-center text-xs text-slate-400">
                  {preSale ? "Want something added, removed or done differently? Ask here — the agent will reply and update the price if the scope changes." : "No messages yet."}
                </p>
              )}
              {job.messages.map((m) => {
                if (m.role === "system") {
                  return <div key={m.id} className="text-center"><span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-500">{m.body}</span></div>;
                }
                const mine = m.role === "client";
                return (
                  <div key={m.id} className={`flex gap-2.5 ${mine ? "justify-end" : ""}`}>
                    {!mine && (
                      <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${m.role === "team" ? "bg-teal-600 text-white" : "bg-slate-900 text-teal-300"}`}>
                        {m.role === "team" ? "GS" : initials(job.agentName)}
                      </span>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${mine ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-800"}`}>
                      {!mine && <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">{m.role === "team" ? "GrahAI team" : job.agentName}</div>}
                      <p className="whitespace-pre-wrap">{m.body}</p>
                      <div className={`mt-1 text-[10px] ${mine ? "text-teal-100" : "text-slate-400"}`}>{fmtTime(m.createdAt)}</div>
                    </div>
                  </div>
                );
              })}
              {sending && preSale && (
                <div className="flex items-center gap-2 text-xs text-slate-400"><Loader2 size={12} className="animate-spin" /> {job.agentName} is typing…</div>
              )}
            </div>
            {!["cancelled", "declined"].includes(job.status) && (
              <form onSubmit={send} className="flex gap-2 border-t border-slate-100 p-4">
                <input
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder={preSale ? "Ask about scope, timeline, or what you'll receive…" : "Message the delivery team… (no passwords here)"}
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  maxLength={3000}
                  disabled={sending}
                />
                <button disabled={sending || !msg.trim()} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-40" aria-label="Send">
                  <Send size={15} />
                </button>
              </form>
            )}
          </section>

          <details className="rounded-2xl border border-slate-200 bg-white p-5 text-sm">
            <summary className="cursor-pointer font-semibold text-slate-700">Your original brief</summary>
            <p className="mt-3 whitespace-pre-wrap leading-relaxed text-slate-600">{job.description}</p>
          </details>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            {job.kind === "plan_request" ? (
              <>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Covered by your plan</div>
                <div className="mt-1 font-display text-2xl font-extrabold text-slate-900">{job.planName}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {{
                    queued: "Queued — it starts as soon as the request ahead of it is done.",
                    in_progress: "In progress. You'll get an email when the delivery lands here.",
                    revision: "Revision in progress.",
                    delivered: "Delivered — review it and approve or request changes.",
                    completed: "Done. Send your next request from your plan room.",
                    declined: "This one isn't a fit for our agents — see the note on the left.",
                  }[job.status] || "The team will update you here."}
                </p>
                {["in_progress", "revision"].includes(job.status) && job.dueAt && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-600"><Clock3 size={15} className="text-amber-500" /> Due {fmtDate(job.dueAt)}</div>
                )}
                {job.planUrl && (
                  <Link href={job.planUrl} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                    Back to your plan room
                  </Link>
                )}
              </>
            ) : p.fit === "ready" && job.priceDisplay ? (
              <>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Fixed price</div>
                <div className="mt-1 font-display text-4xl font-extrabold text-slate-900">{job.priceDisplay}</div>
                <div className="mt-1 text-sm text-slate-500">{job.currency === "USD" ? "USD · " : ""}delivered in {p.deliveryDays} day{p.deliveryDays === 1 ? "" : "s"}</div>
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex gap-2"><Check size={14} className="shrink-0 text-teal-600" /> {p.revisions || 2} revision rounds included</li>
                  <li className="flex gap-2"><Check size={14} className="shrink-0 text-teal-600" /> Engineer-reviewed before delivery</li>
                  <li className="flex gap-2"><Check size={14} className="shrink-0 text-teal-600" /> Full refund if we can&apos;t deliver the scope</li>
                  <li className="flex gap-2"><Check size={14} className="shrink-0 text-teal-600" /> You own everything we deliver</li>
                </ul>

                {preSale && (
                  <>
                    <label htmlFor="pay-phone" className="mt-6 block text-xs font-semibold text-slate-700">Phone (with country code)</label>
                    <input
                      id="pay-phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 415 555 0123"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                    <p className="mt-1 text-[11px] text-slate-400">Needed by the payment provider for your receipt. We won&apos;t call you.</p>
                    <button onClick={pay} disabled={paying} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-teal-500 disabled:opacity-60">
                      {paying ? <Loader2 size={16} className="animate-spin" /> : <CreditCard size={16} />} Accept & pay {job.priceDisplay}
                    </button>
                    <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                      <ShieldCheck size={12} /> Secure checkout by Razorpay · {job.currency === "INR" ? "UPI, cards & netbanking" : "Visa, Mastercard, Amex & international cards"}
                    </p>
                  </>
                )}
                {job.paid && (
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm">
                    <div className="flex items-center gap-2 font-semibold text-slate-900"><CheckCircle2 size={16} className="text-emerald-600" /> Paid {job.paidAt ? fmtDate(job.paidAt) : ""}</div>
                    {["in_progress", "revision"].includes(job.status) && job.dueAt && (
                      <div className="mt-2 flex items-center gap-2 text-slate-600"><Clock3 size={15} className="text-amber-500" /> Delivery due {fmtDate(job.dueAt)}</div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Next step</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.fit === "too_large"
                    ? "Bigger builds get a proper scoping call and a fixed-scope proposal from our project team."
                    : "Our agents focus on software, automation, data and AI work. Try reframing the job, or tell us more by email."}
                </p>
                <a href={`mailto:hello@grahaisystems.com?subject=${encodeURIComponent(`About my job: ${job.title}`)}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  Email the team
                </a>
              </>
            )}
            {error && <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{error}</p>}
          </div>
          <p className="mt-4 px-2 text-center text-[11px] leading-relaxed text-slate-400">
            This page is private to you. Bookmark it or keep the email we sent — the link is your key.
          </p>
        </aside>
      </div>
    </div>
  );
}
