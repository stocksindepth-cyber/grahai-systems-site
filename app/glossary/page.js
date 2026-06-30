import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { glossary } from "../../content/glossary";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Glossary — Agents, RAG, Evals & More | GrahAI Systems",
  description:
    "Plain-English definitions of the AI terms that matter for building production systems: AI agents, RAG, fine-tuning, vector databases, evals, guardrails, observability and more.",
  alternates: { canonical: `${SITE_URL}/glossary` },
};

const slugify = (t) => t.toLowerCase().replace(/\([^)]*\)/g, "").trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function GlossaryPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "GrahAI Systems AI Glossary",
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: glossary.map((g) => ({
      "@type": "DefinedTerm",
      name: g.term,
      description: g.definition,
      inDefinedTermSet: `${SITE_URL}/glossary`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSet) }} />
      <Header />
      <main className="relative overflow-hidden bg-slate-50/30 pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <div className="mt-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">AI GLOSSARY</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              The AI terms that actually matter
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Plain-English definitions of the concepts behind production AI —
              written by engineers who ship and operate it.
            </p>
          </div>

          <dl className="mt-12 space-y-4">
            {glossary.map((g) => (
              <div key={g.term} id={slugify(g.term)} className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <dt className="font-display text-base font-bold text-slate-900">{g.term}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{g.definition}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 rounded-3xl border border-azure-150 bg-azure-50/60 p-8 text-center">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Ready to build something real?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              Tell us the outcome you want. We will scope the agent, RAG system or automation that gets you there.
            </p>
            <a
              href="/start"
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-azure-600 px-5 py-3 text-xs font-semibold text-white shadow-md shadow-azure-600/10 transition-all hover:bg-azure-700"
            >
              Scope my project <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
