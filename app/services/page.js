import Link from "next/link";
import {
  ArrowUpRight, ArrowLeft, Layers, Sparkles, RefreshCw, Clock, Check,
  X, Zap, BarChart3, Code2, ShieldCheck, Globe2, ChevronDown,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "AI Agent Development Company India | Fixed Price, 14-Day Delivery | GrahAI Systems",
  description:
    "GrahAI Systems builds AI agents, chatbots, and automation systems for businesses — fixed price from $3,000, delivered in 14 days. We run our own AI serving 100K+ users. US, UK, EU & India.",
  keywords: [
    "AI agent development company",
    "AI agent development India",
    "AI chatbot development services",
    "AI automation services India",
    "custom AI development",
    "hire AI developers India",
    "AI implementation services",
    "LLM development services",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AI agent development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Agent Sprint starts at $3,000 fixed price and is delivered in 14 days. This includes a production-ready AI agent with tool calling, integrations, admin dashboard, and deployment. Larger custom AI systems start from $5,000. All pricing is fixed — no hourly billing or scope creep.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Agent Sprint is delivered in 14 days. We spend 2–3 days on scoping, agree on the fixed price, then build for 14 days. You get a working demo at day 7. Larger full AI systems take 3–6 weeks depending on complexity.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between an AI agent and a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot answers questions. An AI agent takes actions — it can call APIs, query databases, write to CRMs, send emails, process documents, and complete multi-step workflows autonomously. We build both, and we can help you decide which is right for your use case.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses or only enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with companies of all sizes — from 10-person startups to established businesses. Our $3,000 AI Agent Sprint is specifically designed to be accessible to small and mid-sized companies that want production AI without enterprise consulting costs.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI models do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Llama. We pick the right model for your cost, latency, and accuracy requirements — not the most expensive one. We also run multi-model pipelines when one model handles the routing and another handles the generation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate the AI with our existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Integration is a core part of what we build. We connect AI systems to CRMs (Salesforce, HubSpot), databases (Postgres, MongoDB, Firebase), communication tools (Slack, email), document stores, ERPs, and custom APIs. If you have an existing system, we can connect to it.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'fixed price' actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixed price means we agree on the full cost before we start building. There are no hourly rates, no 'scope creep' invoices, and no surprises. We scope the project in 2–3 days, give you a single number, and that's the total. If we underestimate the complexity, that's our problem — not yours.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the code and AI system after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own 100% of everything — all code, prompts, data pipelines, and infrastructure configuration. We hand off a working repository with full documentation. We retain no rights and have no vendor lock-in. If you want to take it in-house or move to a different provider, you have everything you need.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sprint and project clients get a 30-day post-delivery support window. For ongoing operations, our Productized AI Service includes monthly improvements, monitoring, and performance tuning for $750/mo. You can cancel any time — you keep the system.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with US, UK, and EU companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're based in Bengaluru, India, but we work with companies globally — US, UK, EU, and India. All pricing is in USD. We're comfortable with async communication and adjust to your time zone for key meetings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We sign NDAs for all client engagements before any technical discussion happens. We take confidentiality seriously — your workflows, data, and business logic stay with you.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help us figure out what to automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our scoping call is specifically for this. We'll ask about your team, workflows, and pain points, then recommend what can realistically be automated with AI in 14 days. We only take on projects we're confident we can deliver successfully.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see examples of AI systems you've built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our flagship product GrahAI (grahai.com) is a live production AI system we built and operate — 100,000+ users, 9 languages, real-time Vedic astrology chart calculations, RAG-grounded responses, and multilingual LLM outputs. That's the standard we bring to every client build.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've built AI for SaaS companies, accounting and legal firms, recruitment and HR teams, logistics and trucking companies, real estate agencies, insurance firms, e-commerce brands, and internal operations teams. If you have a repetitive workflow involving text, documents, or data — we can likely automate it.",
      },
    },
    {
      "@type": "Question",
      name: "What's the minimum engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our smallest engagement is the AI Agent Sprint at $3,000 fixed, delivered in 14 days. There's no ongoing commitment — we build, hand off, and you decide if you want to continue. We don't require long retainers or multi-month commitments upfront.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agent Development Services",
  description:
    "Production AI agent development, chatbot development, and workflow automation for businesses. Fixed price from $3,000, 14-day delivery.",
  provider: {
    "@type": "Organization",
    name: "GrahAI Systems",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: ["US", "GB", "EU", "IN"],
  serviceType: "AI Development",
  offers: [
    {
      "@type": "Offer",
      name: "AI Agent Sprint",
      price: "3000",
      priceCurrency: "USD",
      description: "Production-ready AI agent, delivered in 14 days",
    },
    {
      "@type": "Offer",
      name: "Full AI System",
      price: "5000",
      priceCurrency: "USD",
      description: "End-to-end AI product — internal tool, customer app, or automation platform",
    },
  ],
};

const packages = [
  {
    id: "sprint",
    badge: "Most Popular",
    badgeClass: "bg-teal-600 text-white",
    title: "AI Agent Sprint",
    price: "$3,000",
    unit: "fixed price",
    delivery: "14-day delivery",
    description:
      "One production-ready AI agent — scoped, built, deployed, handed off. Includes tool calling, integrations, admin dashboard, and documentation.",
    features: [
      "AI agent + RAG or tool calling",
      "Integrated with your existing stack",
      "Admin dashboard + usage analytics",
      "Deployed to your infrastructure",
      "Full code handoff + documentation",
      "30-day post-delivery support",
    ],
    cta: "Start a Sprint",
    href: "mailto:support@grahai.com?subject=AI Agent Sprint — Let's scope it",
    highlight: true,
  },
  {
    id: "retainer",
    badge: "Best for recurring work",
    badgeClass: "bg-slate-100 text-slate-700",
    title: "Productized AI Service",
    price: "$2,000",
    unit: "setup + $750/mo",
    delivery: "Ongoing · cancel any time",
    description:
      "Pick one outcome — lead qualification, customer support, document processing — and we build, run, and improve the system monthly. You own it.",
    features: [
      "One workflow automated end-to-end",
      "Monthly improvements + monitoring",
      "We operate it so you don't have to",
      "Performance reporting every month",
      "Cancel any time — you keep the code",
      "Model updates included",
    ],
    cta: "Book a scoping call",
    href: "mailto:support@grahai.com?subject=Productized AI Service — scoping",
    highlight: false,
  },
  {
    id: "system",
    badge: "For larger builds",
    badgeClass: "bg-slate-100 text-slate-700",
    title: "Full AI System",
    price: "From $5,000",
    unit: "scoped per project",
    delivery: "3–6 week delivery",
    description:
      "Complete AI-powered product — internal tool, customer-facing app, or automation platform. Architecture, build, evaluation, deployment, handoff.",
    features: [
      "End-to-end system design + build",
      "Evals, observability, guardrails built in",
      "Multi-agent or multi-model pipelines",
      "Supports any LLM or open-source model",
      "Fixed price, success metrics agreed upfront",
      "Full code + infrastructure handoff",
    ],
    cta: "Scope your project",
    href: "mailto:support@grahai.com?subject=Full AI System — scoping",
    highlight: false,
  },
];

const comparisonRows = [
  { label: "Pricing model", us: "Fixed price per project", them: "Hourly / daily rate" },
  { label: "Delivery timeline", us: "14 days (Sprint)", them: "3–6 months typically" },
  { label: "You own the code", us: true, them: "Sometimes (check contract)" },
  { label: "Production AI experience", us: "100K+ users", them: "Demos and POCs" },
  { label: "Minimum engagement", us: "$3,000 / 14 days", them: "$20,000+ / 3 months" },
  { label: "Multilingual AI capability", us: "9 languages proven", them: "English-first typically" },
  { label: "NDA on day one", us: true, them: "Usually yes" },
  { label: "Post-delivery support", us: "30-day included", them: "Extra cost" },
];

const processSteps = [
  {
    step: "01",
    title: "Scope it — 2–3 days",
    body: "You describe the workflow. We ask questions, review your stack and data, and tell you exactly what we'll build, at what price, by when. We don't start building until you agree on all three.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Build it — 14 days",
    body: "We build the AI system — agent logic, integrations, admin panel, evaluation harness. You get a working demo at day 7. Full delivery at day 14. No surprises, no delays.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Ship it — Day 14",
    body: "We deploy to your infrastructure, write the docs, record a walkthrough, and hand off the repository. You own everything. Your team can maintain it independently from day one.",
    icon: "🚀",
  },
];

const goodFitFor = [
  "SaaS companies adding AI features to their product",
  "Accounting, legal, and professional firms",
  "Recruitment and HR teams",
  "Logistics and trucking companies",
  "Real estate agencies",
  "Insurance companies",
  "E-commerce and D2C brands",
  "Internal ops teams with repetitive workflows",
  "Startups building AI-first products",
  "Enterprises testing AI before a large rollout",
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
            >
              <ArrowLeft size={12} /> GrahAI Systems
            </Link>

            <div className="mt-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold text-teal-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
                AI Development Company · Fixed Price · Bengaluru, India
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
                AI agent development<br />
                <span className="text-teal-400">for your business</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                We build AI agents, chatbots, and automation systems — fixed scope, fixed price, real delivery.
                We've shipped production AI to 100,000+ users. We bring that same discipline to your build.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:support@grahai.com?subject=AI Development — Let's scope it"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
                >
                  Get a free scope <ArrowUpRight size={14} />
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                  See packages & pricing
                </a>
              </div>
              {/* Micro proof */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> From $3,000 fixed</span>
                <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> 14-day delivery</span>
                <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> You own all code</span>
                <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> NDA on day one</span>
                <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> US, UK, EU & India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
              Our own AI, proving it works
            </p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { v: "100,000+", l: "Users on GrahAI" },
                { v: "9", l: "Languages in production" },
                { v: "6M+", l: "Google search impressions (90 days)" },
                { v: "11+", l: "Years production engineering" },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <p className="font-display text-2xl font-extrabold text-teal-600 sm:text-3xl">{v}</p>
                  <p className="mt-1 text-xs text-slate-500">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">
              GrahAI (<a href="https://www.grahai.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">grahai.com</a>) — a live AI system we built and operate.
            </p>
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
              {packages.map((s) => (
                <div
                  key={s.id}
                  className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
                    s.highlight ? "border-teal-300 ring-2 ring-teal-500/10" : "border-slate-200"
                  }`}
                >
                  {s.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-teal-600 px-4 py-1 text-xs font-bold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.badgeClass}`}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-extrabold text-slate-900">{s.title}</h3>

                  <div className="mt-3">
                    <span className="font-display text-3xl font-extrabold text-slate-900">{s.price}</span>
                    {s.unit && <span className="ml-2 text-sm text-slate-500">{s.unit}</span>}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-teal-600">{s.delivery}</p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.description}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check size={14} className="mt-0.5 flex-shrink-0 text-teal-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={s.href}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors ${
                      s.highlight ? "bg-teal-600 hover:bg-teal-500" : "bg-slate-900 hover:bg-slate-700"
                    }`}
                  >
                    {s.cta} <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              All prices in USD.{" "}
              <a href="mailto:support@grahai.com" className="font-semibold text-teal-600 hover:text-teal-700">
                Email us
              </a>{" "}
              to scope your project — we reply within 24 hours.
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-slate-950 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">Process</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                How we work
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
                No months of discovery, no workshops, no hourly billing. We scope, build, and ship.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map(({ step, title, body, icon }) => (
                <div key={step} className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <span className="text-2xl">{icon}</span>
                  <div className="mt-4">
                    <span className="text-xs font-bold text-teal-500">Step {step}</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Comparison</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                GrahAI Systems vs. typical AI agency
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">What you get</th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-teal-600">GrahAI Systems</th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-400">Typical Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ label, us, them }, i) => (
                    <tr key={label} className={`border-b border-slate-100 ${i % 2 === 0 ? "" : "bg-slate-50/30"}`}>
                      <td className="px-5 py-4 font-medium text-slate-700">{label}</td>
                      <td className="px-5 py-4 text-center">
                        {us === true ? (
                          <Check size={16} className="mx-auto text-teal-600" />
                        ) : (
                          <span className="font-semibold text-teal-600 text-xs">{us}</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        {them === true ? (
                          <Check size={16} className="mx-auto text-slate-400" />
                        ) : (
                          <span className="text-slate-500 text-xs">{them}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Good fit for */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Who we work with</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Good fit for
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                We work best with teams that have one clear workflow to automate or AI feature to ship.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {goodFitFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <Check size={14} className="flex-shrink-0 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Why us</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                We don't pitch AI. We run AI.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Layers,
                  title: "11+ years of production engineering",
                  body: "We've shipped software across consumer apps, SaaS, and AI systems since 2013. Not prototypes — systems running at scale.",
                },
                {
                  icon: Sparkles,
                  title: "We operate our own AI in production",
                  body: "GrahAI serves 100,000+ users across 9 languages. We feel the cost, latency, and reliability tradeoffs every day — before you do.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fixed price, you own everything",
                  body: "No hourly billing. No scope creep. You own 100% of the code, prompts, and infrastructure. Nothing stays with us.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <Icon size={20} className="text-teal-600" />
                  <h3 className="mt-3 font-display text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="bg-slate-50 py-20 sm:py-28 scroll-mt-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">FAQ</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Questions we get asked
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
                If your question isn't here, email us — we reply within 24 hours.
              </p>
            </div>
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              {faqSchema.mainEntity.map(({ name: q, acceptedAnswer: { text: a } }) => (
                <details key={q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-teal-600 transition-colors list-none">
                    {q}
                    <ChevronDown size={16} className="mt-0.5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
                </details>
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
              We sign an NDA on day one.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:support@grahai.com?subject=AI Implementation — Let's scope it"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
              >
                Get a free scope <ArrowUpRight size={14} />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                See case studies
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-600">support@grahai.com · Reply within 24 hours · NDA on day one</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
