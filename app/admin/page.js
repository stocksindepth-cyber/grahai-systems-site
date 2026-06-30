"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Loader2, LogOut, ShieldCheck, ExternalLink } from "lucide-react";
import { auth } from "../../lib/firebaseClient";
import { useAuth } from "../../components/AuthProvider";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—";

const PROJECT_STATUSES = ["quote", "booked", "in_progress", "delivered"];
const MS = [
  { key: "upcoming", label: "Upcoming" },
  { key: "in_progress", label: "In progress" },
  { key: "done", label: "Done" },
];

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState(null);
  const [state, setState] = useState("loading"); // loading | ok | forbidden | error
  const [error, setError] = useState("");

  const token = useCallback(() => auth.currentUser.getIdToken(), []);

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login?next=/admin"); return; }
    (async () => {
      try {
        const res = await fetch("/api/admin/projects", { headers: { Authorization: `Bearer ${await token()}` } });
        if (res.status === 403) { setState("forbidden"); return; }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed");
        setProjects(data.projects || []);
        setState("ok");
      } catch (e) { setError(e.message); setState("error"); }
    })();
  }, [user, loading, router, token]);

  async function patch(p, payload) {
    const res = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}` },
      body: JSON.stringify({ uid: p.ownerUid, id: p.id, ...payload }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Update failed"); return; }
    setProjects((list) =>
      list.map((x) =>
        x.id === p.id && x.ownerUid === p.ownerUid
          ? { ...x, status: data.status ?? x.status, milestones: data.milestones ?? x.milestones }
          : x,
      ),
    );
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
        <p className="text-xs text-slate-400">Ask to be added to <code className="rounded bg-slate-100 px-1.5 py-0.5">ADMIN_EMAILS</code>, then refresh.</p>
        <button onClick={() => signOut(auth)} className="text-sm font-semibold text-azure-600">Sign out</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-navy-700 ring-1 ring-navy-700/20">
              <Image src="/logo.png" alt="GrahAI Systems" fill sizes="32px" className="object-contain p-1 invert" />
            </div>
            <span className="font-display text-base font-bold text-navy-700">Admin <span className="font-light text-slate-400">· Delivery</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-slate-500 sm:inline">{user.email}</span>
            <button onClick={() => signOut(auth)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><LogOut size={14} /> Sign out</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">All projects</h1>
            <p className="mt-1 text-sm text-slate-500">{projects.length} project{projects.length === 1 ? "" : "s"} · clients see status changes live.</p>
          </div>
        </div>
        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        <div className="mt-8 space-y-5">
          {projects.length === 0 && <p className="text-sm text-slate-500">No projects yet.</p>}
          {projects.map((p) => (
            <div key={`${p.ownerUid}/${p.id}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-navy-700">{p.packageName}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {p.company || "—"} · <span className="font-medium">{p.contactEmail}</span> · {p.priceFromDisplay} · created {fmtDate(p.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</label>
                  <select
                    value={p.status}
                    onChange={(e) => patch(p, { status: e.target.value })}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 focus:border-azure-500 focus:outline-none"
                  >
                    {PROJECT_STATUSES.map((s) => <option key={s} value={s}>{s.replace("_", " ")}</option>)}
                  </select>
                </div>
              </div>

              {/* milestones */}
              <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {(p.milestones || []).map((m, i) => (
                  <div key={i} className="flex flex-wrap items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-sm font-semibold text-navy-700">{m.name}</span>
                      <span className="ml-2 text-xs text-slate-400">{fmtDate(m.startDate)} – {fmtDate(m.endDate)}</span>
                    </div>
                    <div className="inline-flex overflow-hidden rounded-lg border border-slate-200">
                      {MS.map((opt) => {
                        const active = (m.status || "upcoming") === opt.key;
                        return (
                          <button
                            key={opt.key}
                            onClick={() => patch(p, { milestoneIndex: i, milestoneStatus: opt.key })}
                            className={`px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                              active
                                ? opt.key === "done" ? "bg-emerald-500 text-white"
                                  : opt.key === "in_progress" ? "bg-amber-500 text-white"
                                  : "bg-slate-200 text-slate-700"
                                : "bg-white text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs">
                <span className="text-slate-400">Delivery by {fmtDate(p.deliveryDate)} · {p.totalWeeks} wk</span>
                {p.hasProposal && (
                  <Link href={`/dashboard/proposal/${p.id}`} className="inline-flex items-center gap-1 font-semibold text-azure-600" target="_blank">
                    Proposal <ExternalLink size={11} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
