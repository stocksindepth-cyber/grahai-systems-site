import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MarketplaceCompare, SectionHead, JsonLd, breadcrumbSchema } from "../../components/hire/HireBlocks";
import { alternatives } from "../../content/alternatives";

const SITE_URL = "https://www.grahaisystems.com";

export const metadata = {
  title: "Upwork & Fiverr Alternatives for Software Jobs | GrahAI Systems",
  description:
    "Honest comparisons of Upwork, Fiverr, Toptal, Freelancer.com and PeoplePerHour — and when an AI agent with a fixed price is the faster way to get a software job done.",
  keywords: ["upwork alternatives", "fiverr alternatives", "sites like upwork", "sites like fiverr", "freelance marketplace alternatives"],
  alternates: { canonical: `${SITE_URL}/alternatives` },
};

export default function AlternativesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Alternatives", path: "/alternatives" }])} />
      <Header />
      <main className="bg-slate-50/50">
        <section className="relative overflow-hidden pb-14 pt-12 sm:pt-16">
          <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Comparisons</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
              Alternatives to Upwork and Fiverr <span className="text-brand-gradient">for software work</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Freelance marketplaces help you find people. If you'd rather skip the bidding, vetting and interviews and just get a software job done at a fixed price, here's how the options compare — including when a marketplace is still the right call.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((a) => (
              <Link key={a.slug} href={`/alternatives/${a.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
                <h2 className="font-display text-lg font-bold text-slate-900">
                  {a.slug === "fiverr-vs-upwork" ? "Fiverr vs Upwork" : `${a.competitor} alternative`}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{a.intro}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-teal-700">Read the comparison <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHead title="Marketplace vs. AI agent, in one table" />
            <div className="mt-8"><MarketplaceCompare /></div>
            <div className="mt-10 text-center">
              <Link href="/hire/post?from=alternatives" className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-teal-500">
                Post a job — proposal in a minute <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
