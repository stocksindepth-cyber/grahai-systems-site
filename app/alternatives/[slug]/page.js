import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Scale } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { HowItWorks, FaqList, JsonLd, SectionHead, faqSchema, breadcrumbSchema } from "../../../components/hire/HireBlocks";
import { alternatives } from "../../../content/alternatives";
import { hireSkills } from "../../../content/hireSkills";

const SITE_URL = "https://www.grahaisystems.com";
const bySlug = (slug) => alternatives.find((a) => a.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = bySlug(params.slug);
  if (!a) return {};
  const url = `${SITE_URL}/alternatives/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url, type: "article" },
  };
}

export default function AlternativePage({ params }) {
  const a = bySlug(params.slug);
  if (!a) notFound();
  const others = alternatives.filter((x) => x.slug !== a.slug);
  const popular = ["shopify-developer", "wordpress-developer", "python-developer", "web-scraping-expert", "n8n-expert", "ai-chatbot-developer", "react-developer", "bug-fixing"]
    .map((s) => hireSkills.find((x) => x.slug === s))
    .filter(Boolean);
  const themName = a.columns.length > 2 ? a.competitor : a.columns[0];
  const ourCol = a.columns.length - 1;

  return (
    <>
      <JsonLd data={faqSchema(a.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Alternatives", path: "/alternatives" }, { name: a.competitor, path: `/alternatives/${a.slug}` }])} />
      <Header />
      <main className="bg-slate-50/50">
        <section className="relative overflow-hidden pb-16 pt-8 sm:pt-10">
          <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-slate-500">
              <Link href="/alternatives" className="font-semibold hover:text-slate-900">Alternatives</Link>
              <ChevronRight size={12} />
              <span className="text-slate-700">{a.competitor}</span>
            </nav>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
              {a.headline} <span className="text-brand-gradient">{a.accent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{a.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/hire/post?from=${encodeURIComponent(`alternatives/${a.slug}`)}`} className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-teal-500">
                Post a job — proposal in a minute <ArrowRight size={15} />
              </Link>
              <Link href="/hire" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                How GrahAI Agents works
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900">How {themName} works for clients</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600">
              {a.howTheyWork.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Side by side" title={a.columns.length > 2 ? `${a.columns.slice(0, -1).join(" vs ")} vs GrahAI agents` : `${a.columns[0]} vs GrahAI agents`} />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th scope="col" className="px-5 py-4"> </th>
                  {a.columns.map((c, i) => <th key={c} scope="col" className={`px-5 py-4 ${i === ourCol ? "text-teal-700" : ""}`}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {a.rows.map((r) => (
                  <tr key={r.label} className="border-b border-slate-100 align-top last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`px-5 py-4 ${i === ourCol ? "font-medium text-slate-900" : "text-slate-600"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900">Choose {themName} when…</h2>
            <ul className="mt-4 space-y-3">
              {a.whereTheyWin.map((t) => <li key={t} className="flex gap-2.5 text-sm text-slate-700"><Scale size={15} className="mt-0.5 shrink-0 text-slate-400" />{t}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-teal-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900">Choose GrahAI agents when…</h2>
            <ul className="mt-4 space-y-3">
              {a.whereWeWin.map((t) => <li key={t} className="flex gap-2.5 text-sm text-slate-700"><Check size={15} className="mt-0.5 shrink-0 text-teal-600" />{t}</li>)}
            </ul>
          </div>
        </section>

        <section className="bg-navy-gradient py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead dark eyebrow="How GrahAI agents work" title="Post, get a proposal, pay, receive" />
            <div className="mt-10"><HowItWorks dark /></div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900">The verdict</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{a.verdict}</p>
          </div>
          <div className="mt-12">
            <SectionHead title="Questions people ask" />
            <div className="mt-8"><FaqList faqs={a.faqs} /></div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Popular jobs to post</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {popular.map((s) => (
                <Link key={s.slug} href={`/hire/${s.slug}`} className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-700">Hire {s.article} {s.skill}</Link>
              ))}
            </div>
            <h2 className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">More comparisons</h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {others.map((o) => (
                <Link key={o.slug} href={`/alternatives/${o.slug}`} className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                  {o.slug === "fiverr-vs-upwork" ? "Fiverr vs Upwork" : `${o.competitor} alternative`} →
                </Link>
              ))}
            </div>
            <p className="mt-10 text-[11px] leading-relaxed text-slate-400">
              {a.columns.slice(0, -1).join(", ")} {a.columns.length > 2 ? "are trademarks" : "is a trademark"} of {a.columns.length > 2 ? "their respective owners" : "its owner"}. GrahAI Systems is not affiliated with, endorsed by or sponsored by {a.columns.length > 2 ? "them" : "it"}. Descriptions reflect how {a.columns.length > 2 ? "these platforms" : "the platform"} generally work for clients at the time of writing and may change.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
