import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Cpu,
  Sparkles,
  ShieldCheck,
  Clock,
  Briefcase,
  GitMerge,
  FileText,
  MessageSquare,
  Globe2,
  Layers,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductShowcase from "../components/ProductShowcase";
import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";
import { stats } from "../content/stats";
import { offers, customOffer } from "../content/offers";

export const metadata = {
  title:
    "GrahAI Systems — Production-Grade AI Systems for Business | India and the World",
  description:
    "We help companies automate repetitive work with production-grade AI — agents, workflow automation, internal copilots and custom AI SaaS. Built by a studio that ships and runs its own AI products. Book a discovery call.",
};

const accentMap = {
  azure: { text: "text-azure-600", dot: "bg-azure-500", btn: "bg-azure-600 hover:bg-azure-700", chip: "bg-azure-50 border-azure-100" },
  purple: { text: "text-purple-600", dot: "bg-purple-500", btn: "bg-purple-600 hover:bg-purple-700", chip: "bg-purple-50 border-purple-100" },
  emerald: { text: "text-emerald-600", dot: "bg-emerald-500", btn: "bg-emerald-600 hover:bg-emerald-700", chip: "bg-emerald-50 border-emerald-100" },
};

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero Section — lead with the business outcome */}
      <section className="relative overflow-hidden border-b border-slate-200/50 pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-azure-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-azure-200 bg-azure-50/50 px-3.5 py-1.5 text-xs font-semibold text-azure-600 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Production AI Systems · India and the World
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl md:text-[56px] lg:text-[60px]">
                We automate repetitive work with{" "}
                <span className="text-brand-gradient">production-grade AI.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Customer support is expensive. Staff lose hours to manual work.
                Thousands of documents get processed by hand. We design and run
                AI systems that take that load off your team — and keep working
                in production, not just in a demo.
              </p>

              {/* capability line */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-slate-700">
                {["AI Agents", "Workflow Automation", "Internal Copilots", "Custom AI SaaS"].map((c, i) => (
                  <span key={c} className="inline-flex items-center gap-3">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-slate-300" />}
                    {c}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-400">
                We build AI products — and we run them ourselves.
              </p>

              <div className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/10 hover:from-azure-500 hover:to-azure-600 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Get an Instant Quote
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto"
                >
                  See Case Studies
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <ProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-b border-slate-200/50 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            The proof is in what we run
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs font-semibold text-slate-700">{s.label}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products (proof we ship & operate) */}
      <ProductsSection />

      {/* Productized AI engagements */}
      <section id="offers" className="relative border-b border-slate-200/50 bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              PRODUCTIZED AI ENGAGEMENTS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Fixed scope. Fixed timeline. In production.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Not open-ended consulting — productized engagements with a clear
              outcome, a delivery window, and a starting price. Every one ships
              as a real system your team can rely on.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((o) => {
              const a = accentMap[o.accent] || accentMap.azure;
              return (
                <div key={o.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${a.text}`}>{o.timeline}</span>
                    <span className="text-[11px] font-semibold text-slate-400">from</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-slate-900">{o.name}</h3>
                  <div className="mt-1 font-display text-2xl font-extrabold text-slate-900">{o.priceFrom}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{o.outcome}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-600">
                    {o.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={15} className={`mt-0.5 shrink-0 ${a.text}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-slate-400">{o.idealFor}</p>
                  <div className="mt-6 flex items-center gap-3 pt-1">
                    <Link href="/start" className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-colors ${a.btn}`}>
                      Get a quote
                      <ArrowUpRight size={13} />
                    </Link>
                    <Link href={o.href} className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* custom catch-all */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">{customOffer.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">{customOffer.outcome}</p>
            </div>
            <Link href="/start" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
              Scope my project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies CTA */}
      <section className="relative border-b border-slate-200/50 bg-slate-900 py-20 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-azure-500/10 blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-400">
                ENGINEERING, IN THE OPEN
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Read how we actually build them
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Deep technical case studies of our own products — the problem,
                the architecture, the AI stack, the hard engineering calls, the
                result, and the lessons. The kind of detail that tells a CTO
                we can be trusted with a project that&apos;s too important to fail.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Explore Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What we build for clients — outcome-led */}
      <section id="build" className="relative border-b border-slate-200/50 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              WHAT WE BUILD FOR YOU
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Production AI, mapped to your bottleneck
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Start from the business problem. We design the system, choose the
              right AI stack, and run it in production — with evals, monitoring
              and cost control built in.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard href="/solutions/ai-agent-development-company" icon={Cpu} title="AI Agents" desc="Autonomous agents that reason, plan and execute real business tasks with safe tool-use." />
            <ServiceCard href="/solutions/ai-workflow-automation-company" icon={GitMerge} title="Workflow Automation" desc="Connect your systems and remove the repetitive human steps between them." />
            <ServiceCard href="/solutions/ai-document-search" icon={FileText} title="Document Intelligence" desc="Extract, structure and validate data from messy real-world documents." />
            <ServiceCard href="/solutions/customer-support-automation" icon={MessageSquare} title="Support Copilots" desc="Deflect repetitive tickets with answers grounded in your own docs." />
            <ServiceCard href="/solutions/internal-knowledge-chatbot" icon={Layers} title="Internal Copilots" desc="Private RAG over your wiki and SOPs, with cited answers staff can trust." />
            <ServiceCard href="/solutions/custom-ai-agent-development" icon={Globe2} title="Custom AI SaaS" desc="Launch a proprietary AI product with a team that already runs four." />
          </div>

          <div className="mt-10 text-center">
            <Link href="/solutions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 hover:text-azure-700 transition-colors">
              Browse all AI solutions
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why GrahAI Systems */}
      <section id="company" className="relative border-b border-slate-200/50 bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
                THE STUDIO
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                The team to call when the AI project can&apos;t fail
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Over 11 years of software and product engineering goes into
                everything we run. Because we live with our own products in
                production, we build AI that stays online under load, fails
                gracefully, and is honest about cost and accuracy.
              </p>
              <Link href="/case-studies" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 hover:text-azure-700 transition-colors">
                See how we build
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <WhyCard icon={Briefcase} title="We Own What We Build" desc="We run commercial AI products ourselves — so we sweat latency, uptime, billing and accuracy because our own users depend on them daily." />
              <WhyCard icon={Sparkles} title="Outcomes, Not Buzzwords" desc="Every system targets a measurable result — tickets deflected, hours saved, errors removed — not a model name on a slide." />
              <WhyCard icon={ShieldCheck} title="Production-Grade by Default" desc="Evals, monitoring, retries, idempotent webhooks, cost controls. The unglamorous engineering that keeps AI alive in the real world." />
              <WhyCard icon={Clock} title="Ship, Then Iterate" desc="We get a working system in front of real users fast, then improve from what they actually do — the way we run our own products." />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

function ServiceCard({ href, icon: Icon, title, desc }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
        {title}
      </h3>
      <p className="mt-2.5 text-xs leading-relaxed text-slate-500">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
        Learn more <ArrowUpRight size={12} />
      </span>
    </Link>
  );
}

function WhyCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <Icon size={18} className="text-azure-600" />
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}
