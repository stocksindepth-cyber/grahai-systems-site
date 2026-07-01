import Link from "next/link";
import { ArrowLeft, Rocket, Boxes, Zap } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import LaunchFlow from "../../components/LaunchFlow";
import { launchTiers, launchTimeline, factoryModules, launchFaqs } from "../../content/launchTiers";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Launch Your AI Business in 7 Days — from $999 | GrahAI Systems",
  description:
    "Not a website — a business. Custom domain, production AI web app, admin dashboard, analytics, SEO and lead capture, deployed live in 7 days. Fixed price from $999. India and the World.",
  alternates: { canonical: `${SITE_URL}/launch` },
  openGraph: {
    title: "Launch Your AI Business in 7 Days — from $999",
    description: "A production-ready AI business on your own domain, live in 7 days. Fixed price from $999.",
    url: `${SITE_URL}/launch`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Launch your AI business in 7 days" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function LaunchPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Business Launch Package",
    description:
      "A production-ready AI-powered web application launched on your own domain in 7 days — domain, app, AI feature, admin dashboard, analytics, SEO and lead capture. By GrahAI Systems.",
    brand: { "@type": "Brand", name: "GrahAI Systems" },
    offers: launchTiers.map((t) => ({
      "@type": "Offer",
      name: `${t.name} launch package`,
      price: t.priceUsd,
      priceCurrency: "USD",
      url: `${SITE_URL}/launch`,
      availability: "https://schema.org/InStock",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: launchFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Launch", item: `${SITE_URL}/launch` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, faqSchema, breadcrumbSchema]) }} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.06]" />
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-azure-200 backdrop-blur">
            <Rocket size={12} /> Idea → live business in 7 days
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Launch your AI business,<br />not just a website
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We don&apos;t sell React or AI. We hand you a working business — a production AI web app on your own
            domain, with analytics, conversion tracking, SEO and lead capture wired in. Fixed price, live in a week.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-azure-400 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-azure-300">
              See packages — from $999
            </a>
            <a href="/start" className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
              Scope a custom build
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-400">Built by a studio that runs its own AI products · India and the World</p>
        </div>
      </section>

      <main className="relative overflow-hidden bg-slate-50/40">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Pick your launch</h2>
            <p className="mt-3 text-sm text-slate-500">
              One fixed price. No hourly surprises. Every package ships live on your domain.
            </p>
          </div>
          <div className="mt-12">
            <LaunchFlow />
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-azure-600"><Zap size={13} /> The 7-day path</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900">From idea to open for business</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {launchTimeline.map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                  <div className="font-display text-xs font-bold uppercase tracking-widest text-azure-600">{s.day}</div>
                  <h3 className="mt-2 font-display text-sm font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software factory */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-azure-600"><Boxes size={13} /> The software factory</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900">Why we can do this in 7 days</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                We don&apos;t hand-build every app from scratch. We maintain a factory of production-tested modules —
                the same ones behind our own AI products — so each launch is mostly configuration and branding, not
                new engineering. That&apos;s how you get an agency-grade business for a fraction of agency prices.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {factoryModules.map((m) => (
                  <span key={m} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">{m}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="font-display text-lg font-bold text-slate-900">&ldquo;We&apos;re not selling apps. We&apos;re selling businesses.&rdquo;</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every package is a domain, a live application, analytics, and a way to capture and convert customers —
                wrapped and handed to you, ready to run.
              </p>
              <a href="#pricing" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-azure-600 hover:text-azure-700">
                Start your launch →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
            <h2 className="text-center font-display text-3xl font-extrabold text-slate-900">Questions</h2>
            <dl className="mt-10 space-y-4">
              {launchFaqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                  <dt className="font-display text-sm font-bold text-slate-900">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
