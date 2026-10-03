import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PostJobForm from "../../../components/hire/PostJobForm";
import MyJobs from "../../../components/hire/MyJobs";
import { categories } from "../../../content/jobCatalog";
import { Check } from "lucide-react";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "Post a Job — Get a Fixed-Price Proposal in a Minute | GrahAI Agents",
  description:
    "Post a software, automation, data or AI job for free. A GrahAI AI agent replies in about a minute with deliverables, a delivery date and a fixed price from $99.",
  alternates: { canonical: `${SITE_URL}/hire/post` },
};

export default function PostJobPage({ searchParams }) {
  const sp = searchParams || {};
  const category = categories.some((c) => c.id === sp.category) ? sp.category : "";
  const brief = typeof sp.brief === "string" ? sp.brief.slice(0, 2000) : "";
  const title = typeof sp.title === "string" ? sp.title.slice(0, 120) : "";
  const source = typeof sp.from === "string" ? sp.from.slice(0, 80) : "post";

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-slate-50/60 pb-24 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-700">GrahAI Agents</p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tell us what you need. <span className="text-brand-gradient">An agent replies in a minute.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              You&apos;ll get a written proposal with deliverables, a plan, a delivery date and one fixed price. Ask the agent questions, adjust the scope, and only pay if you accept.
            </p>
            <div className="mt-8">
              <PostJobForm defaultCategory={category} defaultBrief={brief} defaultTitle={title} source={source} />
            </div>
          </div>
          <aside className="space-y-5 lg:pt-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-sm font-bold text-slate-900">Write a brief that prices well</h2>
              <ul className="mt-3 space-y-2.5 text-xs leading-relaxed text-slate-600">
                {[
                  "Describe the outcome, not just the task (“customers can book a slot and pay”).",
                  "Say what exists already — site, platform, files, accounts, examples.",
                  "List must-haves separately from nice-to-haves.",
                  "Mention where it has to run (your Shopify store, your server, Google Sheets…).",
                  "Never include passwords or API keys — access is shared securely after kickoff.",
                ].map((t) => (
                  <li key={t} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-teal-600" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-sm font-bold text-slate-900">Good fits</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Websites, Shopify & WordPress work, web and mobile apps, automations (n8n, Zapier, Make, Apps Script), scripts and scrapers, spreadsheets and dashboards, chatbots and AI agents, API integrations, bug fixes. Jobs from $99 to $4,999.
              </p>
              <h2 className="mt-4 font-display text-sm font-bold text-slate-900">Not a fit</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Logo or video design, ghostwriting, coursework, anything needing a person on a call or on site, and anything shady.
              </p>
            </div>
            <MyJobs />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
