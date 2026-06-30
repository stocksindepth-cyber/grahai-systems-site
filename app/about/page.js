import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import { stats } from "../../content/stats";
import { products } from "../../content/products";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "About GrahAI Systems — A Studio That Operates Its Own AI",
  description:
    "GrahAI Systems is an engineer-led AI software studio in Bengaluru, India. We build and operate four of our own AI products, and bring that production discipline to client builds across India and the World.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const principles = [
  { t: "We operate what we build", d: "Four AI products in production, run by us 24/7. We feel the cost, latency and reliability tradeoffs before you do." },
  { t: "Outcomes, not demos", d: "Every engagement is scoped to a measurable result — fewer manual hours, lower error rates — with success metrics agreed up front." },
  { t: "Engineering you can inspect", d: "Evals, observability and guardrails are built in, not bolted on. You can see what the system did and why." },
  { t: "No lock-in", d: "We integrate with your stack and keep the AI layer decoupled, so you own the outcome and can take it in-house anytime." },
];

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrahAI Systems",
    url: SITE_URL,
    description:
      "Engineer-led AI software studio that designs, builds and operates AI agents, RAG systems, workflow automation and custom AI SaaS. Operates its own four AI products in production.",
    email: "support@grahai.com",
    foundingLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" } },
    areaServed: "Worldwide",
    knowsAbout: ["AI agents", "Retrieval-augmented generation", "Workflow automation", "Custom AI SaaS", "LLM applications"],
    owns: products.map((p) => ({ "@type": "Product", name: p.name, url: (p.url || "").split("?")[0] })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header />
      <main className="relative overflow-hidden bg-slate-50/30 pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">ABOUT</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              An AI studio that ships, then runs what it ships
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                GrahAI Systems is an engineer-led AI software studio based in Bengaluru, India,
                building for India and the World. We design, build and operate production AI —
                AI agents, RAG systems, workflow automation and custom AI SaaS.
              </p>
              <p>
                Here is what separates us from a typical agency: we do not only do client work.
                We run four of our own AI products in production — and operating them every day is
                where we learned the parts that demos hide: token economics, evals, latency budgets,
                payment reliability and 24/7 uptime. That hard-won discipline is exactly what we
                bring to your build.
              </p>
              <p>
                With 11+ years of production software experience behind the studio, we take a single
                high-value workflow, scope it to a measurable outcome, build the system, instrument
                it, and stay on to operate and improve it. One accountable partner, from idea to
                production.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="font-display text-2xl font-extrabold text-azure-600">{s.value}</div>
                <div className="mt-1 text-xs font-bold text-slate-900">{s.label}</div>
                <div className="mt-0.5 text-[11px] text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">How we work</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-azure-50 text-azure-600"><Check size={14} /></span>
                    <h3 className="font-display text-sm font-bold text-slate-900">{p.t}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products as proof */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">The proof: products we run ourselves</h2>
            <p className="mt-2 text-sm text-slate-600">Most agencies show mockups. We can show four AI products built, deployed, marketed and operated in production.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md">
                  <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-azure-150 bg-azure-50/60 p-8 text-center">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Let&apos;s scope your AI system</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              Tell us the outcome you want. You will get an instant scope, a fixed price, and a dashboard to track delivery.
            </p>
            <a href="/start" className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-azure-600 px-5 py-3 text-xs font-semibold text-white shadow-md shadow-azure-600/10 transition-all hover:bg-azure-700">
              Start now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
