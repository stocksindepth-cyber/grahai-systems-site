"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Loader2, ShieldCheck, RefreshCw, ExternalLink } from "lucide-react";
import { auth } from "../../../lib/firebaseClient";
import { useAuth } from "../../../components/AuthProvider";

const color = {
  active: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-800",
  lapsed: "bg-orange-100 text-orange-800",
  cancelled: "bg-slate-200 text-slate-500",
};
const fmt = (iso) => (iso ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—");

export default function AdminPlansPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");

  const token = useCallback(() => auth.currentUser.getIdToken(), []);
  const load = useCallback(async () => {
    const res = await fetch("/api/admin/plans", { headers: { Authorization: `Bearer ${await token()}` } });
    if (res.status === 403) { setState("forbidden"); return; }
    const d = await res.json();
    if (!res.ok) { setError(d.error || "Failed"); setState("error"); return; }
    setData(d);
    setState("ok");
  }, [token]);

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login?next=/admin/plans"); return; }
    load();
  }, [user, loading, router, load]);

  async function checkPayment(id) {
    const res = await fetch("/api/admin/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}` },
      body: JSON.stringify({ id, action: "check_payment" }),
    });
    if (res.ok) load();
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
  if (state === "error") return <p className="p-10 text-sm text-red-600">{error}</p>;
  const s = data.summary;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
            <Link href="/">GrahAI Systems</Link>
            <span className="text-slate-300">/</span>
            <span>Plans</span>
            <Link href="/admin/jobs" className="text-xs font-semibold text-slate-500 hover:text-slate-900">Jobs →</Link>
          </div>
          <button onClick={load} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><RefreshCw size={13} /> Refresh</button>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            ["MRR (USD)", `$${s.mrrUsd.toLocaleString("en-US")}`],
            ["Active plans", s.active],
            ["Ending this period", s.endingAtPeriodEnd],
            ["Lapsed", s.lapsed],
            ["Awaiting 1st payment", s.pending],
          ].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
              <div className="text-xs text-slate-500">{l}</div>
              <div className="mt-1 font-display text-2xl font-extrabold text-slate-900">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 overflow-x-auto rounded-2xl bg-white ring-1 ring-slate-200">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Paid until</th>
                <th className="px-4 py-3">Payments</th>
                <th className="px-4 py-3"> </th>
              </tr>
            </thead>
            <tbody>
              {data.plans.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No plans yet.</td></tr>}
              {data.plans.map((p) => (
                <tr key={p.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3"><div className="font-semibold text-slate-900">{p.name || "—"}</div><div className="text-xs text-slate-500">{p.email} · {p.country}</div></td>
                  <td className="px-4 py-3">{p.planName}<div className="text-xs text-slate-500">${p.priceUsd}/mo · {p.currency}</div></td>
                  <td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${color[p.status] || "bg-slate-100"}`}>{p.status}</span>{p.cancelAtPeriodEnd && <div className="mt-1 text-[11px] text-orange-700">cancels at period end</div>}</td>
                  <td className="px-4 py-3 text-slate-600">{fmt(p.periodEnd)}</td>
                  <td className="px-4 py-3 text-slate-600">{p.paymentsCount}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      {p.paymentStatus === "link_created" && <button onClick={() => checkPayment(p.id)} className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Check payment</button>}
                      <a href={p.roomUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"><ExternalLink size={12} /> Room</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">Plan requests show up in <Link href="/admin/jobs" className="font-semibold text-teal-700">Jobs</Link> tagged with their plan. Renewal links go out automatically 3 days before each period ends.</p>
      </main>
    </div>
  );
}
