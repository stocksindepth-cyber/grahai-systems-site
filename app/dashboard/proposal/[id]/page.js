"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Download, Check } from "lucide-react";
import { useAuth } from "../../../../components/AuthProvider";

const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—";

export default function ProposalPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | generating | ready | error
  const [error, setError] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace(`/login?next=/dashboard/proposal/${id}`); return; }
    (async () => {
      try {
        const idToken = await user.getIdToken();
        const res = await fetch("/api/projects", { headers: { Authorization: `Bearer ${idToken}` } });
        const data = await res.json();
        const p = (data.projects || []).find((x) => x.id === id);
        if (!p) throw new Error("Project not found");
        setProject(p);
        if (p.proposal) { setProposal(p.proposal); setStatus("ready"); return; }
        // generate on first view
        setStatus("generating");
        const gen = await fetch("/api/rfp", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` },
          body: JSON.stringify({ id }),
        });
        const gd = await gen.json();
        if (!gen.ok) throw new Error(gd.error || "Could not generate proposal");
        setProposal(gd.proposal);
        setStatus("ready");
      } catch (e) {
        setError(e.message);
        setStatus("error");
      }
    })();
  }, [user, loading, id, router]);

  if (loading || status === "loading" || status === "generating") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50">
        <Loader2 className="animate-spin text-azure-600" />
        <p className="text-sm text-slate-500">
          {status === "generating" ? "Our AI is writing your proposal…" : "Loading…"}
        </p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <p className="text-sm font-medium text-red-600">{error}</p>
        <Link href="/dashboard" className="text-sm font-semibold text-azure-600">Back to dashboard</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <style>{`@media print { .no-print { display: none !important; } .doc { box-shadow: none !important; border: none !important; } }`}</style>

      <div className="no-print mx-auto mb-5 flex max-w-3xl items-center justify-between px-4">
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900">
          <ArrowLeft size={15} /> Dashboard
        </Link>
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl bg-azure-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-azure-700">
          <Download size={14} /> Download PDF
        </button>
      </div>

      {/* Document */}
      <article className="doc mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <span className="font-display text-lg font-extrabold text-navy-700">GrahAI <span className="font-light text-slate-400">Systems</span></span>
          <span className="text-xs text-slate-400">{fmtDate(proposal.generatedAt)}</span>
        </div>

        <h1 className="mt-7 font-display text-2xl font-extrabold leading-tight text-navy-700 sm:text-3xl">{proposal.title}</h1>
        {project.company && <p className="mt-1 text-sm text-slate-500">Prepared for {project.company}</p>}

        <p className="mt-6 text-sm leading-relaxed text-slate-700">{proposal.execSummary}</p>

        <Block title="Our understanding" items={proposal.understanding} />
        <Block title="Our approach" items={proposal.approach} />
        <Block title="In scope" items={proposal.inScope} check />

        {/* Dated delivery plan from the project */}
        <Section title="Delivery plan">
          <ol className="space-y-3">
            {(project.milestones || []).map((m, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-navy-700 text-xs font-bold text-white">{i + 1}</span>
                <div>
                  <div className="text-sm font-semibold text-navy-700">{m.name} <span className="font-normal text-slate-400">· {m.weeks} wk · by {fmtDate(m.endDate)}</span></div>
                  <p className="text-xs leading-relaxed text-slate-500">{m.deliverables}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm font-semibold text-navy-700">Target delivery: {fmtDate(project.deliveryDate)} ({project.totalWeeks} weeks)</p>
        </Section>

        <Block title="Out of scope" items={proposal.outOfScope} />

        {/* Investment */}
        <Section title="Investment">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="font-display text-2xl font-extrabold text-navy-700">{project.priceFromDisplay}</div>
            <p className="mt-1 text-sm text-slate-600">
              {project.paymentMode === "deposit"
                ? `To begin: ${project.payNowDisplay} booking deposit, credited in full to the project.`
                : `Payable in full: ${project.payNowDisplay}.`}
            </p>
          </div>
        </Section>

        <Block title="Why GrahAI Systems" items={proposal.whyUs} check />
        <Block title="Terms" items={proposal.terms} />

        <div className="no-print mt-10 rounded-2xl bg-navy-gradient p-6 text-center">
          <p className="text-sm text-slate-300">Ready to start? Reserve your slot with a booking deposit.</p>
          <Link href="/start" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-azure-400 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-azure-300">
            Book this engagement
          </Link>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-base font-bold uppercase tracking-wide text-azure-600">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Block({ title, items, check }) {
  if (!items || items.length === 0) return null;
  return (
    <Section title={title}>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
            {check ? <Check size={15} className="mt-0.5 shrink-0 text-azure-600" /> : <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
