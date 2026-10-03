import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../content/products";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "About GrahAI Systems — AI Products for India and the World",
  description:
    "GrahAI Systems is a product company based in Bengaluru, India. We build and operate AI-powered software used by thousands of people across India and the World.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  {
    t: "Ship, then learn",
    d: "We put products in front of real users fast. Feedback from production — not prototypes — is how we improve.",
  },
  {
    t: "Personal and multilingual",
    d: "AI should speak your language. Every product we build supports multiple Indian languages from day one.",
  },
  {
    t: "Honest and accurate",
    d: "We do not inflate claims. Our AI is grounded in real data, and we tell users exactly what it can and cannot do.",
  },
  {
    t: "Accessible, not enterprise-only",
    d: "Our pricing is designed so an individual in a tier-3 city can afford the same quality AI as anyone else.",
  },
];

const stats = [
  { value: "100,000+", label: "Users", sub: "On GrahAI, across 9 languages" },
  { value: "9", label: "Languages", sub: "AI in your own language" },
  { value: "2", label: "Products live", sub: "Built and operated in-house" },
  { value: "11+", label: "Years of software engineering", sub: "Production discipline, not demos" },
];

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrahAI Systems",
    url: SITE_URL,
    description:
      "AI product company building software for India and the World. Products: GrahAI (AI Vedic astrology) and ApplyVita (AI career agent).",
    email: "hello@grahaisystems.com",
    foundingLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    },
    areaServed: "Worldwide",
    owns: products.map((p) => ({ "@type": "Product", name: p.name, url: (p.url || "").split("?")[0] })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header />
      <main className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </Link>

          {/* Intro */}
          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">About</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We build AI products people actually use
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                GrahAI Systems is a product company based in Bengaluru, India. We build and operate
                AI-powered software for everyday people — not just enterprises. Our goal is to make
                high-quality AI accessible, personal, and available in your own language.
              </p>
              <p>
                We started with the belief that AI should work for a student writing their first
                resume and a family making an important life decision, not just for Fortune 500
                companies. That belief shapes every product decision we make.
              </p>
              <p>
                We are a small, focused team. We move fast, stay close to our users, and measure
                what matters. Every product we build is run by us — we feel the latency, the cost,
                the edge cases — before our users ever see a bug.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="font-display text-2xl font-extrabold text-teal-600">{s.value}</div>
                <div className="mt-1 text-xs font-bold text-slate-900">{s.label}</div>
                <div className="mt-0.5 text-[11px] text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">Our Products</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-slate-400">{p.domain}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-teal-600 transition-colors mt-0.5 flex-shrink-0" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.tagline}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">What we stand for</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-display text-sm font-bold text-slate-900">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center">
            <h2 className="font-display text-xl font-extrabold text-white">Get in touch</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
              Questions, ideas, partnerships — we read every email.
            </p>
            <a
              href="mailto:hello@grahaisystems.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-xs font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
            >
              hello@grahaisystems.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
