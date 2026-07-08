"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Loader2, LogOut, ShieldCheck, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { auth } from "../../../lib/firebaseClient";
import { useAuth } from "../../../components/AuthProvider";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—";

const STATUSES = ["new", "contacted", "quoted", "won", "lost"];
const statusColor = {
  new: "bg-azure-100 text-azure-700",
  contacted: "bg-amber-100 text-amber-700",
  quoted: "bg-violet-100 text-violet-700",
  won: "bg-emerald-100 text-emerald-700",
  lost: "bg-slate-200 text-slate-500",
};

export default function AdminLeadsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [leads, setLeads] = useState(null);
  const [state, setState] = useState("loading"); // loading | ok | forbidden | error
  const [error, setError] = useState("");
  const [open, setOpen] = useState({});
  const [noteDraft, setNoteDraft] = useState({});

  const token = useCallback(() => auth.currentUser.getIdToken(), []);

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login?next=/admin/leads"); return; }
    (async () => {
      try {
        const res = await fetch("/api/admin/leads", { headers: { Authorization: `Bearer ${await token()}` } });
        if (res.status === 403) { setState("forbidden"); return; }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed");
        setLeads(data.leads || []);
        setState("ok");
      } catch (e) { setError(e.message); setState("error"); }
    })();
  }, [user, loading, router, token]);

  async function patch(lead, payload) {
    const res = await fetch("/api/admin/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}` },
      body: JSON.stringify({ id: lead.id, ...payload }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Update failed"); return; }
    setLeads((list) => list.map((x) => (x.id === lead.id ? { ...x, status: data.status ?? x.status, notes: data.notes ?? x.notes } : x)));
    if (payload.note) setNoteDraft((d) => ({ ...d, [lead.id]: "" }));
  }

  if (loading || state === "loading") {
    return <div className="flex min-h-screen items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-azure-600" /></div>;
  }
  if (!user) return null;
  if (state === "forbidden") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <ShieldCheck className="text-slate-300" size={40} />
        <p className="text-sm text-slate-600">This account ({user.email}) isn&apos;t an admin.</p>
        <button onClick={() => signOut(auth)} className="text-sm font-semibold text-azure-600">Sign out</button>
      </div>
    );
  }

  const counts = STATUSES.reduce((a, s) => ({ ...a, [s]: leads.filter((l) => l.status === s).length }), {});

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-navy-700 ring-1 ring-navy-700/20">
              <Image src="/logo.png" alt="GrahAI Systems" fill sizes="32px" className="object-contain p-1 invert" />
            </div>
            <span className="font-display text-base font-bold text-navy-700">Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-slate-500 sm:inline">{user.email}</span>
            <button onClick={() => signOut(auth)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><LogOut size={14} /> Sign out</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* tabs */}
        <div className="mb-8 flex gap-2">
          <Link href="/admin" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100">Projects</Link>
          <span className="rounded-lg bg-navy-700 px-4 py-2 text-sm font-semibold text-white">Leads</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">Leads</h1>
            <p className="mt-1 text-sm text-slate-500">{leads.length} total · each got an instant tailored auto-reply.</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {STATUSES.map((s) => (
              <span key={s} className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${statusColor[s]}`}>{counts[s]} {s}</span>
            ))}
          </div>
        </div>
        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        <div className="mt-8 space-y-4">
          {leads.length === 0 && <p className="text-sm text-slate-500">No leads yet.</p>}
          {leads.map((l) => {
            const isOpen = !!open[l.id];
            return (
              <div key={l.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-extrabold text-navy-700">{l.name || l.email}</span>
                      {l.urgency && /asap|urgent/i.test(l.urgency) && <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase text-red-600">{l.urgency}</span>}
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusColor[l.status]}`}>{l.status}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">
                      <a href={`mailto:${l.email}`} className="font-medium text-azure-600 hover:underline">{l.email}</a>
                      {l.company ? ` · ${l.company}` : ""}{l.country ? ` · ${l.country}` : ""} · {fmtDate(l.createdAt)}
                    </p>
                    <p className="mt-1.5 text-xs text-slate-500"><span className="font-semibold text-slate-700">{l.packageName}</span> · {l.priceFromDisplay}{l.totalWeeks ? ` · ${l.totalWeeks} wk` : ""}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${l.email}?subject=${encodeURIComponent("Re: your " + (l.packageName || "AI project"))}`} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"><Mail size={12} /> Reply</a>
                    <select value={l.status} onChange={(e) => patch(l, { status: e.target.value })} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 focus:border-azure-500 focus:outline-none">
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <button onClick={() => setOpen((o) => ({ ...o, [l.id]: !isOpen }))} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-700">
                  {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />} {isOpen ? "Hide" : "Details"}
                </button>

                {isOpen && (
                  <div className="mt-3 space-y-3 border-t border-slate-100 pt-3">
                    <div className="grid gap-2 text-xs text-slate-600 sm:grid-cols-3">
                      <div><span className="font-semibold text-slate-400">Use case</span><br />{l.useCase || "—"}</div>
                      <div><span className="font-semibold text-slate-400">Scale</span><br />{l.scale || "—"}</div>
                      <div><span className="font-semibold text-slate-400">Urgency</span><br />{l.urgency || "—"}</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-400">Requirements</span><br />{l.requirements || "—"}
                    </div>
                    {l.notes?.length > 0 && (
                      <div className="space-y-1.5">
                        {l.notes.map((n, i) => (
                          <div key={i} className="text-xs text-slate-600"><span className="text-slate-400">{fmtDate(n.at)}:</span> {n.text}</div>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <input
                        value={noteDraft[l.id] || ""}
                        onChange={(e) => setNoteDraft((d) => ({ ...d, [l.id]: e.target.value }))}
                        onKeyDown={(e) => { if (e.key === "Enter" && noteDraft[l.id]?.trim()) patch(l, { note: noteDraft[l.id] }); }}
                        placeholder="Add a note…"
                        className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-azure-500 focus:outline-none"
                      />
                      <button onClick={() => noteDraft[l.id]?.trim() && patch(l, { note: noteDraft[l.id] })} className="rounded-lg bg-navy-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-navy-800">Add</button>
                    </div>
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
