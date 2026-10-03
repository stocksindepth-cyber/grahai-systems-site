import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Clock3, Repeat, LifeBuoy } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import PostJobForm from "../hire/PostJobForm";
import { HowItWorks, FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema } from "../hire/HireBlocks";
import { categoryById } from "../../content/jobCatalog";
import { planById } from "../../content/planCatalog";
import { pageTitleForPath } from "../../content/seoIndex";

const SITE_URL = "https://www.grahaisystems.com";

// Keep titles inside what Google shows (~70 chars): add the brand only if it fits.
const withBrand = (t) => (t.includes("GrahAI") || `${t} | GrahAI Systems`.length > 70 ? t : `${t} | GrahAI Systems`);
const money = (n) => `$${n.toLocaleString("en-US")}`;

export function serviceMetadata(page) {
  const url = `${SITE_URL}/${page.slug}`;
  return {
    title: withBrand(page.metaTitle),
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, type: "website" },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
  };
}

function tierHref(page, tier) {
  if (tier.billing === "monthly") {
    const id = tier.priceUsd === 79 ? "care" : tier.priceUsd === 799 ? "retainer-plus" : "retainer";
    return `/hire/retainer#start-${id}`;
  }
  return `/hire/post?category=${page.category}&title=${encodeURIComponent(`${page.eyebrow}: ${tier.name}`)}&from=${encodeURIComponent(page.slug)}`;
}

export default function ServiceLanding({ page }) {
  const cat = categoryById(page.category);
  const oneTime = [...page.tiers.filter((t) => t.billing === "one-time").map((t) => t.priceUsd), ...page.tasks.map((t) => t.price)];
  const plan = page.plan ? planById(page.plan) : null;
  const related = page.related.map((p) => ({ href: p, label: pageTitleForPath(p) })).filter((r) => r.label);
  const allFaqs = [...page.answers, ...page.faqs];

  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: page.eyebrow, path: `/${page.slug}` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          description: page.metaDescription,
          serviceType: page.eyebrow,
          provider: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          areaServed: "Worldwide",
          url: `${SITE_URL}/${page.slug}`,
          offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: Math.min(...oneTime), highPrice: Math.max(...oneTime), offerCount: oneTime.length },
        }}
      />
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-slate-900">Services</Link>
              <ChevronRight size={12} />
              <span className="text-slate-700">{page.eyebrow}</span>
            </nav>
            <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_440px]">
              <div className="lg:pt-6">
                <p className="eyebrow">{page.eyebrow} · fixed price from {money(Math.min(...oneTime))}</p>
                <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.06] text-slate-900 sm:text-5xl">
                  {page.h1}
                  {page.h1Accent && <span className="text-teal-600"> {page.h1Accent}</span>}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{page.intro}</p>
                <ul className="mt-6 grid max-w-xl gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {["Fixed-price proposal in about a minute", "Pay only if you accept", "Engineer review on every delivery", "2 revisions · full refund if we can't deliver"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-600" />{t}</li>
                  ))}
                </ul>
              </div>
              <div id="post" className="scroll-mt-24">
                <PostJobForm defaultCategory={page.category} source={page.slug} heading={`Describe your ${page.eyebrow.toLowerCase()} job`} />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Pricing" title={`${page.eyebrow} pricing`} sub="Fixed prices, agreed before any work starts. Your proposal is priced for your exact brief." />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.tiers.map((t, i) => (
                <div key={t.name} className={`flex flex-col rounded-2xl border bg-white p-7 ${i === 1 ? "border-teal-600 ring-1 ring-teal-600" : "border-slate-200"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{t.name}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500"><Clock3 size={12} /> {t.timeline}</span>
                  </div>
                  <div className="mt-3 font-display text-3xl font-semibold text-slate-900">
                    {t.billing === "monthly" ? money(t.priceUsd) : `from ${money(t.priceUsd)}`}
                    {t.billing === "monthly" && <span className="text-base font-normal text-slate-500">/mo</span>}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{t.forWho}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700">
                    {t.includes.map((x) => <li key={x} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-teal-600" />{x}</li>)}
                  </ul>
                  <Link href={tierHref(page, t)} className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${i === 1 ? "bg-teal-600 text-white hover:bg-teal-500" : "border border-slate-300 text-slate-800 hover:bg-slate-50"}`}>
                    {t.billing === "monthly" ? `Start ${t.name}` : "Get my fixed price"} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical jobs */}
        <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Typical jobs" title="What people hire us for" sub="Indicative fixed prices for common requests." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.tasks.map((t) => (
                <Link
                  key={t.title}
                  href={`/hire/post?category=${page.category}&title=${encodeURIComponent(t.title)}&from=${encodeURIComponent(page.slug)}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-300"
                >
                  <h3 className="text-sm font-semibold leading-snug text-slate-900">{t.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs">
                    <span className="font-display text-lg font-semibold text-slate-900">from {money(t.price)}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 size={12} /> ~{t.days} day{t.days === 1 ? "" : "s"}</span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">Post this job <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
            <h2 className="font-display text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">{page.overviewTitle}</h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
              {page.overview.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* Natural-language answers */}
        <section className="border-t border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Before you hire" title="Questions people ask first" />
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {page.answers.map((a) => (
                <div key={a.q}>
                  <h3 className="font-display text-lg font-semibold leading-snug text-slate-900">{a.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{a.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-navy-gradient py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead dark eyebrow="How it works" title="From brief to delivery in four steps" />
            <div className="mt-10"><HowItWorks dark /></div>
          </div>
        </section>

        {/* Compare */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Compared" title="Your options, side by side" />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-5 py-4"> </th>
                    {page.compare.columns.map((c, i) => <th key={c} scope="col" className={`px-5 py-4 ${i === 0 ? "text-teal-700" : ""}`}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {page.compare.rows.map((r) => (
                    <tr key={r.label} className="border-b border-slate-100 align-top last:border-0">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{r.label}</th>
                      {r.values.map((v, i) => <td key={i} className={`px-5 py-4 ${i === 0 ? "font-medium text-slate-900" : "text-slate-600"}`}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Plan cross-sell */}
        {plan && (
          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-teal-700 ring-1 ring-slate-200">
                  {plan.id === "care" ? <LifeBuoy size={18} /> : <Repeat size={18} />}
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-slate-900">{plan.id === "care" ? "Keep it running after launch" : "Need ongoing work?"}: {plan.name}, {money(plan.priceUsd)}/mo</h2>
                  <p className="mt-1 max-w-2xl text-sm text-slate-600">{plan.pitch}</p>
                </div>
              </div>
              <Link href={`/hire/retainer#start-${plan.id}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100">
                See monthly plans <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
            <SectionHead center={false} eyebrow="FAQ" title={`${page.eyebrow}: common questions`} />
            <FaqList faqs={page.faqs} />
          </div>
        </section>

        {/* Related + CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Get your fixed price in about a minute</h2>
                <p className="mt-2 text-slate-400">Free to post. No account. You only pay if you accept.</p>
              </div>
              <a href="#post" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500">
                Describe your job <ArrowRight size={15} />
              </a>
            </div>
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Related</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {related.map((r) => (
                    <Link key={r.href} href={r.href} className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-700">
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-8 text-xs text-slate-500">{cat.agent} handles {cat.name.toLowerCase()} jobs. Prices in USD; clients in India pay the rupee equivalent.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
