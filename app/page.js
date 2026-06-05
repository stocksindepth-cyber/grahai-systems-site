import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle,
  Clock,
  Briefcase,
  GitMerge,
  FileText,
  MessageSquare,
  Globe2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InteractiveHeroDemo from "../components/InteractiveHeroDemo";
import PricingEstimator from "../components/PricingEstimator";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "AI Development Company | AI Agents, Automation & SaaS Development | Grah AI",
  description:
    "Grah AI builds AI agents, chatbots, workflow automations, document intelligence systems, and custom AI SaaS platforms. OpenAI, Claude, Gemini and Groq experts. Free consultation available.",
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
                Bengaluru, India · Shipping Worldwide
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[64px]">
                AI Systems That Replace
                <br />
                <span className="text-brand-gradient">Manual Work.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                We design and build AI-powered applications, autonomous agents, workflow automations, document intelligence systems, and custom business software that save companies hundreds of hours every month.
              </p>
              
              <p className="mt-3 text-sm font-semibold text-slate-400">
                Built by product engineers. Trusted by growing businesses.
              </p>

              <div className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/10 hover:from-azure-500 hover:to-azure-600 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  🚀 Book Free AI Strategy Call
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:support@grahai.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto"
                >
                  📧 support@grahai.com
                </a>
              </div>

              {/* Trust Strip */}
              <div className="mt-12 pt-8 border-t border-slate-200/60">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Powered by leading core technologies
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
                  <span className="hover:text-slate-900 transition-colors">OpenAI</span>
                  <span className="hover:text-slate-900 transition-colors">Claude</span>
                  <span className="hover:text-slate-900 transition-colors">Gemini</span>
                  <span className="hover:text-slate-900 transition-colors">Groq</span>
                  <span className="hover:text-slate-900 transition-colors">AWS</span>
                  <span className="hover:text-slate-900 transition-colors">Firebase</span>
                  <span className="hover:text-slate-900 transition-colors">Next.js</span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Demo */}
            <div>
              <InteractiveHeroDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Section 2) */}
      <section id="services" className="py-24 sm:py-32 relative border-b border-slate-200/50 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              PRODUCTION-GRADE AI
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We Build AI Systems That Work
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Not experiments. Not demos. Deployed production-grade AI solutions that automate workflows, query datasets, and handle core operational loads for real businesses.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Agents Card */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all group bg-white shadow-sm hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 border border-azure-100 text-azure-600 shadow-sm">
                <Cpu size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                AI Agents
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Autonomous agents that reason, plan, and execute business tasks using custom toolboxes.
              </p>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-600 border-t border-slate-100 pt-4">
                <li>• Customer support response agents</li>
                <li>• Real-estate & data research agents</li>
                <li>• Sales outreach & prospecting agents</li>
                <li>• Resume screening & recruitment agents</li>
              </ul>
            </div>

            {/* Workflow Automation */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all group bg-white shadow-sm hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 border border-azure-100 text-azure-600 shadow-sm">
                <GitMerge size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                Workflow Automation
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Connect your business software systems together and eliminate repetitive human processing.
              </p>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-600 border-t border-slate-100 pt-4">
                <li>• Email triage & processing engines</li>
                <li>• Automated routing of prospects</li>
                <li>• Custom multi-tier approval workflows</li>
                <li>• Two-way CRM & accounting syncs</li>
              </ul>
            </div>

            {/* AI Document Intelligence */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all group bg-white shadow-sm hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 border border-azure-100 text-azure-600 shadow-sm">
                <FileText size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                AI Document Intelligence
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Automatically extract, structure, and validate variables from highly complex document sets.
              </p>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-600 border-t border-slate-100 pt-4">
                <li>• Purchase invoice & receipt parsing</li>
                <li>• Tax forms & financial balance sheets</li>
                <li>• Complex vendor legal contracts</li>
                <li>• Insurance claim audits & records</li>
              </ul>
            </div>

            {/* AI Chatbots */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all group bg-white shadow-sm hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 border border-azure-100 text-azure-600 shadow-sm">
                <MessageSquare size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                AI Chatbots
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Human-like virtual assistants trained on your internal data, policies, and product lists.
              </p>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-600 border-t border-slate-100 pt-4">
                <li>• 24/7 client-facing website support</li>
                <li>• Internal staff training knowledge base</li>
                <li>• HR & Employee handbook assistants</li>
                <li>• Contextual customer success assistants</li>
              </ul>
            </div>

            {/* AI SaaS Products */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all group bg-white shadow-sm hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 border border-azure-100 text-azure-600 shadow-sm">
                <Globe2 size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 group-hover:text-azure-600 transition-colors">
                AI SaaS Products
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                Launch proprietary AI startups or features faster with reliable engineering.
              </p>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-600 border-t border-slate-100 pt-4">
                <li>• AI-powered Resume Builders</li>
                <li>• Automated Jobs portals & matches</li>
                <li>• Niche content and search marketplaces</li>
                <li>• Tailored vertical SaaS workflows</li>
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="glass rounded-2xl p-6 border border-slate-200/80 hover:border-azure-500/20 transition-all flex flex-col justify-between bg-azure-50/30 shadow-sm hover:shadow-md">
              <div>
                <span className="text-[10px] font-bold text-azure-600 uppercase tracking-widest">
                  Need a custom scope?
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-slate-900">
                  Let&apos;s Design Your AI Integration
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-505 text-slate-500">
                  Our engineers are ready to assess your workflow bottlenecks and build a pilot roadmap.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-azure-600 hover:bg-azure-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
                >
                  Configure Quote
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Master (Section 3) */}
      <section className="py-16 sm:py-24 relative border-b border-slate-200/50 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl">
              Technologies We Master
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              We write production-ready code directly against model endpoints and core infrastructure.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {[
              "OpenAI API",
              "Anthropic Claude",
              "Google Gemini",
              "Groq LPU",
              "Meta Llama 3",
              "AWS Cloud",
              "Firebase Suite",
              "Next.js App Router",
              "Node.js",
              "PostgreSQL",
              "Pinecone DB",
              "Supabase Core",
              "Docker Containers",
              "Kubernetes Dev",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-350 transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Estimator (Section 4) */}
      <PricingEstimator />

      {/* Products We Have Built (Section 5) */}
      <section id="products" className="py-24 sm:py-32 relative border-b border-slate-200/50 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              PRODUCT FOUNDERS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Products We Have Built
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We are not just a client services shop. We own and operate our own software products, meaning we understand server scalability, user metrics, and billing workflows.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Grah AI */}
            <div className="glass rounded-3xl p-8 border border-slate-200 flex flex-col justify-between bg-white relative overflow-hidden group shadow-sm hover:shadow-md hover:border-azure-500/20 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-azure-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold text-azure-600 uppercase tracking-widest">
                  Flagship Product
                </span>
                <h3 className="mt-2 font-display text-xl font-extrabold text-slate-900">
                  Grah AI
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Multilingual Vedic astrology platform. Features instant Kundli blueprints, daily Panchang charts, and conversational AI astrological coaching.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>AI Jyotish Chat Core</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>English, Hindi, Tamil & Telugu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Zero latency generation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://grahai.com?utm_source=grahaisystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-azure-600 transition-colors"
                >
                  Visit grahai.com
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[10px] text-slate-400 font-semibold">Owner/Operator</span>
              </div>
            </div>

            {/* AgencyPitch */}
            <div className="glass rounded-3xl p-8 border border-slate-200 flex flex-col justify-between bg-white relative overflow-hidden group shadow-sm hover:shadow-md hover:border-azure-500/20 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                  Enterprise Proposal SaaS
                </span>
                <h3 className="mt-2 font-display text-xl font-extrabold text-slate-900">
                  AgencyPitch
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Agency proposal generation and client acquisition automation platform. Helps B2B services pitch, scope, and close contracts at high speed.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Automated proposal builder</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Client analytics telemetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Sleek client contract signing</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://agencypitch.io?utm_source=grahaisystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-purple-600 transition-colors"
                >
                  Visit agencypitch.io
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[10px] text-slate-400 font-semibold">Owner/Operator</span>
              </div>
            </div>

            {/* AasanKhata */}
            <div className="glass rounded-3xl p-8 border border-slate-200 flex flex-col justify-between bg-white relative overflow-hidden group shadow-sm hover:shadow-md hover:border-azure-500/20 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">
                  Intelligent Business Workflows
                </span>
                <h3 className="mt-2 font-display text-xl font-extrabold text-slate-900">
                  AasanKhata
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Advanced ledger platform for SMBs, connecting unstructured invoices and transaction logs directly into accounting sheets and databases.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span>Agentic billing ledger</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span>High-volume file auditing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span>Tally/ERP API bindings</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://aasankhata.in?utm_source=grahaisystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-yellow-600 transition-colors"
                >
                  Visit aasankhata.in
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[10px] text-slate-400 font-semibold">Owner/Operator</span>
              </div>
            </div>
          </div>

          {/* Enterprise custom projects */}
          <div className="mt-12 glass rounded-3xl p-6 sm:p-10 border border-slate-200 bg-slate-50/50 shadow-sm">
            <h4 className="font-display text-lg font-bold text-slate-900 mb-6">
              Custom Enterprise Systems We Ship
            </h4>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-xs text-slate-600">
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">Accounting</span>
                Auto Ledger Posting
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">CRM Core</span>
                Pipeline Automation
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">Inventory</span>
                Predictive Restocking
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">Purchases</span>
                Automated Auditing
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">BI Analytics</span>
                Custom LLM Reports
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <span className="font-bold block text-slate-900 mb-1">Reporting</span>
                Real-time Logs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Grah AI (Section 6) */}
      <section id="company" className="py-24 sm:py-32 relative border-b border-slate-200/50 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
                OUR CREDENTIALS
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Why Businesses Choose Grah AI
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                We have over 11+ years of software engineering and product development experience. We build things to stay online under load, handle errors gracefully, and scale transparently.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={18} className="text-azure-600" />
                  <h3 className="font-bold text-slate-900 text-sm">Product Builders First</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We operate commercial SaaS products. We write robust code, optimize latency, and design intuitive UIs because we do it for ourselves daily.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles size={18} className="text-azure-600" />
                  <h3 className="font-bold text-slate-900 text-sm">AI First Frameworks</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every pipeline we architecture is centered around measurable business outcome reduction (time saved, accuracy gain), not model buzzwords.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={18} className="text-azure-600" />
                  <h3 className="font-bold text-slate-900 text-sm">Enterprise Durability</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  11+ years of engineering ensures production grade safety. We build secure API paths, failover model routes, and proper billing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-azure-600" />
                  <h3 className="font-bold text-slate-900 text-sm">Rapid Delivery (4-8 Wks)</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We don&apos;t write endless specification sheets. We ship core working MVPs in 4-8 weeks so you can validate flows on real users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve (Section 7) */}
      <section className="py-20 sm:py-28 relative border-b border-slate-200/50 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl">
              Industries We Serve
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              We deploy custom automation solutions across varied business domains.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              "SaaS Platforms",
              "Logistics & Freight",
              "Trucking Networks",
              "Healthcare Clinics",
              "Legal Firms",
              "Accounting Practices",
              "Insurance Audits",
              "Education & EdTech",
              "E-Commerce Brands",
              "HR Tech Solutions",
              "Recruiting Agencies",
            ].map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-azure-500/20 transition-all cursor-default shadow-sm"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
