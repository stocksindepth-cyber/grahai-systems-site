import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import CostEstimator from "./CostEstimator";
import { FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema } from "../hire/HireBlocks";
import { pageTitleForPath } from "../../content/seoIndex";

const SITE_URL = "https://www.grahaisystems.com";

// Keep titles inside what Google shows (~70 chars): add the brand only if it fits.
const withBrand = (t) => (t.includes("GrahAI") || `${t} | GrahAI Systems`.length > 70 ? t : `${t} | GrahAI Systems`);
const money = (n) => `$${n.toLocaleString("en-US")}`;

export function costGuideMetadata(g) {
  const url = `${SITE_URL}/${g.slug}`;
  return {
    title: withBrand(g.metaTitle),
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url, type: "article" },
  };
}

export default function CostGuide({ guide: g }) {
  const related = g.related.map((p) => ({ href: p, label: pageTitleForPath(p) })).filter((r) => r.label);

  return (
    <>
      <JsonLd data={faqSchema(g.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: g.h1, path: `/${g.slug}` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.h1,
          description: g.metaDescription,
          author: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          publisher: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          dateModified: "2026-10-03",
          mainEntityOfPage: `${SITE_URL}/${g.slug}`,
        }}
      />
      <Header />
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-slate-900">Services</Link>
              <ChevronRight size={12} />
              <span className="text-slate-700">Cost guide</span>
            </nav>
            <p className="eyebrow mt-6">Cost guide · updated October 2026</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.06] text-slate-900 sm:text-5xl">{g.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{g.intro}</p>
            <div className="mt-8 max-w-3xl rounded-2xl border-l-4 border-teal-600 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">The short answer</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-800">{g.quickAnswer}</p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Estimate it" title="Get a price range for your project" sub="Pick what you're building. The range updates as you go." />
            <div className="mt-8"><CostEstimator kind={g.estimator} slug={g.slug} /></div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Price by project type" title="Typical market prices vs. our fixed prices" />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-5 py-4">Project</th>
                    <th scope="col" className="px-5 py-4">Typical market price</th>
                    <th scope="col" className="px-5 py-4 text-teal-700">GrahAI agents, fixed</th>
                    <th scope="col" className="px-5 py-4">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {g.breakdown.map((r) => (
                    <tr key={r.type} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{r.type}</th>
                      <td className="px-5 py-4 text-slate-600">{r.market}</td>
                      <td className="px-5 py-4 font-semibold text-slate-900">from {money(r.oursUsd)}</td>
                      <td className="px-5 py-4 text-slate-600">{r.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">Market ranges come from the published sources listed at the end of this guide.</p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="What drives the price" title="Six things that change the cost" />
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {g.factors.map((f) => (
                <div key={f.name} className="border-t border-slate-200 pt-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
            {g.sections.map((s) => (
              <article key={s.h2}>
                <h2 className="font-display text-2xl font-semibold leading-tight text-slate-900">{s.h2}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600">
                  {s.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </div>
              </article>
            ))}
            <article>
              <h2 className="font-display text-2xl font-semibold leading-tight text-slate-900">How to spend less without cutting corners</h2>
              <ul className="mt-4 space-y-3">
                {g.savings.map((t) => <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-slate-600"><Check size={16} className="mt-1 shrink-0 text-teal-600" />{t}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
            <SectionHead center={false} eyebrow="FAQ" title="Cost questions, answered" />
            <FaqList faqs={g.faqs} />
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Skip the guesswork</h2>
                <p className="mt-2 text-slate-400">Describe your project and get a fixed price in about a minute. Free, no account.</p>
              </div>
              <Link href={`/hire/post?category=${g.category}&from=${encodeURIComponent(g.slug)}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500">
                Get my fixed price <ArrowRight size={15} />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {related.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Related</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {related.map((r) => (
                      <Link key={r.href} href={r.href} className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-700">{r.label}</Link>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Sources</h2>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {g.sources.map((s) => (
                    <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-700 hover:text-teal-800">{s.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
