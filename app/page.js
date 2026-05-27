import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  Languages,
  Calendar,
  ShieldCheck,
  Zap,
  Layers,
  Mail,
  MapPin,
} from "lucide-react";

const SITE_URL = "https://grahaisystems.com";
const GRAHAI_URL = "https://www.grahai.com";

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GrahAI",
    url: GRAHAI_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web, Android",
    description:
      "AI-powered Vedic astrology platform. Free Kundli, daily Rashifal, Panchang, and an AI Jyotish chat in English, Hindi, Tamil, and Telugu.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: {
      "@type": "Organization",
      name: "GrahAI Systems",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Header />
      <Hero />
      <Flagship />
      <Approach />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href="#product" className="hover:text-white transition-colors">
            Product
          </a>
          <a href="#approach" className="hover:text-white transition-colors">
            Approach
          </a>
          <a href="#company" className="hover:text-white transition-colors">
            Company
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <a
          href={GRAHAI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all sm:text-sm"
        >
          Visit GrahAI
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Bengaluru, India · Founded 2024
          </div>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px] animate-fade-in-up">
            An AI company building
            <br />
            <span className="text-brand-gradient">software for India and the World.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            GrahAI Systems is a Bengaluru-based AI software company. We build
            consumer products where AI does the heavy lifting and the user
            simply gets a faster, clearer answer — in the language they
            actually speak.
          </p>

          <div className="mt-9 flex flex-col items-start justify-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-500 to-azure-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-azure-700/30 hover:from-azure-400 hover:to-azure-600 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              See what we&apos;ve built
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Flagship() {
  const features = [
    {
      icon: Sparkles,
      title: "Instant Kundli",
      body:
        "Birth charts generated in seconds — no signup, no paywall. Traditional accuracy with modern presentation.",
    },
    {
      icon: MessageSquare,
      title: "AI Jyotish chat",
      body:
        "Ask anything about your chart in plain language. The AI explains placements, dashas, and yogas without jargon.",
    },
    {
      icon: Calendar,
      title: "Daily Rashifal & Panchang",
      body:
        "Accurate Tithi, Nakshatra, Yoga, Karana, and Muhurat — refreshed daily for every Rashi.",
    },
    {
      icon: Languages,
      title: "Four Indian languages",
      body:
        "Full content parity in English, हिन्दी, தமிழ், and తెలుగు — not machine translation.",
    },
  ];

  return (
    <section
      id="product"
      className="relative border-b border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure-400">
              Our flagship product
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              GrahAI
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
              Vedic astrology, rebuilt for the way people actually want to use
              it: fast, conversational, multilingual, and free at the core.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Existing astrology platforms in India load slowly, paywall basic
              features, and were designed for an internet that no longer
              exists. GrahAI is what a modern Indian astrology product looks
              like — built on first-party AI, designed for phones, and shipped
              in the languages users actually search in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={GRAHAI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-azure-500 to-azure-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/30 hover:from-azure-400 hover:to-azure-600 transition-all"
              >
                Visit grahai.com
                <ArrowUpRight size={14} />
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live · free to use
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="glass rounded-2xl p-6 transition-colors hover:border-white/15"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-azure-500/15 ring-1 ring-azure-500/30">
                    <Icon size={18} className="text-azure-400" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {f.body}
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

function Approach() {
  const principles = [
    {
      icon: Zap,
      title: "AI under the hood",
      body:
        "The best AI products don’t feel like AI products. We use LLMs where they earn their keep and stay out of the way everywhere else.",
    },
    {
      icon: Languages,
      title: "Indian languages, first-class",
      body:
        "Hindi, Tamil, and Telugu aren’t translations of an English product — they’re shipped with content parity from day one.",
    },
    {
      icon: Layers,
      title: "First-party stack",
      body:
        "We own the AI infrastructure, the data layer, and the billing. No middleware companies in the critical path of our users.",
    },
    {
      icon: ShieldCheck,
      title: "Bootstrapped and patient",
      body:
        "No outside capital, no growth-at-all-costs. We pick durable problems and build for users who stay.",
    },
  ];

  return (
    <section
      id="approach"
      className="relative border-b border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure-400">
            How we build
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Practical AI, made
            <br />
            <span className="text-brand-gradient">for people who&apos;ll use it daily.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Four principles guide every product decision we make.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="glass rounded-2xl p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon size={18} className="text-white/80" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Company() {
  const facts = [
    { label: "Founded", value: "2024" },
    { label: "Headquarters", value: "Bengaluru, India" },
    { label: "Funding", value: "Bootstrapped" },
    { label: "Reach", value: "India & the World" },
  ];

  return (
    <section
      id="company"
      className="relative border-b border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure-400">
              The company
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A small team
              <br />
              shipping serious software.
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-white/70">
              GrahAI Systems was founded in 2024 by Rahul Dubey to build AI
              products for India and the World — meeting users on a mobile
              phone, in their own language, with no learning curve.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              We&apos;re engineers first. We write our own code, run our own
              infrastructure, and pick our AI models on the merits. The
              company exists to build things people open every day, not pitch
              decks.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/5 pt-8 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-white">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl px-8 py-16 text-center sm:px-12 sm:py-20">
          <Mail size={28} className="mx-auto text-azure-400" />
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get in touch.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Partnerships, press, hiring inquiries, or just curious about what
            we&apos;re building — write to us. We read everything.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@grahaisystems.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-500 to-azure-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/30 hover:from-azure-400 hover:to-azure-600 transition-all"
            >
              hello@grahaisystems.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-1.5 text-xs text-white/40">
            <MapPin size={12} />
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
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
              An AI software company building consumer products for India and
              the World.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[{ label: "GrahAI", href: GRAHAI_URL }]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Approach", href: "#approach" },
              { label: "About", href: "#company" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              {
                label: "hello@grahaisystems.com",
                href: "mailto:hello@grahaisystems.com",
              },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GrahAI Systems. All rights reserved.</p>
          <p>Bengaluru, India</p>
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
          const external = l.href.startsWith("http") || l.href.startsWith("mailto:");
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={external && l.href.startsWith("http") ? "_blank" : undefined}
                rel={external && l.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
