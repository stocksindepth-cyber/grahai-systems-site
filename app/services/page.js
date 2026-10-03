import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Layers, Sparkles, RefreshCw } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "AI Implementation Services — GrahAI Systems",
  description:
    "GrahAI Systems builds production AI systems for businesses — AI agents, workflow automation, RAG, and custom AI SaaS. Fixed price, 14-day delivery. US, UK, EU and India.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const services = [
  {
    id: "sprint",
    badge: "Most Popular",
    badgeClass: "bg-teal-50 text-teal-700 border-teal-200",
    title: "AI Agent Sprint",
    price: "$3,000",
    unit: "one-time",
    delivery: "Delivered in 14 days",
    description:
      "We scope, build and deploy one production-ready AI agent for your business. Includes tool calling, database integration, authentication, admin dashboard and deployment. You get a running system — not a prototype.",
    features: [
      "AI agent + RAG or tool calling",
      "Full integration with your existing stack",
      "Admin dashboard + analytics",
      "Deployed, documented and handed off",
    ],
    cta: "Start a Sprint",
    href: "mailto:support@grahai.com?subject=AI Agent Sprint — Let's scope it",
    cardClass: "border-teal-200 ring-1 ring-teal-500/10",
    btnClass: "bg-teal-600 hover:bg-teal-500 shadow-teal-700/20",
  },
  {
    id: "retainer",
    badge: "Best for recurring work",
    badgeClass: "bg-slate-100 text-slate-600 border-slate-200",
    title: "Productized AI Service",
    price: "$2,000",
    unit: "setup + $750/mo",
    delivery: "Ongoing · cancel any time",
    description:
      "Pick one outcome — lead qualification, customer support, document processing, internal copilot — and we build, run and improve the AI system every month. You own the system.",
    features: [
      "One workflow automated end-to-end",
      "Monthly improvements + monitoring",
      "We operate it so your team doesn't have to",
      "Cancel any time — you keep the system",
    ],
    cta: "Book a scoping call",
    href: "mailto:support@grahai.com?subject=Productized AI Service — scoping",
    cardClass: "border-slate-200",
    btnClass: "bg-slate-900 hover:bg-slate-700",
  },
  {
    id: "system",
    badge: "For larger builds",
    badgeClass: "bg-slate-100 text-slate-600 border-slate-200",
    title: "Full AI System",
    price: "From $5,000",
    unit: "scoped per project",
    delivery: "3–6 week delivery",
    description:
      "Complete AI-powered product — internal tool, customer-facing app, or automation platform. We handle architecture, build, evaluation, deployment and handoff. Fixed price, agreed outcomes.",
    features: [
      "End-to-end system design + build",
      "Evals, observability, guardrails built in",
      "Supports any LLM or multi-model setup",
      "Fixed price, success metrics agreed up front",
    ],
    cta: "Scope your project",
    href: "mailto:support@grahai.com?subject=Full AI System — scoping",
    cardClass: "border-slate-200",
    btnClass: "bg-slate-900 hover:bg-slate-700",
  },
];

const goodFitFor = [
  "SaaS companies adding AI features",
  "Accounting, legal, and professional firms",
  "Recruitment and HR teams",
  "Logistics and trucking companies",
  "Real estate teams",
  "Insurance agencies",
  "E-commerce and D2C brands",
  "Internal ops teams with repetitive workflows",
];

const whyUs = [
  {
    icon: Layers,
    title: "11+ years of production engineering",
    body: "We've shipped production software across consumer apps, SaaS, and AI systems. Not just prototypes.",
  },
  {
    icon: Sparkles,
    title: "We run our own AI in production",
    body: "Our own products serve 10,000+ users/month. We feel the cost, latency, and reliability tradeoffs before you do.",
  },
  {
    icon: RefreshCw,
    title: "Fixed price, measurable outcomes",
    body: "Every project is scoped to a specific result. No hourly billing surprises. You own everything we build.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[120px]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
            >
              <ArrowLeft size={12} /> GrahAI Systems
            </Link>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold text-teal-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
                AI Implementation · Fixed Price · 14-Day Delivery
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
                We build production AI<br />
                <span className="text-teal-400">for your business</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Fixed scope. Fixed price. Real outcomes. We've built and operated our own AI products at scale —
                we bring that production discipline to every client build. US, UK, EU and India.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:support@grahai.com?subject=AI Implementation — Let's scope it"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 hover:bg-teal-500 transition-colors"
                >
                  Email us to start <ArrowUpRight size={14} />
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                  See packages
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Packages</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Three ways to work with us
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
                Pick the one that fits your timeline and budget. Not sure? Email us — we'll figure out the right scope together.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${s.cardClass}`}
                >
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${s.badgeClass}`}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-extrabold text-slate-900">{s.title}</h3>

                  <div className="mt-3">
                    <span className="font-display text-3xl font-extrabold text-slate-900">{s.price}</span>
                    <span className="ml-2 text-sm text-slate-500">{s.unit}</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-teal-600">{s.delivery}</p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.description}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={s.href}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors ${s.btnClass}`}
                  >
                    {s.cta} <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              All prices in USD. We work with US, UK, EU and India-based companies.{" "}
              <a href="mailto:support@grahai.com" className="font-semibold text-teal-600 hover:text-teal-700">
                Email us
              </a>{" "}
              to scope your project — we reply within 24 hours.
            </p>
          </div>
        </section>

        {/* Good fit for */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Good fit for
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We work best with teams that have one clear workflow to automate or AI feature to ship.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {goodFitFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Why GrahAI Systems
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {whyUs.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <Icon size={20} className="text-teal-600" />
                  <h3 className="mt-3 font-display text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Tell us the workflow you want automated
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              We'll scope it, give you a fixed price, and deliver in 14 days.
            </p>
            <a
              href="mailto:support@grahai.com?subject=AI Implementation — Let's scope it"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/30 hover:bg-teal-500 transition-colors"
            >
              Email us to start <ArrowUpRight size={14} />
            </a>
            <p className="mt-4 text-xs text-slate-600">support@grahai.com · We reply within 24 hours</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
