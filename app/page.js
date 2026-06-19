import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Sparkles,
  ShieldCheck,
  Clock,
  Briefcase,
  GitMerge,
  FileText,
  MessageSquare,
  Globe2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductShowcase from "../components/ProductShowcase";
import ProductsSection from "../components/ProductsSection";
import PricingEstimator from "../components/PricingEstimator";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title:
    "GrahAI Systems — An AI Product Studio Building for India and the World",
  description:
    "GrahAI Systems builds and operates its own AI products — GrahAI (Vedic astrology), OptionsGyani (options practice), AasanKhata (SMB accounting) and AgencyPitch (agency proposals). A product-first AI studio based in Bengaluru.",
};

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/50 pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-40">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-azure-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Hero Copy */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-azure-200 bg-azure-50/50 px-3.5 py-1.5 text-xs font-semibold text-azure-600 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI Product Studio · Bengaluru · India and the World
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[64px]">
                We Build &amp; Run
                <br />
                <span className="text-brand-gradient">Real AI Products.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                GrahAI Systems is a product-first AI studio. We don&apos;t just
                advise on AI — we ship and operate our own software, used by
                people and businesses across India and the World every day.
              </p>

              <p className="mt-3 text-sm font-semibold text-slate-400">
                Four live products. Built and owned end-to-end.
              </p>

              <div className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/10 hover:from-azure-500 hover:to-azure-600 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Explore Our Products
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#build"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto"
                >
                  We Build For You Too
                </a>
              </div>

              {/* Trust Strip — product proof, not tech stack */}
              <div className="mt-12 pt-8 border-t border-slate-200/60">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What we&apos;ve shipped
                </p>
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  <div>
                    <div className="font-display text-2xl font-extrabold text-slate-900">
                      4
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Live products
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-slate-900">
                      4
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Indian languages
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-slate-900">
                      11+
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Yrs engineering
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-slate-900">
                      100%
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Bootstrapped
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div>
              <ProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Products (Primary Section) */}
      <ProductsSection />

      {/* We Build For You Too (Services — secondary) */}
      <section
        id="build"
        className="relative border-b border-slate-200/50 bg-slate-50 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              BEYOND OUR OWN PRODUCTS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We Build For You, Too
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The same team that runs our products takes on a small number of
              client builds each quarter — AI agents, automations, document
              intelligence, and custom SaaS, shipped with product-grade care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Agents */}
            <Link
              href="/ai-agent-development"
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
                <Cpu size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
                AI Agents
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Autonomous agents that reason, plan, and execute business tasks
                using custom toolboxes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>

            {/* Workflow Automation */}
            <Link
              href="/ai-automation-services"
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
                <GitMerge size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
                Workflow Automation
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Connect your business systems together and eliminate repetitive
                human processing.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>

            {/* Document Intelligence */}
            <Link
              href="/document-processing-ai"
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
                <FileText size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
                Document Intelligence
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Extract, structure, and validate data from complex document sets
                automatically.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>

            {/* AI Chatbots */}
            <Link
              href="/ai-chatbot-development"
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
                <MessageSquare size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
                AI Chatbots
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Human-like assistants trained on your internal data, policies,
                and product lists.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>

            {/* Custom AI SaaS */}
            <Link
              href="/custom-ai-saas-development"
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-azure-500/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-azure-100 bg-azure-50 text-azure-600 shadow-sm">
                <Globe2 size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors group-hover:text-azure-600">
                Custom AI SaaS
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Launch a proprietary AI product faster, with engineering that
                knows how to run one.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-azure-600">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>

            {/* CTA card */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-azure-50/30 p-6 shadow-sm">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-azure-600">
                  Have something in mind?
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-slate-900">
                  Let&apos;s scope your build
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Tell us the workflow you want to automate or the product you
                  want to launch — we&apos;ll map a pilot.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-azure-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-azure-700"
              >
                Start a conversation
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Estimator (for client builds) */}
      <PricingEstimator />

      {/* Why GrahAI Systems */}
      <section
        id="company"
        className="relative border-b border-slate-200/50 bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
                THE STUDIO
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                A product studio, not an agency
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Over 11 years of software and product experience goes into
                everything we run. Because we live with our own products in
                production, we build software that stays online under load,
                handles errors gracefully, and scales transparently.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Briefcase size={18} className="text-azure-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    We Own What We Build
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  We run commercial products ourselves — so we sweat latency,
                  uptime, billing, and UX because our own users depend on them
                  daily.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles size={18} className="text-azure-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Outcomes, Not Buzzwords
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  Every product and pipeline is built around a measurable result
                  — time saved, accuracy gained — not model name-dropping.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-azure-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Built to Last
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  Secure paths, graceful failovers, and proper billing — the
                  unglamorous engineering that keeps real products alive.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Clock size={18} className="text-azure-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Ship, Then Iterate
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  We get working software in front of real users fast, then
                  improve from what they actually do — the way we run our own
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
