"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Loader2, ShieldCheck, Copy, Check, RefreshCw, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { auth } from "../../../lib/firebaseClient";
import { useAuth } from "../../../components/AuthProvider";

const STATUSES = ["proposed", "queued", "in_progress", "revision", "delivered", "completed", "custom", "declined", "cancelled"];
const color = {
  proposed: "bg-teal-100 text-teal-700",
  queued: "bg-sky-100 text-sky-700",
  in_progress: "bg-amber-100 text-amber-800",
  revision: "bg-orange-100 text-orange-800",
  delivered: "bg-emerald-100 text-emerald-700",
  completed: "bg-emerald-200 text-emerald-800",
  custom: "bg-violet-100 text-violet-700",
  declined: "bg-slate-200 text-slate-600",
  cancelled: "bg-slate-200 text-slate-500",
};
const fmt = (iso) => (iso ? new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "—");

function agentBrief(j) {
  const p = j.proposal || {};
  const convo = (j.messages || [])
    .filter((m) => m.role !== "system")
    .map((m) => `${m.role.toUpperCase()}: ${m.body}`)
    .join("\n\n");
  return `# Client job: ${p.title || j.title}

Client: ${j.name || "—"} <${j.email}> (${j.country}) · ${j.kind === "plan_request" ? `covered by ${j.planName}` : `paid ${j.priceDisplay}`} · due ${j.dueAt ? new Date(j.dueAt).toDateString() : "—"}
Job room (client-facing): ${j.roomUrl}

## Client brief
${j.description}

## Agreed scope — proposal v${p.version || 1} (this is the contract)
Deliverables:
${(p.deliverables || []).map((d) => `- ${d}`).join("\n")}

Plan:
${(p.plan || []).map((s, i) => `${i + 1}. ${s.step} — ${s.detail}`).join("\n")}

Assumptions:
${(p.assumptions || []).map((d) => `- ${d}`).join("\n")}

Open questions for kickoff:
${(p.questions || []).map((d) => `- ${d}`).join("\n") || "- none"}

## Conversation so far
${convo || "(none)"}

## Delivery requirements
- Satisfy every deliverable above. If anything can't be done, stop and say so — don't silently drop it.
- Deliver as a Git repo or zip with a README: setup, how to run, how to change the common things.
- Never commit secrets. Read credentials from env vars or a config file the client fills in.
- Test against the client's real environment/data where possible; note anything untested.
- Finish with a plain-English handover note for the client: what was built, how to use it, links.
`;
}

export default function AdminJobsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [jobs, setJobs] = useState(null);
  const [state, setState] = useState("loading");
  const [filter, setFilter] = useState("active");
  const [open, setOpen] = useState(null);
  const [detail, setDetail] = useState({});
  const [draft, setDraft] = useState({});
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");

  const token = useCallback(() => auth.currentUser.getIdToken(), []);

  const loadList = useCallback(async () => {
    const res = await fetch("/api/admin/jobs", { headers: { Authorization: `Bearer ${await token()}` } });
    if (res.status === 403) { setState("forbidden"); return; }
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Failed"); setState("error"); return; }
    setJobs(data.jobs);
    setState("ok");
  }, [token]);

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login?next=/admin/jobs"); return; }
    loadList();
  }, [user, loading, router, loadList]);

  async function expand(id) {
    if (open === id) { setOpen(null); return; }
    setOpen(id);
    const res = await fetch(`/api/admin/jobs?id=${id}`, { headers: { Authorization: `Bearer ${await token()}` } });
    const data = await res.json();
    if (res.ok) setDetail((d) => ({ ...d, [id]: data.job }));
  }

  async function act(id, payload) {
    setError("");
    const res = await fetch("/api/admin/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}` },
      body: JSON.stringify({ id, ...payload }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Failed"); return; }
    setDetail((d) => ({ ...d, [id]: data.job }));
    setJobs((list) => list.map((j) => (j.id === id ? { ...j, status: data.job.status, paid: data.job.paid } : j)));
    setDraft((d) => ({ ...d, [id]: {} }));
  }

  function copy(text, tag) {
    navigator.clipboard?.writeText(text);
    setCopied(tag);
    setTimeout(() => setCopied(""), 1800);
  }

  if (loading || state === "loading") return <div className="flex min-h-screen items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-teal-600" /></div>;
  if (!user) return null;
  if (state === "forbidden") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <ShieldCheck className="text-slate-300" size={40} />
        <p className="text-sm text-slate-600">This account ({user.email}) isn&apos;t an admin.</p>
        <button onClick={() => signOut(auth)} className="text-sm font-semibold text-teal-700">Sign out</button>
      </div>
    );
  }

  const list = (jobs || []).filter((j) =>
    filter === "all" ? true : filter === "active" ? ["queued", "in_progress", "revision", "delivered", "proposed"].includes(j.status) : j.status === filter,
  );
  const paidTotal = (jobs || []).filter((j) => j.paid);
  const counts = STATUSES.reduce((a, s) => ({ ...a, [s]: (jobs || []).filter((j) => j.status === s).length }), {});

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
            <Link href="/">GrahAI Systems</Link>
            <span className="text-slate-300">/</span>
            <span>Hire jobs</span>
            <Link href="/admin/plans" className="text-xs font-semibold text-slate-500 hover:text-slate-900">Plans →</Link>
            <Link href="/admin/leads" className="text-xs font-semibold text-slate-500 hover:text-slate-900">Leads →</Link>
          </div>
          <button onClick={loadList} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><RefreshCw size={13} /> Refresh</button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-slate-900">Marketplace jobs</h1>
            <p className="mt-1 text-sm text-slate-500">{jobs.length} posted · {paidTotal.length} paid</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["active", "all", ...STATUSES].map((s) => (
              <button key={s} onClick={() => setFilter(s)} className={`rounded-full px-3 py-1 text-xs font-semibold ${filter === s ? "bg-slate-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
                {s.replace("_", " ")}{counts[s] !== undefined ? ` (${counts[s]})` : ""}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        <div className="mt-6 space-y-3">
          {list.length === 0 && <p className="rounded-2xl bg-white p-8 text-center text-sm text-slate-500 ring-1 ring-slate-200">Nothing here.</p>}
          {list.map((j) => {
            const d = detail[j.id];
            const dr = draft[j.id] || {};
            const setDr = (k, v) => setDraft((x) => ({ ...x, [j.id]: { ...dr, [k]: v } }));
            return (
              <div key={j.id} className="rounded-2xl bg-white ring-1 ring-slate-200">
                <button onClick={() => expand(j.id)} className="flex w-full items-start gap-3 p-4 text-left">
                  <span className={`mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${color[j.status] || "bg-slate-100"}`}>{j.status.replace("_", " ")}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {j.planName && <span className="mr-2 rounded bg-violet-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-violet-700">{j.planName}</span>}
                      {j.proposal?.title || j.title}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">{j.email} · {j.country} · {j.categoryName} · {fmt(j.createdAt)}{j.source ? ` · via ${j.source}` : ""}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="font-bold text-slate-900">{j.kind === "plan_request" ? "Plan" : j.priceDisplay || "—"}</div>
                    <div className={j.paid || j.paymentStatus === "covered" ? "font-semibold text-emerald-600" : "text-slate-400"}>{j.paid ? "PAID" : j.paymentStatus}</div>
                  </div>
                  {open === j.id ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                </button>

                {open === j.id && (
                  <div className="border-t border-slate-100 p-5">
                    {!d ? <Loader2 className="animate-spin text-teal-600" size={18} /> : (
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div className="space-y-4 text-sm">
                          <div className="flex flex-wrap gap-2">
                            <button onClick={() => copy(agentBrief(d), `brief-${j.id}`)} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                              {copied === `brief-${j.id}` ? <Check size={13} /> : <Copy size={13} />} Copy agent brief
                            </button>
                            <a href={d.roomUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"><ExternalLink size={13} /> Client room</a>
                            {!d.paid && d.status === "proposed" && (
                              <button onClick={() => act(j.id, { action: "check_payment" })} className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"><RefreshCw size={13} /> Check payment</button>
                            )}
                            <select value={d.status} onChange={(e) => act(j.id, { action: "status", status: e.target.value })} className="rounded-lg px-2 py-2 text-xs ring-1 ring-slate-200">
                              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Brief</div>
                            <p className="mt-1 whitespace-pre-wrap text-slate-700">{d.description}</p>
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Proposal v{d.proposal?.version} · {d.proposal?.fit} · {d.priceDisplay || "—"} · {d.proposal?.deliveryDays}d</div>
                            <ul className="mt-1 list-disc pl-5 text-slate-700">{(d.proposal?.deliverables || []).map((x) => <li key={x}>{x}</li>)}</ul>
                            {d.proposal?.declineReason && <p className="mt-2 text-slate-500">{d.proposal.declineReason}</p>}
                          </div>
                          {["in_progress", "revision", "delivered"].includes(d.status) && (
                            <div className="rounded-xl bg-slate-50 p-4">
                              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Deliver</div>
                              <textarea value={dr.note || ""} onChange={(e) => setDr("note", e.target.value)} placeholder="Handover note for the client: what was built, how to use it, what to check." className="mt-2 min-h-[110px] w-full rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200" />
                              <textarea value={dr.links || ""} onChange={(e) => setDr("links", e.target.value)} placeholder="Links, one per line (https:// — repo, zip, deployed URL)" className="mt-2 min-h-[60px] w-full rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200" />
                              <button onClick={() => act(j.id, { action: "deliver", note: dr.note, links: (dr.links || "").split("\n") })} className="mt-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white">Mark delivered & email client</button>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col rounded-xl bg-slate-50 p-4">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Thread</div>
                          <div className="mt-2 max-h-[420px] flex-1 space-y-2 overflow-y-auto text-sm">
                            {d.messages.length === 0 && <p className="text-xs text-slate-400">No messages.</p>}
                            {d.messages.map((m) => (
                              <div key={m.id} className={m.role === "system" ? "text-center text-[11px] text-slate-400" : ""}>
                                {m.role === "system" ? m.body : (
                                  <div className={`rounded-lg px-3 py-2 ${m.role === "client" ? "bg-white ring-1 ring-slate-200" : m.role === "team" ? "bg-teal-50" : "bg-slate-100"}`}>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">{m.role} · {fmt(m.createdAt)}</div>
                                    <p className="whitespace-pre-wrap text-slate-700">{m.body}</p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <textarea value={dr.msg || ""} onChange={(e) => setDr("msg", e.target.value)} placeholder="Reply as the GrahAI team (emails the client)" className="mt-3 min-h-[70px] w-full rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200" />
                          <button onClick={() => act(j.id, { action: "message", body: dr.msg })} className="mt-2 self-start rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white">Send</button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
