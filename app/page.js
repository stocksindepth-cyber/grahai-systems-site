import Link from "next/link";
import { ArrowUpRight, Sparkles, Globe2, Users, Languages } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../content/products";

export const metadata = {
  title: "GrahAI Systems — AI Products for India and the World",
  description:
    "GrahAI Systems builds AI-powered software products used by people across India and the World. Our products: GrahAI (AI Vedic astrology) and ApplyVita (AI career agent).",
};

const stats = [
  { value: "10,000+", label: "Monthly users", icon: Users },
  { value: "9", label: "Languages in production", icon: Languages },
  { value: "2", label: "AI products live", icon: Sparkles },
  { value: "India + World", label: "Where we build for", icon: Globe2 },
];

const productAccentMap = {
  grahai: {
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    dot: "bg-teal-500",
    btn: "bg-teal-600 hover:bg-teal-700 shadow-teal-700/20",
    ring: "ring-teal-500/20",
    glow: "from-teal-500/5",
    border: "hover:border-teal-200",
  },
  applyvita: {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-500",
    btn: "bg-violet-600 hover:bg-violet-700 shadow-violet-700/20",
    ring: "ring-violet-500/20",
    glow: "from-violet-500/5",
    border: "hover:border-violet-200",
  },
};

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold text-teal-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
            AI Products · Bengaluru, India
          </div>
          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-7xl">
            We build AI products<br />
            <span className="text-teal-400">people actually use</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            GrahAI Systems is a product company based in Bengaluru, India. We ship AI-powered software
            that solves real problems for real people — across India and around the world.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 hover:bg-teal-500 transition-colors"
            >
              See our products
              <ArrowUpRight size={15} />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon size={18} className="text-teal-600 mb-2" />
                <p className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Our Products</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built, run, and loved by thousands
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => {
              const ac = productAccentMap[product.id] ?? productAccentMap.grahai;
              return (
                <div
                  key={product.id}
                  className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md ${ac.border}`}
                >
                  {/* glow */}
                  <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${ac.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${ac.badge}`}>
                        {product.badge}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-500">{product.domain}</p>
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${product.name}`}
                      className={`flex-shrink-0 rounded-xl ${ac.btn} px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors inline-flex items-center gap-1.5`}
                    >
                      Visit <ArrowUpRight size={13} />
                    </a>
                  </div>

                  <p className="relative mt-5 text-sm leading-relaxed text-slate-600">
                    {product.blurb}
                  </p>

                  <ul className="relative mt-6 space-y-2.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${ac.dot}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-8 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {product.url.replace("https://", "")} <ArrowUpRight size={12} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Our Mission</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            AI that works for everyone, not just enterprises
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            We started GrahAI Systems to build AI products that genuinely help everyday people — a student
            writing their first resume, a family making an important life decision, someone in a small town
            who has never had access to these tools before. We believe AI should be personal, accurate,
            and available in your own language.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We are a small, focused team in Bengaluru. We ship fast, stay close to our users, and measure
            everything that matters. On our way to ₹10 lakhs in monthly recurring revenue — and just getting started.
          </p>
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              More about GrahAI Systems <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Questions, partnerships, or just want to say hi — we read every email.
          </p>
          <a
            href="mailto:support@grahai.com"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/30 hover:bg-teal-500 transition-colors"
          >
            support@grahai.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
