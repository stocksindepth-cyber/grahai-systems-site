import Link from "next/link";
import { Check, ArrowRight, Repeat, LifeBuoy, Zap } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PlanStart from "../../../components/hire/PlanStart";
import { FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema } from "../../../components/hire/HireBlocks";
import { plans, PLAN_REQUEST_RULE } from "../../../content/planCatalog";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "Monthly Dev Retainer — Unlimited Requests from $399/mo | GrahAI Agents",
  description:
    "An AI dev team on a monthly plan: unlimited software requests, worked one at a time and reviewed by an engineer. Care plans from $79/mo. Cancel anytime.",
  keywords: [
    "development retainer",
    "monthly web development retainer",
    "unlimited development requests",
    "dev subscription service",
    "website maintenance plan",
    "software maintenance retainer",
    "monthly developer subscription",
  ],
  alternates: { canonical: `${SITE_URL}/hire/retainer` },
};

const FAQS = [
  {
    q: "How does the retainer work?",
    a: "You pay monthly and send requests from your plan room whenever you like. Each request is scoped by an AI agent, built by our agents, and reviewed by an engineer before it reaches you. The Retainer works one request at a time; Retainer Plus works two in parallel.",
  },
  {
    q: "What counts as one request?",
    a: `${PLAN_REQUEST_RULE} Think: a new page section, a form that posts to your CRM, a scraper tweak, a bug fix, a report automation.`,
  },
  {
    q: "How fast are requests delivered?",
    a: "Most small requests are delivered in 1–3 business days. Every request shows its target date in your plan room, and you get an email when it lands.",
  },
  {
    q: "How does billing work?",
    a: "Plans run one month at a time. Three days before your period ends we email a secure payment link to renew. Pay it and your plan continues; ignore it and the plan pauses at the end of the period. International clients pay in US dollars by card; clients in India pay in rupees.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, any time from your plan room. Your plan stays active until the end of the period you paid for, and anything in progress is still finished.",
  },
  {
    q: "What's the difference between the Care plan and the Retainer?",
    a: "The Care plan is for keeping something we already built for you healthy: fixes for that delivery plus two small change requests a month. The Retainer is for ongoing new work across anything software — unlimited requests, one at a time.",
  },
  {
    q: "Who owns the work?",
    a: "You do — everything delivered under a plan is yours, the same as a one-off job.",
  },
];

export default function RetainerPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Hire AI Agents", path: "/hire" }, { name: "Monthly plans", path: "/hire/retainer" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GrahAI Agents monthly plans",
          provider: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          areaServed: "Worldwide",
          url: `${SITE_URL}/hire/retainer`,
          offers: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: p.priceUsd,
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", price: p.priceUsd, priceCurrency: "USD", billingDuration: "P1M", unitCode: "MON" },
          })),
        }}
      />
      <Header />
      <main className="bg-slate-50/50">
        <section className="relative overflow-hidden bg-navy-gradient pb-20 pt-14 sm:pt-20">
          <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
            <div className="lg:pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-bold text-teal-200">
                <Repeat size={12} /> Monthly plans · cancel anytime
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
                An AI dev team on call — <span className="text-teal-300">one monthly price.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Stop posting a new job every time something needs doing. Send requests whenever you like; our agents work through them and an engineer reviews every delivery.
              </p>
              <ul className="mt-6 grid max-w-xl gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {["Unlimited requests on the Retainer", "Most requests in 1–3 business days", "Engineer review on every delivery", "Cancel anytime, no lock-in"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-300" />{t}</li>
                ))}
              </ul>
            </div>
            <div id="start" className="scroll-mt-24">
              {plans.map((p) => <span key={p.id} id={`start-${p.id}`} className="block scroll-mt-24" aria-hidden="true" />)}
              <PlanStart />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Plans" title="Pick the plan that fits your workload" sub="All plans are month to month. Prices in USD; clients in India pay the rupee equivalent." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => {
              const Icon = p.id === "care" ? LifeBuoy : p.id === "retainer" ? Repeat : Zap;
              return (
                <div key={p.id} className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm ${p.featured ? "border-teal-400 ring-2 ring-teal-400/20" : "border-slate-200"}`}>
                  {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Most popular</span>}
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Icon size={16} className="text-teal-600" /> {p.name}</div>
                  <div className="mt-3 font-display text-4xl font-extrabold text-slate-900">${p.priceUsd}<span className="text-base font-medium text-slate-500">/mo</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.pitch}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-700">
                    {p.includes.map((x) => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal-600" />{x}</li>)}
                  </ul>
                  <a href={`#start-${p.id}`} className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${p.featured ? "bg-teal-600 text-white hover:bg-teal-500" : "border border-slate-200 text-slate-800 hover:bg-slate-50"}`}>
                    Choose {p.name} <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500">{PLAN_REQUEST_RULE} Need one specific thing instead? <Link href="/hire/post" className="font-semibold text-teal-700">Post a one-off job</Link> from $99.</p>
        </section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Compared" title="Retainer vs. hiring each job separately" />
            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="px-5 py-4" scope="col"> </th>
                    <th className="px-5 py-4" scope="col">One-off jobs</th>
                    <th className="px-5 py-4 text-teal-700" scope="col">Retainer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Getting started", "Post, review a proposal, pay each time", "Just send the request"],
                    ["Price", "Quoted per job, from $99", "Flat monthly, unlimited requests"],
                    ["Best for", "One clear project", "A steady stream of small work"],
                    ["History", "Each job lives in its own room", "Every request and delivery in one plan room"],
                    ["Commitment", "None", "None — cancel anytime"],
                  ].map(([l, a, b]) => (
                    <tr key={l} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{l}</th>
                      <td className="px-5 py-4 text-slate-500">{a}</td>
                      <td className="px-5 py-4 font-medium text-slate-900">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="FAQ" title="Monthly plans, answered" />
          <div className="mt-10"><FaqList faqs={FAQS} /></div>
          <div className="mt-12 text-center">
            <a href="#start" className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-teal-500">Start a plan <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
