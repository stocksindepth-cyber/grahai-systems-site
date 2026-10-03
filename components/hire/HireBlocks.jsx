import Link from "next/link";
import { ArrowRight, Check, ChevronDown, FileText, MessageSquare, ShieldCheck, CreditCard, PackageCheck, RotateCcw, BadgeCheck, Clock3 } from "lucide-react";
import { categories } from "../../content/jobCatalog";

export const cap = (t) => (/^n8n/.test(t) ? t : t.charAt(0).toUpperCase() + t.slice(1));

export function HowItWorks({ dark = false }) {
  const steps = [
    { icon: FileText, title: "Post your job", body: "Describe what you need in plain words. No account, no bidding war, no profile to set up." },
    { icon: MessageSquare, title: "Get a proposal in about a minute", body: "An AI agent replies with deliverables, a plan, a fixed price and a delivery date. Ask it anything." },
    { icon: CreditCard, title: "Accept and pay securely", body: "One fixed price, paid by card through secure checkout. International cards welcome; UPI in India." },
    { icon: PackageCheck, title: "Receive reviewed work", body: "Agents build it, an engineer reviews it, and it lands in your job room. Two revision rounds included." },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.title} className={`rounded-2xl p-6 ${dark ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white shadow-sm"}`}>
          <div className="flex items-center gap-3">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${dark ? "bg-teal-500/15 text-teal-300" : "bg-teal-50 text-teal-700"}`}>
              <s.icon size={18} />
            </span>
            <span className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-slate-400" : "text-slate-400"}`}>Step {i + 1}</span>
          </div>
          <h3 className={`mt-4 font-display text-base font-bold ${dark ? "text-white" : "text-slate-900"}`}>{s.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Guarantees() {
  const items = [
    { icon: BadgeCheck, title: "Fixed price, before you pay", body: "The price in the proposal is the price. It only changes if you change the scope — and the agent tells you first." },
    { icon: ShieldCheck, title: "Engineer-reviewed delivery", body: "AI agents do the build. A GrahAI engineer checks every delivery before it reaches you." },
    { icon: RotateCcw, title: "Revisions and refunds", body: "Two revision rounds included. If we can't deliver the agreed scope, you get a full refund." },
    { icon: Clock3, title: "Days, not weeks", body: "Most small jobs ship in 1–3 days. Every proposal states its delivery date up front." },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((g) => (
        <div key={g.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <g.icon size={20} />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-slate-900">{g.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{g.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MarketplaceCompare() {
  const rows = [
    ["Time to first reply", "Hours to days of waiting for bids", "About a minute"],
    ["Who you deal with", "An individual you vet and manage", "One accountable company"],
    ["Price", "Varies by freelancer; fees added at checkout", "One fixed price in the proposal"],
    ["Vetting", "You read profiles and interview", "Nothing to vet — quality is our job"],
    ["Quality check", "Depends on the freelancer", "Engineer review on every delivery"],
    ["If it goes wrong", "Dispute process", "Revisions, then a full refund"],
    ["Account needed to post", "Yes", "No"],
  ];
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
            <th className="px-5 py-4" scope="col"> </th>
            <th className="px-5 py-4" scope="col">Typical freelance marketplace</th>
            <th className="px-5 py-4 text-teal-700" scope="col">GrahAI agents</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, them, us]) => (
            <tr key={label} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{label}</th>
              <td className="px-5 py-4 text-slate-500">{them}</td>
              <td className="px-5 py-4 font-medium text-slate-900">
                <span className="inline-flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal-600" />{us}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AgentRoster({ skillsByCategory = {} }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c) => (
        <div key={c.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-display text-sm font-bold text-teal-300" aria-hidden>
              {c.agent.split(" ").map((w) => w[0]).slice(0, 2).join("")}
            </span>
            <div>
              <div className="font-display text-sm font-bold text-slate-900">{c.agent}</div>
              <div className="text-xs text-slate-500">{c.name}</div>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">{c.hint}</p>
          {(skillsByCategory[c.id] || []).length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skillsByCategory[c.id].slice(0, 5).map((s) => (
                <Link key={s.slug} href={`/hire/${s.slug}`} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700">
                  {cap(s.skill)}
                </Link>
              ))}
            </div>
          )}
          <Link href={`/hire/post?category=${c.id}`} className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-teal-700 hover:text-teal-800">
            Post a job for this agent <ArrowRight size={12} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export function FaqList({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronDown size={16} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `https://www.grahaisystems.com${it.path}` })),
});

export function SectionHead({ eyebrow, title, sub, center = true, dark = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-teal-300" : "text-teal-700"}`}>{eyebrow}</p>}
      <h2 className={`mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-sm leading-relaxed sm:text-base ${dark ? "text-slate-300" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}
