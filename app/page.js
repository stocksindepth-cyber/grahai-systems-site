import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, Headphones, FileText, Target, BookOpen, Puzzle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../content/products";

export const metadata = {
  alternates: { canonical: "/" },
  title: "AI Development Company India | GrahAI Systems — Products & AI Services",
  description:
    "Production AI agents built in 14 days, fixed price from $3,000. GrahAI Systems runs its own AI products for 100,000+ users and builds support, document, sales and knowledge agents for businesses in India and the World.",
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

const agents = [
  {
    title: "AI customer-support agent",
    body: "Answers tier-1 questions from your help center and policies, and hands off to a person with the full conversation attached.",
    icon: Headphones,
    href: "/ai-chatbot-development",
  },
  {
    title: "Document-processing workflow",
    body: "Reads PDFs, forms and emails, pulls out the fields you need and routes them into your systems, with a review step for anything uncertain.",
    icon: FileText,
    href: "/document-processing-ai",
  },
  {
    title: "Sales and lead agent",
    body: "Qualifies inbound leads, researches each company and drafts the follow-up for your team to approve before it goes out.",
    icon: Target,
    href: "/ai-automation-services",
  },
  {
    title: "Internal knowledge assistant",
    body: "Answers staff questions from your docs, SOPs and policies, and shows the source behind every answer.",
    icon: BookOpen,
    href: "/ai-agent-development",
  },
  {
    title: "AI feature for your SaaS",
    body: "Adds AI inside the product you already sell: search, summaries, drafting or an in-app assistant, built on your data.",
    icon: Puzzle,
    href: "/custom-ai-saas-development",
  },
];

const ladder = [
  {
    step: "Start small",
    title: "Fixed-price jobs",
    price: "$99–$999",
    unit: "per job",
    delivery: "1–8 days",
    body: "One job, quoted in about a minute: a fix, an automation, a bot, a page. A low-risk way to see how we work.",
    cta: "Get a fixed quote",
    href: "/hire/post?from=home-ladder",
  },
  {
    step: "Core build",
    title: "AI Agent Sprint",
    price: "$3,000",
    unit: "fixed price",
    delivery: "14 days",
    body: "One production-ready agent, scoped, built, deployed and handed over, with a working demo at day 7 and 30 days of support.",
    cta: "Scope my agent",
    href: "mailto:hello@grahaisystems.com?subject=AI Agent Sprint — let's scope it",
    highlight: true,
  },
  {
    step: "Keep improving",
    title: "Monthly retainer",
    price: "$399 or $799",
    unit: "per month",
    delivery: "Cancel anytime",
    body: "Tuning, new tools, integrations and fixes as requests, each reviewed by an engineer. Retainer Plus runs two at once.",
    cta: "See monthly plans",
    href: "/hire/retainer",
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
    a: "We build production AI agents for businesses: customer support, document processing, sales and lead handling, internal knowledge and AI features inside SaaS products. We also build and run our own AI products, including GrahAI, used by 100,000+ people.",
  },
  {
    q: "How much does it cost to build an AI agent?",
    a: "Our AI Agent Sprint is $3,000 fixed, delivered in 14 days, including integrations, an admin dashboard and deployment. Smaller jobs start at $99 with a fixed quote in about a minute. Larger systems start from $5,000. We scope before you commit, so there are no surprises.",
  },
  {
    q: "How long does AI development take?",
    a: "A Sprint is 14 days, with a working demo at day 7. Full systems take 3–6 weeks. We scope first (2–3 days), agree on price and timeline, then build.",
  },
  {
    q: "Can you do smaller jobs before a full agent?",
    a: "Yes. Post the job at grahaisystems.com/hire and get a fixed price in about a minute, from $99: a fix, an automation, a bot, a page. It's a low-risk way to see how we work before committing to a Sprint.",
  },
  {
    q: "Do you work with US, UK, or EU companies?",
    a: "Yes. We work with companies in India and the World, async and across time zones. All pricing is in USD.",
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
    a: "You own all the code, prompts and infrastructure. Every Sprint includes 30 days of support after delivery. After that, a monthly retainer ($399, or $799 for two requests at once) covers tuning, new tools, integrations and fixes. Cancel anytime.",
  },
  {
    q: "What industries do you build for?",
    a: "Any business with a repetitive workflow that touches text, documents or data: SaaS, fintech, logistics, HR and recruitment, real estate, professional services and e-commerce.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const proof = [
  { value: "100,000+", label: "People using GrahAI" },
  { value: "6M+", label: "Google search impressions, last 90 days" },
  { value: "9", label: "Languages in production" },
  { value: "11+", label: "Years of production engineering" },
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
                Production AI agents, <span className="text-teal-400">built in 14 days.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Fixed price from $3,000. We run our own AI products for 100,000+ people in 9 languages, and we build the same kind of system for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:hello@grahaisystems.com?subject=AI Agent Sprint — let's scope it" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  Scope my agent <ArrowRight size={15} />
                </a>
                <a href="#build" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
                  See what we build
                </a>
              </div>
              <ul className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-400">
                {["$3,000 fixed price", "Working demo by day 7", "You own all code", "India and the World"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-400" />{t}</li>
                ))}
              </ul>
              <Link href="/hire/post?from=home-hero" className="mt-7 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white">
                Smaller job? Get a fixed quote from $99 <ArrowRight size={14} />
              </Link>
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

        {/* What we build */}
        <section id="build" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="What we build" title="Five agents we build in a 14-day sprint" sub="Each one is scoped to a single workflow, connected to the tools you already use, and handed over with the code." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map(({ title, body, icon: Icon, href }) => (
                <Link key={title} href={href} className="group flex flex-col bg-white p-7 transition-colors hover:bg-slate-50">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700"><Icon size={18} /></span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:text-teal-800">Learn more <ArrowRight size={14} /></span>
                </Link>
              ))}
              <div className="flex flex-col justify-between bg-slate-950 p-7">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Something else?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">If a workflow is repetitive and touches text, documents or data, we can likely automate it. Tell us about it and we&apos;ll scope it.</p>
                </div>
                <a href="mailto:hello@grahaisystems.com?subject=AI workflow — can you build this?" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300">
                  Describe your workflow <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing ladder */}
        <section id="pricing" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Pricing" title="Start small. Scale when it works." sub="Every price is fixed and agreed before work starts. The path we recommend: try one small job, then commission an agent, then keep it improving." />
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {ladder.map(({ step, title, price, unit, delivery, body, cta, href, highlight }, i) => {
                const external = href.startsWith("mailto:");
                const Tag = external ? "a" : Link;
                return (
                  <li key={title} className={`flex flex-col rounded-2xl border bg-white p-7 ${highlight ? "border-teal-600 ring-1 ring-teal-600" : "border-slate-200"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Step {i + 1} · {step}</span>
                      {highlight && <span className="text-xs font-semibold text-teal-700">Most popular</span>}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{title}</h3>
                    <div className="mt-3 font-display text-3xl font-semibold text-slate-900">{price}<span className="ml-1.5 text-sm font-normal text-slate-500">{unit}</span></div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><Clock size={13} /> {delivery}</div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
                    <Tag href={href} className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${highlight ? "bg-teal-600 text-white hover:bg-teal-500" : "border border-slate-300 text-slate-800 hover:border-slate-400"}`}>
                      {cta} <ArrowRight size={14} />
                    </Tag>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-sm text-slate-600">
              Bigger build? Full AI systems start from $5,000 and take 3–6 weeks.{" "}
              <Link href="/services" className="font-semibold text-teal-700 hover:text-teal-800">See all packages</Link>
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How a sprint works" title="Scope, build, ship in 14 days" />
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
                {["11+ years of production engineering", "Real LLM cost & latency experience", "Fixed price — no hourly billing", "You own 100% of the code", "Built for India and the World"].map((point) => (
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

        {/* Flagship product */}
        <section id="products" className="scroll-mt-20 border-t border-slate-200 py-20 sm:py-24">
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
              <h2 className="font-display text-3xl font-semibold text-white">Tell us which workflow to automate</h2>
              <p className="mt-3 text-base text-slate-400">We scope it in 2–3 days, give you a fixed price, and deliver a working agent in 14. Or start with a small job from $99.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@grahaisystems.com?subject=AI Agent Sprint — let's scope it" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                Scope my agent <ArrowUpRight size={15} />
              </a>
              <Link href="/hire/post?from=home-cta" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
                Get a $99+ fixed quote
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
