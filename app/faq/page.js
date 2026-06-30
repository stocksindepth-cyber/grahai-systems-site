import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { faqCategories, allFaqs } from "../../content/faqs";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Development FAQ — Cost, Timelines & Process | GrahAI Systems",
  description:
    "Straight answers about building AI: what GrahAI Systems builds, how much AI projects cost, timelines, integrations, security, and how to start. By a studio that operates its own AI products.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="relative overflow-hidden bg-slate-50/30 pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <div className="mt-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">FAQ</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Questions, answered straight
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              What we build, what it costs, how long it takes, and how to start —
              from a studio that builds and operates AI in production.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {faqCategories.map((cat) => (
              <section key={cat.title}>
                <h2 className="font-display text-xl font-extrabold text-slate-900">{cat.title}</h2>
                <dl className="mt-5 space-y-5">
                  {cat.faqs.map((f) => (
                    <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <dt className="font-display text-sm font-bold text-slate-900">{f.q}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-azure-150 bg-azure-50/60 p-8 text-center">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Still deciding?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              Get an instant scope and price for your AI project — no call required to start.
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
