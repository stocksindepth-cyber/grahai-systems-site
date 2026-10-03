import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Sparkles, Globe2, Users, Languages, Clock, DollarSign, Zap, ShieldCheck, Code2, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../content/products";

export const metadata = {
  alternates: { canonical: "/" },
  title: "AI Development Company India | GrahAI Systems — Products & AI Services",
  description:
    "GrahAI Systems is an AI development company based in Bengaluru, India. We build AI products (10K+ monthly users) and build production AI for businesses — agents, chatbots, automation. Fixed price from $3,000.",
  keywords: [
    "AI development company India",
    "AI agent development",
    "AI chatbot development India",
    "AI automation services",
    "custom AI development",
    "hire AI developers India",
    "GrahAI Systems",
    "AI company Bengaluru",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does GrahAI Systems do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GrahAI Systems is an AI development company based in Bengaluru, India. We build our own AI products (like GrahAI, serving 10,000+ monthly users across 9 languages) and we build production AI systems for businesses — AI agents, chatbots, workflow automation, and custom AI SaaS.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Agent Sprint starts at $3,000 and is delivered in 14 days. This includes a production-ready AI agent with tool calling, integrations, admin dashboard, and deployment. For larger systems, our Full AI System package starts from $5,000. All prices are fixed — no hourly billing surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How long does AI development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Agent Sprint is delivered in 14 days. Larger custom AI systems take 3–6 weeks depending on scope. We scope the project first (2–3 days), agree on a fixed price, then build. We work fast because we've built AI in production before.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with companies in the US, UK, EU, and India. Our products serve users worldwide and we're comfortable working across time zones. All communication is in English.",
      },
    },
    {
      "@type": "Question",
      name: "What makes GrahAI Systems different from other AI agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We run our own AI products in production — 10,000+ monthly users, 9 languages, millions of AI interactions/month. When we build your AI system, we bring real operating experience: we understand production costs, latency tradeoffs, and reliability requirements because we live with them every day.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models and technology do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Llama. We pick the right model for your use case, cost, and latency requirements — not the most expensive one. We also build RAG systems, tool-calling agents, and multi-modal pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see examples of AI you've built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our flagship product GrahAI (grahai.com) is an AI Vedic astrology platform serving 10,000+ monthly users in 9 Indian and global languages. It uses real-time chart calculations, RAG grounding, and multilingual LLM outputs. Visit grahai.com to see a live AI system we built and operate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Productized AI Service includes monthly improvements and monitoring for $750/mo. For sprint and project clients, we offer a 30-day post-delivery support period. You own everything we build — code, prompts, data, and infrastructure.",
      },
    },
  ],
};

const stats = [
  { value: "10,000+", label: "Monthly users", icon: Users },
  { value: "9", label: "Languages", icon: Languages },
  { value: "Millions", label: "AI interactions/mo", icon: Sparkles },
  { value: "India + World", label: "Where we operate", icon: Globe2 },
];

const services = [
  {
    title: "AI Agent Sprint",
    price: "$3,000",
    unit: "one-time",
    delivery: "14 days",
    desc: "One production-ready AI agent — scoped, built, deployed, handed off.",
    icon: Zap,
    highlight: true,
  },
  {
    title: "Productized AI Service",
    price: "$2,000 + $750/mo",
    unit: "",
    delivery: "Ongoing",
    desc: "Pick one workflow — we automate it end-to-end and operate it monthly.",
    icon: BarChart3,
    highlight: false,
  },
  {
    title: "Full AI System",
    price: "From $5,000",
    unit: "",
    delivery: "3–6 weeks",
    desc: "End-to-end AI product — internal tool, customer app, or automation platform.",
    icon: Code2,
    highlight: false,
  },
];

const process = [
  {
    step: "01",
    title: "Scope it",
    body: "We spend 2–3 days understanding your workflow, data, and success criteria. We give you a fixed price and delivery date before you commit.",
    time: "2–3 days",
  },
  {
    step: "02",
    title: "Build it",
    body: "We build the AI system — agent, integrations, admin dashboard, evals. You get a working demo at day 7 and the finished system at day 14.",
    time: "14 days",
  },
  {
    step: "03",
    title: "Ship it",
    body: "We deploy to your infrastructure or cloud, write the docs, and hand off. You own all the code, prompts, and data — nothing stays with us.",
    time: "Day 14",
  },
];

const faqs = [
  {
    q: "What does GrahAI Systems do?",
    a: "We're an AI development company in Bengaluru. We build our own AI products (GrahAI, 10K+ monthly users) and build production AI for businesses — agents, chatbots, automation systems, and custom AI SaaS. Fixed price, 14-day delivery.",
  },
  {
    q: "How much does it cost to build an AI agent?",
    a: "Our AI Agent Sprint starts at $3,000 fixed price, delivered in 14 days. This includes a production-ready agent with integrations, admin dashboard, and deployment. Larger systems start from $5,000. We scope before you commit — no surprises.",
  },
  {
    q: "How long does AI development take?",
    a: "Our Sprint is 14 days. Full systems take 3–6 weeks. We scope first (2–3 days), agree on price and timeline, then build. We work fast because we've shipped production AI before — we know what decisions to make quickly.",
  },
  {
    q: "Do you work with US, UK, or EU companies?",
    a: "Yes. We work with companies globally — US, UK, EU, and India. We're comfortable with async communication and time zones. All pricing is in USD.",
  },
  {
    q: "What AI models do you use?",
    a: "We work with Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models. We pick the right model for your cost, latency, and accuracy requirements — not the most expensive one.",
  },
  {
    q: "Can I see AI you've already built?",
    a: "Yes — GrahAI (grahai.com) is a live example. It's an AI astrology platform we built and operate: 10,000+ monthly users, 9 languages, real-time chart calculations, RAG grounding. That's the production standard we bring to every client build.",
  },
  {
    q: "Who maintains the AI after delivery?",
    a: "You get all the code, prompts, and infra — you own it fully. We include a 30-day support window post-delivery. For ongoing operations, our Productized AI Service includes monthly monitoring and improvements for $750/mo.",
  },
  {
    q: "What industries do you serve?",
    a: "We've worked across SaaS, fintech, logistics, HR/recruitment, real estate, professional services, and e-commerce. If you have a repetitive workflow that touches text, documents, or data — we can likely automate it.",
  },
];

export default function Page() {
  const grahai = products.find((p) => p.id === "grahai");

  return (
    <>
      <Header />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[140px]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-teal-500/3 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold text-teal-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
            AI Development Company · Bengaluru, India
          </div>
          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-7xl">
            We build AI products<br />
            <span className="text-teal-400">people actually use</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            GrahAI Systems is a product company and AI development studio in Bengaluru. We ship our own AI
            to 10,000+ monthly users — and we build production AI systems for businesses worldwide.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 hover:bg-teal-500 transition-colors"
            >
              Our products <ArrowUpRight size={15} />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-teal-500/50 hover:text-white transition-colors"
            >
              Build AI with us →
            </Link>
          </div>
          {/* Micro-proof */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> From $3,000 fixed price</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> 14-day delivery</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> US, UK, EU & India</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" /> You own all code</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon size={18} className="text-teal-600 mb-2" />
                <p className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product — GrahAI flagship */}
      <section id="products" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Our Flagship Product</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built for India. Used by the World.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              Our own AI products are proof of execution — not a pitch deck. Serving real users at scale, every day.
            </p>
          </div>

          <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-200 hover:shadow-md hover:border-teal-200">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                  {grahai.badge}
                </span>
                <h3 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {grahai.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{grahai.domain}</p>
                <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-xl">{grahai.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {grahai.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check size={14} className="mt-0.5 flex-shrink-0 text-teal-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-3 sm:items-end sm:pt-2">
                <div className="text-right">
                  <p className="text-xs text-slate-500">Live users</p>
                  <p className="font-display text-2xl font-extrabold text-teal-600">10,000+</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Languages</p>
                  <p className="font-display text-2xl font-extrabold text-slate-900">9</p>
                </div>
                <a
                  href={grahai.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-700/20 hover:bg-teal-500 transition-colors whitespace-nowrap"
                >
                  Visit GrahAI <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GrahAI Agents — hire AI agents for software jobs */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-400">New · GrahAI Agents</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Post a job. An AI agent replies in a minute — and delivers it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Like a freelance marketplace, minus the freelancer hunt. Describe a software job — a Shopify fix, a scraper,
              an automation, a chatbot, an app — and get a fixed-price proposal from one of our agents. Engineer-reviewed
              delivery, two revisions, from $99.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/hire/post?from=home" className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500 transition-colors">
                Post a job <ArrowUpRight size={15} />
              </Link>
              <Link href="/hire" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-teal-500/50 hover:text-white transition-colors">
                How it works →
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["Proposal in", "~1 minute"],
              ["Fixed price", "from $99"],
              ["Every delivery", "engineer-reviewed"],
              ["If we can't deliver", "full refund"],
            ].map(([k, v]) => (
              <li key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-500">{k}</p>
                <p className="mt-1 font-display text-lg font-bold text-white">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI Services for Businesses */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">AI Services</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              We build production AI for your business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              Fixed scope, fixed price, real delivery. We've built AI for our own users — now we build it for yours.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map(({ title, price, unit, delivery, desc, icon: Icon, highlight }) => (
              <div
                key={title}
                className={`relative rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                  highlight
                    ? "border-teal-200 bg-teal-50/50 ring-1 ring-teal-500/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-4 rounded-full bg-teal-600 px-3 py-0.5 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <Icon size={20} className={highlight ? "text-teal-600" : "text-slate-600"} />
                <h3 className="mt-3 font-display text-lg font-extrabold text-slate-900">{title}</h3>
                <div className="mt-2">
                  <span className="font-display text-2xl font-extrabold text-slate-900">{price}</span>
                  {unit && <span className="ml-1.5 text-xs text-slate-500">{unit}</span>}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                  <Clock size={11} /> {delivery}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 hover:bg-teal-500 transition-colors"
            >
              View all packages & pricing <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">Process</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How we work
            </h2>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {process.map(({ step, title, body, time }, i) => (
              <div key={step} className="relative flex flex-col items-start">
                {i < process.length - 1 && (
                  <div className="absolute top-6 left-10 right-0 hidden h-px border-t border-dashed border-teal-500/20 md:block" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-sm font-bold text-white shadow-lg shadow-teal-700/30">
                  {step}
                </div>
                <div className="mt-5 pr-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-400 mb-2">
                    <Clock size={10} /> {time}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Why us</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                We don't pitch AI.<br />We run AI.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Most AI agencies have never operated AI at scale. We have. Our products serve 10,000+ monthly users
                in 9 languages with millions of AI interactions every month. We feel the cost, latency, and reliability
                tradeoffs before you do.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "11+ years of production engineering",
                  "Real LLM cost & latency experience",
                  "Fixed price — no hourly billing",
                  "You own 100% of the code",
                  "US, UK, EU & India clients",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate-700">
                    <ShieldCheck size={15} className="flex-shrink-0 text-teal-600" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-700/20 hover:bg-teal-500 transition-colors"
                >
                  See what we build <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-6">Live proof</p>
              <div className="space-y-5">
                {[
                  { label: "Monthly active users on GrahAI", value: "10,000+" },
                  { label: "Languages served in production", value: "9" },
                  { label: "AI interactions per month", value: "Millions" },
                  { label: "Countries where users live", value: "India + World" },
                  { label: "Years of production engineering", value: "11+" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="font-display text-lg font-extrabold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-teal-600 transition-colors list-none">
                  {q}
                  <ChevronDown size={16} className="mt-0.5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services#faqs" className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
              See all questions about our AI services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Tell us what you want to build
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            We scope it, give you a fixed price, and deliver in 14 days.
            US, UK, EU and India companies welcome.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:support@grahai.com?subject=AI Development Enquiry — Let's scope it"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/30 hover:bg-teal-500 transition-colors"
            >
              Email us to start <ArrowUpRight size={14} />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              See packages & pricing
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">support@grahai.com · We reply within 24 hours</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
