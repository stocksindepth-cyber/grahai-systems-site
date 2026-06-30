"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Loader2, Plus, FileText, CalendarRange, LogOut, CheckCircle2, Circle, Clock } from "lucide-react";
import { auth } from "../../lib/firebaseClient";
import { useAuth } from "../../components/AuthProvider";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—";

const statusBadge = {
  quote: { label: "Quote", cls: "bg-slate-100 text-slate-600" },
  booked: { label: "Booked", cls: "bg-azure-50 text-azure-700" },
  in_progress: { label: "In progress", cls: "bg-amber-50 text-amber-700" },
  delivered: { label: "Delivered", cls: "bg-emerald-50 text-emerald-700" },
};

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login?next=/dashboard"); return; }
    (async () => {
      try {
        const idToken = await user.getIdToken();
        const res = await fetch("/api/projects", { headers: { Authorization: `Bearer ${idToken}` } });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load");
        setProjects(data.projects || []);
      } catch (e) {
        setError(e.message);
        setProjects([]);
      }
    })();
  }, [user, loading, router]);

  if (loading || (user && projects === null)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-azure-600" />
      </div>
    );
  }
  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* App top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-navy-700 ring-1 ring-navy-700/20">
              <Image src="/logo.png" alt="GrahAI Systems" fill sizes="32px" className="object-contain p-1 invert" />
            </div>
            <span className="font-display text-base font-bold text-navy-700">GrahAI <span className="font-light text-slate-400">Systems</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-slate-500 sm:inline">{user.email}</span>
            <button onClick={() => signOut(auth)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900">
              <LogOut size={14} /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">Your projects</h1>
            <p className="mt-1 text-sm text-slate-500">Quotes, proposals and delivery timelines — all in one place.</p>
          </div>
          <Link href="/start" className="inline-flex items-center gap-1.5 rounded-xl bg-azure-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-azure-700">
            <Plus size={14} /> New quote
          </Link>
        </div>

        {error && <p className="mt-6 text-sm font-medium text-red-600">{error}</p>}

        {projects.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <FileText className="mx-auto text-slate-300" size={36} />
            <h2 className="mt-4 font-display text-lg font-bold text-navy-700">No projects yet</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
              Describe your problem and our AI architect will scope it instantly. Save it here to get a proposal and track delivery.
            </p>
            <Link href="/start" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-azure-600 px-5 py-3 text-sm font-semibold text-white hover:bg-azure-700">
              Get an instant quote
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {projects.map((p) => {
              const badge = statusBadge[p.status] || statusBadge.quote;
              return (
                <div key={p.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${badge.cls}`}>{badge.label}</span>
                      <h3 className="mt-2 font-display text-lg font-extrabold text-navy-700">{p.packageName}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-navy-700">{p.priceFromDisplay}</div>
                      <div className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <CalendarRange size={12} /> Delivery by {fmtDate(p.deliveryDate)}
                      </div>
                    </div>
                  </div>

                  {p.summary && <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.summary}</p>}

                  {/* dated milestone timeline */}
                  {(p.milestones || []).length > 0 && (
                    <ol className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      {p.milestones.map((m, i) => {
                        const Icon = m.status === "done" ? CheckCircle2 : m.status === "in_progress" ? Clock : Circle;
                        const color = m.status === "done" ? "text-emerald-500" : m.status === "in_progress" ? "text-amber-500" : "text-slate-300";
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <Icon size={18} className={`mt-0.5 shrink-0 ${color}`} />
                            <div className="flex-1">
                              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                <span className="text-sm font-semibold text-navy-700">{m.name}</span>
                                <span className="text-xs text-slate-400">{fmtDate(m.startDate)} – {fmtDate(m.endDate)}</span>
                              </div>
                              <p className="text-xs leading-relaxed text-slate-500">{m.deliverables}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/dashboard/proposal/${p.id}`} className="inline-flex items-center gap-1.5 rounded-xl bg-navy-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-navy-800">
                      <FileText size={14} /> View proposal
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
