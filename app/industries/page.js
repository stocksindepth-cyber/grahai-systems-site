import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { industries } from "../../content/industries";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Solutions by Industry | GrahAI Systems",
  description:
    "Production AI built for your industry — manufacturing, healthcare, insurance, logistics, banking, retail, legal, HR, fintech and more. By a studio that runs its own AI products in India and the World.",
  alternates: { canonical: `${SITE_URL}/industries` },
};

export default function IndustriesHub() {
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">BY INDUSTRY</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              AI built for how your industry actually works
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              We map AI to the real systems, regulations and workflows of your sector —
              then build, deploy and operate it. Pick your industry to see what we ship.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((s) => (
              <Link
                key={s.slug}
                href={`/industries/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                  AI for {s.industry}
                </span>
                <ArrowUpRight size={15} className="shrink-0 text-slate-400 group-hover:text-azure-600 transition-colors" />
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
