import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { comparisons } from "../../content/comparisons";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Buying Guides & Comparisons | GrahAI Systems",
  description:
    "Honest, engineer-written guides for buying AI: how to choose an AI development partner, build vs buy, agency vs in-house, OpenAI vs Claude vs Gemini, RAG vs fine-tuning, and more.",
  alternates: { canonical: `${SITE_URL}/compare` },
};

export default function CompareHub() {
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">BUYING GUIDES</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Straight answers before you spend on AI
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Engineer-written decision guides — no hype, no vendor spin. The same
              reasoning we use when we scope a build for a client.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {comparisons.map((s) => (
              <Link
                key={s.slug}
                href={`/compare/${s.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
              >
                <span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-azure-600">{s.category}</span>
                  <span className="mt-1 block text-sm font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                    {s.headline} {s.keywordAccent}
                  </span>
                </span>
                <ArrowUpRight size={15} className="mt-1 shrink-0 text-slate-400 group-hover:text-azure-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
