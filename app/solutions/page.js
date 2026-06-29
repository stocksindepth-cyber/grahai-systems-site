import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Cpu, Database, GitMerge } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { solutions } from "../../content/solutions";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Solutions — Agents, RAG & Workflow Automation | GrahAI Systems",
  description:
    "Production-grade AI solutions for business: AI agent development, RAG & private GPT, and AI workflow automation — by industry and by use case. Built by a studio that runs its own AI products.",
  alternates: { canonical: `${SITE_URL}/solutions` },
};

const pillarMeta = {
  "AI Agents": { icon: Cpu, blurb: "Autonomous systems that reason, plan and act on real business tasks." },
  RAG: { icon: Database, blurb: "Private, cited answers over your own knowledge — no hallucinations." },
  "Workflow Automation": { icon: GitMerge, blurb: "Remove the repetitive human steps between your systems." },
};

export default function SolutionsHub() {
  const pillars = ["AI Agents", "RAG", "Workflow Automation"];
  const grouped = pillars.map((p) => ({
    pillar: p,
    items: solutions.filter((s) => s.pillar === p),
  }));

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-slate-50/30 pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">AI SOLUTIONS</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Find the AI system for your problem
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Production AI, organized by capability, industry and use case.
              Every page is a real engagement we can deliver — and run.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {grouped.map(({ pillar, items }) => {
              const meta = pillarMeta[pillar] || {};
              const Icon = meta.icon || Cpu;
              return (
                <div key={pillar}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-extrabold text-slate-900">{pillar}</h2>
                      <p className="text-sm text-slate-500">{meta.blurb}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
                      >
                        <span className="text-sm font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                          {s.headline} {s.keywordAccent}
                        </span>
                        <ArrowUpRight size={15} className="shrink-0 text-slate-400 group-hover:text-azure-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
