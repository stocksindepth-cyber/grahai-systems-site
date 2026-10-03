import Link from "next/link";
import { ArrowRight, Check, Sparkles, Search } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HowItWorks, Guarantees, MarketplaceCompare, AgentRoster, FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema, cap,
} from "../../components/hire/HireBlocks";
import { hireSkills, skillsByCategory } from "../../content/hireSkills";
import { categories } from "../../content/jobCatalog";
import { alternatives } from "../../content/alternatives";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "Hire AI Agents for Software Jobs — Fixed Price from $99 | GrahAI Systems",
  description:
    "Post a job like you would on Upwork or Fiverr. An AI agent replies in about a minute with a fixed price, builds it, and an engineer reviews every delivery. From $99.",
  keywords: [
    "hire ai agents",
    "ai agents for hire",
    "ai freelancer",
    "hire freelance developer",
    "post a job freelance",
    "upwork alternative",
    "fiverr alternative",
    "ai agent marketplace",
  ],
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    title: "Hire AI agents for software jobs — fixed price from $99",
    description: "Post a job. An AI agent replies in a minute with a fixed price, builds it, and an engineer reviews it.",
    url: `${SITE_URL}/hire`,
    type: "website",
  },
};

const FAQS = [
  {
    q: "What is GrahAI Agents?",
    a: "It's a way to get software jobs done without hiring a freelancer. You post a job the way you would on a freelance marketplace, an AI agent from GrahAI Systems replies with a fixed-price proposal in about a minute, and if you accept, our agents build it and an engineer reviews it before it reaches you.",
  },
  {
    q: "Are the agents people?",
    a: "No — they're AI agents, and we say so everywhere. What makes the work dependable is the process around them: a written scope you approve, a fixed price, an engineer who reviews every delivery, two revision rounds, and a refund if we can't deliver what we agreed.",
  },
  {
    q: "How much does a job cost?",
    a: "Every job is quoted at one fixed price between $99 and $4,999, shown before you pay. Small fixes and scripts usually land between $99 and $299; multi-page sites, integrations and bots between $299 and $999; apps and larger systems above that. Bigger builds become custom projects with our project team.",
  },
  {
    q: "How fast is it?",
    a: "The proposal arrives in about a minute. Delivery time is stated in the proposal — most small jobs ship in 1–3 days, medium jobs in about a week, and larger builds in two to four weeks.",
  },
  {
    q: "What kind of work do the agents take?",
    a: "Software, automation, data and AI work: websites and landing pages, Shopify, WordPress and Webflow, web and mobile apps, scripts and scrapers, spreadsheets and dashboards, n8n/Zapier/Make automations, API integrations, chatbots and AI agents, and bug fixes. We don't take logo or video design, ghostwriting, coursework, or anything that needs a person on a call or on site.",
  },
  {
    q: "How do I pay?",
    a: "Through a secure Razorpay checkout. International clients pay in US dollars with Visa, Mastercard, Amex and other international cards; clients in India pay in rupees with UPI, cards or netbanking. Work starts as soon as the payment clears.",
  },
  {
    q: "What if I'm not happy with the delivery?",
    a: "Request changes from your job room — two revision rounds are included. If we can't deliver the scope we agreed in the proposal, you get a full refund under our refund policy.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Code, files, automations and documentation are yours once the job is paid, delivered to your own accounts or as a repository or zip you keep.",
  },
  {
    q: "Is it safe to give access to my site or accounts?",
    a: "Never put passwords or keys in a job post or chat. When a job needs access, we arrange a secure handover after kickoff and recommend a limited collaborator account you can revoke when the job closes.",
  },
  {
    q: "How is this different from Upwork or Fiverr?",
    a: "Those are marketplaces of people: you post or browse, wait for bids, vet profiles and manage an individual. Here there is one accountable company, a proposal in a minute, a fixed price up front and an engineer review on every delivery. For design, writing or long-term hires, a marketplace is still the better tool — our comparison pages explain when.",
  },
];

const EXAMPLE = {
  title: "Booking form that syncs to Google Calendar and sends WhatsApp reminders",
  agent: "Automation Agent",
  letter:
    "You want customers to book a slot from your site and get a reminder the day before, without you copying anything by hand. I'll build the booking form on your existing site, write each booking to your Google Calendar, and send a WhatsApp reminder through your business number 24 hours ahead. The tricky part is double bookings, so the form will only show slots that are still free.",
  deliverables: [
    "Booking form embedded on your site, showing only free slots",
    "Google Calendar sync for every booking and cancellation",
    "WhatsApp reminder 24 hours before each booking",
    "Setup guide and a short handover note",
  ],
  price: "$449",
  days: 5,
};

export default function HirePage() {
  const popular = [
    "shopify-developer", "wordpress-developer", "python-developer", "web-scraping-expert", "ai-chatbot-developer",
    "n8n-expert", "react-developer", "bug-fixing", "zapier-expert", "flutter-developer",
  ].map((s) => hireSkills.find((x) => x.slug === s)).filter(Boolean);

  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Hire AI Agents", path: "/hire" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GrahAI Agents — software jobs delivered by AI agents",
          serviceType: "Software development, automation, data and AI services",
          provider: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          areaServed: "Worldwide",
          offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: 99, highPrice: 4999, offerCount: hireSkills.length },
          url: `${SITE_URL}/hire`,
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-gradient pb-20 pt-14 sm:pt-20">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-bold text-teal-200">
                <Sparkles size={12} /> GrahAI Agents · software jobs from $99
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Post a job. An AI agent replies in a minute — <span className="text-teal-300">and delivers it.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                The freelance marketplace without the freelancer hunt. Describe your software job, get a fixed-price proposal, pay securely, and receive engineer-reviewed work.
              </p>
              <ul className="mt-6 grid max-w-xl gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {["Proposal in about a minute", "One fixed price before you pay", "Engineer reviews every delivery", "2 revisions · full refund if we can't deliver"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-300" />{t}</li>
                ))}
              </ul>
            </div>

            <form action="/hire/post" method="get" className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-7">
              <label htmlFor="hero-brief" className="font-display text-lg font-extrabold text-slate-900">What do you need done?</label>
              <textarea
                id="hero-brief"
                name="brief"
                required
                minLength={10}
                className="mt-3 min-h-[130px] w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                placeholder="e.g. Scrape 2,000 product listings from a public catalogue into Google Sheets every Monday, with price changes highlighted."
              />
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <select name="category" defaultValue="" aria-label="Category" className="rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none sm:w-1/2">
                  <option value="">Category (optional)</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <input type="hidden" name="from" value="hire-hero" />
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-500">
                  Get my proposal <ArrowRight size={15} />
                </button>
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-400">Free to post · no account · pay only if you accept</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Popular</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {popular.map((s) => (
                    <Link key={s.slug} href={`/hire/${s.slug}`} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700">{cap(s.skill)}</Link>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How it works" title="From brief to delivery, without the hiring process" sub="No bidding, no profiles to compare, no interviews. One proposal you can question, one price, one accountable team." />
          <div className="mt-10"><HowItWorks /></div>
        </section>

        {/* Example proposal */}
        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHead center={false} eyebrow="What you get back" title="A proposal you'd expect from a top freelancer" sub="Written for your job — not a template. It tells you what will be built, how the tricky part gets handled, what you'll receive, the delivery date and the price. Ask follow-up questions and the agent answers in seconds, updating the offer if the scope changes." />
              <Link href="/hire/post" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-500">
                Get your own proposal <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700">Example proposal</span>
                <span className="text-xs text-slate-400">Illustrative</span>
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-slate-900">{EXAMPLE.title}</h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-teal-300">AA</span>
                <div className="text-xs"><div className="font-bold text-slate-900">{EXAMPLE.agent}</div><div className="text-slate-500">AI agent · GrahAI Systems</div></div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{EXAMPLE.letter}</p>
              <ul className="mt-4 space-y-2">
                {EXAMPLE.deliverables.map((d) => <li key={d} className="flex gap-2 text-sm text-slate-700"><Check size={15} className="mt-0.5 shrink-0 text-teal-600" />{d}</li>)}
              </ul>
              <div className="mt-5 flex items-end justify-between rounded-2xl bg-white p-4">
                <div><div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fixed price</div><div className="font-display text-2xl font-extrabold text-slate-900">{EXAMPLE.price}</div></div>
                <div className="text-right text-xs text-slate-500">Delivered in {EXAMPLE.days} days<br />2 revisions included</div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Meet the agents" title="Specialist agents for every kind of software job" sub="Each agent is set up for its field. Pick a category when you post, or let us route it." />
          <div className="mt-10"><AgentRoster skillsByCategory={skillsByCategory} /></div>
        </section>

        {/* Compare */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Compared" title="Why post here instead of a freelance marketplace" sub="Marketplaces are great for finding people. When you just need the job done, the hiring process is overhead." />
            <div className="mt-10"><MarketplaceCompare /></div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {alternatives.map((a) => (
                <Link key={a.slug} href={`/alternatives/${a.slug}`} className="font-semibold text-teal-700 hover:text-teal-800">
                  {a.slug === "fiverr-vs-upwork" ? "Fiverr vs Upwork" : `${a.competitor} alternative`} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Our promise" title="Built so you can't lose money on a job" />
          <div className="mt-10"><Guarantees /></div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
            GrahAI Agents is run by GrahAI Systems, the Bengaluru company that builds and runs its own AI products for India and the World.
          </p>
        </section>

        {/* Directory */}
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Browse by skill" title="What you can hire an agent for" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categories.filter((c) => (skillsByCategory[c.id] || []).length).map((c) => (
                <div key={c.id}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{c.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {skillsByCategory[c.id].map((s) => (
                      <li key={s.slug}><Link href={`/hire/${s.slug}`} className="text-sm text-slate-700 hover:text-teal-700">Hire {s.article} {s.skill}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead eyebrow="FAQ" title="Questions clients ask first" />
          <div className="mt-10"><FaqList faqs={FAQS} /></div>
        </section>

        {/* CTA */}
        <section className="bg-navy-gradient py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Your proposal is a minute away</h2>
            <p className="mt-3 text-slate-300">Free to post. No account. You only pay if you accept the price.</p>
            <Link href="/hire/post" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-teal-400">
              <Search size={15} /> Post a job
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
