import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Clock3, Info } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PostJobForm from "../../../components/hire/PostJobForm";
import { HowItWorks, MarketplaceCompare, FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema } from "../../../components/hire/HireBlocks";
import { hireSkills, skillBySlug } from "../../../content/hireSkills";
import { categoryById } from "../../../content/jobCatalog";

const SITE_URL = "https://grahaisystems.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return hireSkills.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = skillBySlug(params.slug);
  if (!s) return {};
  const url = `${SITE_URL}/hire/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url, type: "website" },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

const money = (n) => `$${n.toLocaleString("en-US")}`;

export default function HireSkillPage({ params }) {
  const s = skillBySlug(params.slug);
  if (!s) notFound();
  const cat = categoryById(s.category);
  const prices = s.tasks.map((t) => t.price);
  const related = s.related.map(skillBySlug).filter(Boolean);
  const Hire = `Hire ${s.article} ${s.skill}`;

  return (
    <>
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Hire AI Agents", path: "/hire" }, { name: Hire, path: `/hire/${s.slug}` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${Hire} — delivered by AI agents`,
          description: s.metaDescription,
          serviceType: s.skill,
          provider: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
          areaServed: "Worldwide",
          url: `${SITE_URL}/hire/${s.slug}`,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: Math.min(...prices),
            highPrice: Math.max(...prices),
            offerCount: s.tasks.length,
          },
        }}
      />
      <Header />
      <main className="bg-slate-50/50">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-8 sm:pt-10">
          <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
              <Link href="/hire" className="font-semibold hover:text-slate-900">Hire AI Agents</Link>
              <ChevronRight size={12} />
              <span>{cat.name}</span>
              <ChevronRight size={12} />
              <span className="text-slate-700">{s.skill}</span>
            </nav>
            <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_440px]">
              <div className="lg:pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{cat.agent} · from {money(Math.min(...prices))}</p>
                <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  {Hire} <span className="text-brand-gradient">without the freelancer hunt</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{s.intro}</p>
                <ul className="mt-6 grid max-w-xl gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {["Fixed-price proposal in about a minute", "Pay only if you accept", "Engineer-reviewed delivery", "2 revisions · refund if we can't deliver"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-teal-600" />{t}</li>
                  ))}
                </ul>
              </div>
              <div id="post">
                <PostJobForm
                  defaultCategory={s.category}
                  sample={{ title: s.sampleTitle, brief: s.sampleBrief }}
                  source={`hire/${s.slug}`}
                  heading={`Post your ${s.skill.replace(/ (developer|expert)$/i, "")} job`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Typical jobs */}
        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead center={false} eyebrow="Typical jobs & prices" title={`What clients hire ${s.article} ${s.skill} for`} sub="Indicative fixed prices. Your proposal is priced for your exact brief." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.tasks.map((t) => (
                <Link
                  key={t.title}
                  href={`/hire/post?category=${s.category}&title=${encodeURIComponent(t.title)}&from=${encodeURIComponent(`hire/${s.slug}`)}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-5 transition-colors hover:border-teal-300 hover:bg-white"
                >
                  <h3 className="text-sm font-semibold leading-snug text-slate-900">{t.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs">
                    <span className="font-display text-lg font-extrabold text-slate-900">from {money(t.price)}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 size={12} /> ~{t.days} day{t.days === 1 ? "" : "s"}</span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 opacity-80 group-hover:opacity-100">Post this job <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{s.overviewTitle}</h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            {s.overview.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
        </section>

        {/* Deliverables + limits */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="font-display text-lg font-bold text-slate-900">What you receive</h2>
              <ul className="mt-4 space-y-3">
                {s.deliverables.map((d) => <li key={d} className="flex gap-2.5 text-sm text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-teal-600" />{d}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-7">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900"><Info size={18} className="text-amber-600" /> When to hire a person instead</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{s.limits}</p>
              <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800">Larger build? See custom projects <ArrowRight size={12} /></Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-navy-gradient py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead dark eyebrow="How it works" title={`${Hire} in four steps`} />
            <div className="mt-10"><HowItWorks dark /></div>
          </div>
        </section>

        {/* Compare */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHead title={`Agent vs. hiring ${s.article} ${s.skill} on a marketplace`} />
          <div className="mt-8"><MarketplaceCompare /></div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Weighing your options? Read our <Link href="/alternatives/upwork" className="font-semibold text-teal-700">Upwork</Link> and <Link href="/alternatives/fiverr" className="font-semibold text-teal-700">Fiverr</Link> comparisons.
          </p>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHead title={`${Hire}: common questions`} />
            <div className="mt-8"><FaqList faqs={s.faqs} /></div>
          </div>
        </section>

        {/* Related + CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-gradient p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Get your {s.skill.replace(/ (developer|expert)$/i, "")} job priced in a minute</h2>
            <p className="mt-3 text-slate-300">Free to post. No account. Pay only if you accept.</p>
            <a href="#post" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-teal-400">Post your job <ArrowRight size={15} /></a>
          </div>
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Related</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link key={r.slug} href={`/hire/${r.slug}`} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-700">
                    Hire {r.article} {r.skill}
                  </Link>
                ))}
                <Link href="/hire" className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800">All skills →</Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
