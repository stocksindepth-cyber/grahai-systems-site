import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { caseStudies } from "../../content/caseStudies";

export const metadata = {
  title: "AI Engineering Case Studies — Production Systems We Build & Run",
  description:
    "Deep technical case studies from GrahAI Systems: the problem, architecture, AI stack, engineering challenges, results and lessons behind the four production AI products we own and operate.",
  alternates: { canonical: "https://grahaisystems.com/case-studies" },
};

const accent = {
  azure: "text-azure-600 bg-azure-50 border-azure-100",
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
  amber: "text-amber-600 bg-amber-50 border-amber-100",
  purple: "text-purple-600 bg-purple-50 border-purple-100",
};

export default function CaseStudiesPage() {
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">CASE STUDIES</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              How we build production AI
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              We don&apos;t just advise on AI — we ship and operate it. Each of these
              is a real product we own, taken apart for the engineers and
              founders evaluating us for a build that has to work in the real world.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${accent[cs.accent] || accent.azure}`}>
                    {cs.product}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{cs.category}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-extrabold text-slate-900 group-hover:text-azure-700 transition-colors">
                  {cs.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{cs.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                  {cs.metrics.slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-[10px] leading-tight text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-azure-600 transition-colors">
                  Read the build <ArrowUpRight size={14} />
                </span>
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
