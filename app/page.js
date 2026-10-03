import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, Zap, Code2, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../content/products";

export const metadata = {
  alternates: { canonical: "/" },
  title: "AI Development Company India | GrahAI Systems — Products & AI Services",
  description:
    "GrahAI Systems is an AI development company based in Bengaluru, India. We build AI products (100K+ users) and build production AI for businesses — agents, chatbots, automation. Fixed price from $3,000.",
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
        text: "GrahAI Systems is an AI development company based in Bengaluru, India. We build our own AI products (like GrahAI, serving 100,000+ users across 9 languages) and we build production AI systems for businesses — AI agents, chatbots, workflow automation, and custom AI SaaS.",
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
        text: "We run our own AI products in production — 100,000+ users, 9 languages, and 6M+ Google search impressions in the last 90 days. When we build your AI system, we bring real operating experience: we understand production costs, latency tradeoffs, and reliability requirements because we live with them every day.",
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
        text: "Yes. Our flagship product GrahAI (grahai.com) is an AI Vedic astrology platform serving 100,000+ users in 9 Indian and global languages. It uses real-time chart calculations, RAG grounding, and multilingual LLM outputs. Visit grahai.com to see a live AI system we built and operate.",
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
    a: "We're an AI development company in Bengaluru. We build our own AI products (GrahAI, 100K+ users) and build production AI for businesses — agents, chatbots, automation systems, and custom AI SaaS. Fixed price, 14-day delivery.",
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
    a: "Yes — GrahAI (grahai.com) is a live example. It's an AI astrology platform we built and operate: 100,000+ users, 9 languages, real-time chart calculations, RAG grounding. That's the production standard we bring to every client build.",
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

const proof = [
  { value: "100,000+", label: "People using GrahAI" },
  { value: "6M+", label: "Google search impressions, last 90 days" },
  { value: "9", label: "Languages in production" },
  { value: "11+", label: "Years of production engineering" },
];

const lines = [
  {
    kicker: "Product",
    title: "GrahAI",
    body: "Our flagship AI product — multilingual Vedic astrology used by 100,000+ people across 9 languages.",
    cta: "Visit grahai.com",
    href: "https://www.grahai.com",
    external: true,
  },
  {
    kicker: "Marketplace",
    title: "GrahAI Agents",
    body: "Post a software job and an AI agent replies with a fixed-price proposal in about a minute. From $99.",
    cta: "Post a job",
    href: "/hire",
  },
  {
    kicker: "Services",
    title: "AI for your business",
    body: "Custom AI agents, chatbots and automation, built and handed over at a fixed price from $3,000.",
    cta: "See services & pricing",
    href: "/services",
  },
];

function SectionHeading({ eyebrow, title, sub, align = "left", dark = false }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "!text-teal-400" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}

export default function Page() {
  const grahai = products.find((p) => p.id === "grahai");

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16 lg:px-8 lg:pb-24">
            <div>
              <p className="eyebrow !text-teal-400">AI development company · Bengaluru, India</p>
              <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.04] text-white sm:text-6xl">
                We build AI products <span className="text-teal-400">people actually use.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                GrahAI Systems is a product company and AI development studio. We ship our own AI to 100,000+ users — and we build production AI systems for businesses worldwide.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  Our products <ArrowRight size={15} />
                </a>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
                  Build AI with us
                </Link>
              </div>
              <ul className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-400">
                {["From $3,000 fixed price", "14-day delivery", "US, UK, EU & India", "You own all code"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-400" />{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-2">
              <dl className="grid grid-cols-2 gap-2">
                {proof.map((p) => (
                  <div key={p.label} className="rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-6">
                    <dd className="font-display text-3xl font-semibold text-white sm:text-[2.1rem]">{p.value}</dd>
                    <dt className="mt-1.5 text-[13px] leading-snug text-slate-400">{p.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="px-3 pb-2 pt-3 text-xs text-slate-500">Live numbers from products we build and run ourselves.</p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="What we do" title="One company, three ways to work with us" />
            <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-3">
              {lines.map((l, i) => {
                const Tag = l.external ? "a" : Link;
                const extra = l.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <div key={l.title} className={`flex flex-col p-7 sm:p-8 ${i > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{l.kicker}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{l.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{l.body}</p>
                    <Tag href={l.href} {...extra} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                      {l.cta} {l.external ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
                    </Tag>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Flagship product */}
        <section id="products" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Our flagship product" title="Built for India. Used by the World." sub="Our own AI products are proof of execution — not a pitch deck. Serving real users at scale, every day." />
            <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-[1.4fr_1fr]">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-100">{grahai.badge}</span>
                  <span className="text-sm text-slate-500">{grahai.domain}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">{grahai.name}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{grahai.blurb}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
                  {grahai.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700"><Check size={15} className="mt-0.5 shrink-0 text-teal-600" />{f}</li>
                  ))}
                </ul>
                <a href={grahai.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  Visit GrahAI <ArrowUpRight size={15} />
                </a>
              </div>
              <dl className="grid grid-cols-2 border-t border-slate-200 bg-slate-50 lg:grid-cols-1 lg:border-l lg:border-t-0">
                {[
                  ["100,000+", "Users"],
                  ["9", "Languages"],
                  ["6M+", "Google search impressions (90 days)"],
                ].map(([v, l], i) => (
                  <div key={l} className={`flex flex-col justify-center p-6 sm:p-8 ${i > 0 ? "border-l border-slate-200 lg:border-l-0 lg:border-t" : ""} ${i === 2 ? "col-span-2 border-l-0 border-t lg:col-span-1" : ""}`}>
                    <dd className="font-display text-3xl font-semibold text-slate-900">{v}</dd>
                    <dt className="mt-1 text-sm text-slate-500">{l}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* GrahAI Agents */}
        <section className="bg-slate-950 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
            <div>
              <SectionHeading dark eyebrow="New · GrahAI Agents" title="Post a job. An AI agent replies in a minute — and delivers it." />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Like a freelance marketplace, minus the freelancer hunt. Describe a software job — a Shopify fix, a scraper, an automation, a chatbot, an app — and get a fixed-price proposal from one of our agents. Engineer-reviewed delivery, two revisions, from $99.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/hire/post?from=home" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  Post a job <ArrowRight size={15} />
                </Link>
                <Link href="/hire" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
                  How it works
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10">
              {[
                ["Proposal in", "~1 minute"],
                ["Fixed price", "from $99"],
                ["Every delivery", "Engineer-reviewed"],
                ["If we can't deliver", "Full refund"],
              ].map(([k, v], i) => (
                <div key={k} className={`p-6 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i > 1 ? "border-t border-white/10" : ""}`}>
                  <dt className="text-xs text-slate-400">{k}</dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* AI services */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="AI services" title="We build production AI for your business" sub="Fixed scope, fixed price, real delivery. We've built AI for our own users — now we build it for yours." />
              <Link href="/services" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                View all packages & pricing <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map(({ title, price, unit, delivery, desc, icon: Icon, highlight }) => (
                <div key={title} className={`flex flex-col rounded-2xl border bg-white p-7 ${highlight ? "border-teal-600 ring-1 ring-teal-600" : "border-slate-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700"><Icon size={18} /></span>
                    {highlight && <span className="text-xs font-semibold text-teal-700">Most popular</span>}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="font-display text-2xl font-semibold text-slate-900">{price}{unit && <span className="ml-1.5 text-sm font-normal text-slate-500">{unit}</span>}</div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><Clock size={13} /> {delivery}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Process" title="How we work" />
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {process.map(({ step, title, body, time }) => (
                <li key={step} className="border-t-2 border-slate-900 pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-sm font-semibold text-slate-900">{step}</span>
                    <span className="text-xs font-medium text-slate-500">{time}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
            <div>
              <SectionHeading eyebrow="Why us" title="We don't pitch AI. We run AI." />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Most AI agencies have never operated AI at scale. We have. Our products serve 100,000+ users in 9 languages and earned 6M+ Google search impressions in the last 90 days. We feel the cost, latency, and reliability tradeoffs before you do.
              </p>
              <ul className="mt-7 space-y-3">
                {["11+ years of production engineering", "Real LLM cost & latency experience", "Fixed price — no hourly billing", "You own 100% of the code", "US, UK, EU & India clients"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate-700"><Check size={15} className="shrink-0 text-teal-600" />{point}</li>
                ))}
              </ul>
              <Link href="/services" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                See what we build <ArrowRight size={14} />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200">
              <p className="border-b border-slate-200 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Live proof</p>
              <dl>
                {[
                  { label: "Users on GrahAI", value: "100,000+" },
                  { label: "Google search impressions, last 90 days", value: "6M+" },
                  { label: "Languages served in production", value: "9" },
                  { label: "AI interactions per month", value: "Millions" },
                  { label: "Countries where users live", value: "India + World" },
                  { label: "Years of production engineering", value: "11+" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 px-7 py-4 last:border-0">
                    <dt className="text-sm text-slate-600">{label}</dt>
                    <dd className="font-display text-base font-semibold text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
            <div>
              <SectionHeading eyebrow="FAQ" title="Common questions" />
              <Link href="/services#faqs" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">
                All questions about our AI services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group px-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[15px] font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown size={17} className="mt-0.5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="-mt-1 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold text-white">Tell us what you want to build</h2>
              <p className="mt-3 text-base text-slate-400">We scope it, give you a fixed price, and deliver in 14 days. US, UK, EU and India companies welcome.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@grahaisystems.com?subject=AI Development Enquiry — Let's scope it" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                Email us to start <ArrowUpRight size={15} />
              </a>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
                See packages & pricing
              </Link>
            </div>
          </div>
          <p className="mx-auto max-w-6xl px-4 pb-10 text-xs text-slate-500 sm:px-6 lg:px-8">hello@grahaisystems.com · We reply within 24 hours</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
