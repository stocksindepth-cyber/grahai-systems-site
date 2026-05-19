import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Brain,
  Receipt,
  FileText,
  ShieldCheck,
  Globe2,
  Zap,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// Single source of truth for product data — feeds the cards AND the
// structured-data graph. If you add a product, this is the only edit.
const PRODUCTS = [
  {
    name: "GrahAI",
    tagline: "AI-powered Vedic astrology — for the next billion.",
    description:
      "Free Kundli, daily Rashifal, accurate Panchang, and an AI Jyotish chat that explains your chart in plain language. Available in English, हिन्दी, தமிழ், తెలుగు.",
    href: "https://www.grahai.com",
    icon: Sparkles,
    accent: "from-amber-400 via-yellow-500 to-orange-500",
    tag: "Consumer",
    metrics: [
      { label: "Languages", value: "4" },
      { label: "Daily users", value: "10K+" },
      { label: "Free tools", value: "8" },
    ],
  },
  {
    name: "AasanKhata",
    tagline: "Bharat ka sabse aasaan invoicing app.",
    description:
      "GST-compliant invoices in 30 seconds, designed for Indian small businesses. Free editor, dashboards, GSTIN validation, PDF in one click — no signup needed to start.",
    href: "https://aasankhata.com",
    icon: Receipt,
    accent: "from-emerald-400 via-green-500 to-teal-600",
    tag: "SMB",
    metrics: [
      { label: "Invoice in", value: "30s" },
      { label: "GST-ready", value: "100%" },
      { label: "Free tier", value: "Yes" },
    ],
  },
  {
    name: "AgencyPitch",
    tagline: "AI proposal generator for digital marketing agencies.",
    description:
      "Paste a brief, get a client-ready pitch deck with scope, deliverables, pricing, and timeline. Built for the agency owner who'd rather win clients than write Word docs.",
    href: "https://agencypitch.com",
    icon: FileText,
    accent: "from-indigo-400 via-blue-500 to-cyan-500",
    tag: "B2B",
    metrics: [
      { label: "Pitch time", value: "5 min" },
      { label: "Tone presets", value: "6" },
      { label: "Export", value: "PDF · PPT" },
    ],
  },
];

const VALUES = [
  {
    icon: Brain,
    title: "Practical AI, not parlor tricks",
    body:
      "We ship AI products people pay for and use weekly — not demos that go viral and die.",
  },
  {
    icon: Globe2,
    title: "Made in India, used worldwide",
    body:
      "Built for Indian languages, Indian pricing, Indian payment rails — then exported to global users who need the same.",
  },
  {
    icon: Zap,
    title: "Ship to learn",
    body:
      "Three live products in 18 months. We launch fast, measure honestly, and pivot when the data tells us to.",
  },
  {
    icon: ShieldCheck,
    title: "Own the stack",
    body:
      "First-party AI infrastructure, first-party data, first-party billing. No middleware companies in the critical path.",
  },
];

const SITE_URL = "https://grahaisystems.com";

export default function Page() {
  // Product graph — separate JSON-LD node attached to the page itself
  // so SoftwareApplication entries get crawled with full context.
  const productGraph = {
    "@context": "https://schema.org",
    "@graph": PRODUCTS.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.href,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: p.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      publisher: {
        "@type": "Organization",
        name: "GrahAI Systems",
        url: SITE_URL,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productGraph) }}
      />

      <Header />
      <Hero />
      <Products />
      <Values />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

// ===================================================================
// Header — minimal nav, logo + product links + GitHub
// ===================================================================
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="GrahAI Systems home"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/95 ring-1 ring-white/10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="GrahAI Systems logo"
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
            GrahAI <span className="font-light text-white/60">Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="#values" className="hover:text-white transition-colors">
            How we build
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all sm:text-sm"
        >
          Get in touch
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

// ===================================================================
// Hero — outcome-first headline, calibrated to AI engines
// ===================================================================
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-azure-500/30 bg-azure-500/10 px-3 py-1.5 text-xs font-semibold text-azure-400 backdrop-blur-sm">
            <Sparkles size={12} className="text-gold-400" />
            <span>AI product studio · Made in India</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Practical AI,{" "}
            <span className="text-brand-gradient">made for the world.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            GrahAI Systems is an AI software company building category-leading
            consumer and SMB products. Three live products. One thesis:
            <span className="font-semibold text-white">
              {" "}
              AI is most useful when it disappears into a job people actually
              do daily.
            </span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-500 to-azure-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-azure-700/40 hover:from-azure-400 hover:to-azure-600 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Explore our products
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all"
            >
              Work with us
            </a>
          </div>

          {/* Below-fold authority — companies/products we run */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/40">
            <span>Our products power</span>
            <span className="font-bold text-white/70">GrahAI</span>
            <span>·</span>
            <span className="font-bold text-white/70">AasanKhata</span>
            <span>·</span>
            <span className="font-bold text-white/70">AgencyPitch</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================================================================
// Products — the heart of the page
// ===================================================================
function Products() {
  return (
    <section id="products" className="relative border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-azure-400">
            Our products
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Three products. One thesis.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Each product solves a job that's painful, repeated, and
            mostly-manual today. AI hides under the hood — the user just sees
            a faster, smarter tool.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl glass glass-hover p-7"
    >
      {/* Accent gradient strip on top */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accent} opacity-80`}
      />

      <div className="flex items-start justify-between">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} shadow-lg`}
        >
          <Icon size={22} className="text-white" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
          {product.tag}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-extrabold text-white">
        {product.name}
      </h3>
      <p className="mt-1.5 text-sm font-semibold text-white/80">
        {product.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/60 flex-1">
        {product.description}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/5 pt-5">
        {product.metrics.map((m) => (
          <div key={m.label}>
            <div className="text-lg font-bold text-white">{m.value}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/50">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-azure-400 group-hover:gap-2.5 transition-all">
        Visit {product.name.toLowerCase()}.com
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:rotate-45"
        />
      </div>
    </a>
  );
}

// ===================================================================
// Values — how we build (4-up grid)
// ===================================================================
function Values() {
  return (
    <section id="values" className="relative border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-azure-400">
              How we build
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              We pick problems
              <br />
              <span className="text-brand-gradient">people actually pay for.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Three live products in 18 months tells you everything about how
              we work. We don't ship to demo — we ship to retain.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass rounded-2xl p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-azure-500/15 ring-1 ring-azure-500/30">
                    <Icon size={18} className="text-azure-400" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================================================================
// Stats — single trust strip, canonical numbers
// ===================================================================
function Stats() {
  const stats = [
    { value: "3", label: "Live products" },
    { value: "10K+", label: "Daily users" },
    { value: "4", label: "Languages supported" },
    { value: "100%", label: "Bootstrapped" },
  ];
  return (
    <section className="relative border-b border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/50 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================================================================
// Contact — single CTA, no form (just emails)
// ===================================================================
function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl px-8 py-16 text-center sm:px-12 sm:py-20">
          <Mail size={32} className="mx-auto text-azure-400" />
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Building something
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-gradient">we should know about?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Partnerships, press, or just curious — drop us a line. We
            personally read everything.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@grahaisystems.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-500 to-azure-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-azure-700/40 hover:from-azure-400 hover:to-azure-600 transition-all"
            >
              hello@grahaisystems.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Based in Bengaluru, India · Building for the world
          </p>
        </div>
      </div>
    </section>
  );
}

// ===================================================================
// Footer
// ===================================================================
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/95 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="GrahAI Systems"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-white">
                GrahAI <span className="font-light text-white/60">Systems</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              AI-first product studio building practical software for India and
              the world. Three live products. One thesis.
            </p>
          </div>

          <FooterCol
            title="Products"
            links={[
              { label: "GrahAI", href: "https://www.grahai.com" },
              { label: "AasanKhata", href: "https://aasankhata.com" },
              { label: "AgencyPitch", href: "https://agencypitch.com" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "How we build", href: "#values" },
              { label: "Contact", href: "#contact" },
              { label: "hello@grahaisystems.com", href: "mailto:hello@grahaisystems.com" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { label: "GitHub", href: "https://github.com/stocksindepth-cyber", icon: Github },
              { label: "LinkedIn", href: "#", icon: Linkedin },
              { label: "Twitter / X", href: "#", icon: Twitter },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GrahAI Systems. All rights reserved.</p>
          <p>Bengaluru, India · Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => {
          const Icon = l.icon;
          const external = l.href.startsWith("http");
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                {Icon && <Icon size={14} />}
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
