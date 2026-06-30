import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Cpu, AlertTriangle, Trophy, Lightbulb } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContactSection from "../../../components/ContactSection";
import { caseStudies } from "../../../content/caseStudies";

const SITE_URL = "https://grahaisystems.com";

const accent = {
  azure: { text: "text-azure-600", chip: "bg-azure-50 border-azure-100 text-azure-600", dot: "bg-azure-500" },
  emerald: { text: "text-emerald-600", chip: "bg-emerald-50 border-emerald-100 text-emerald-600", dot: "bg-emerald-500" },
  amber: { text: "text-amber-600", chip: "bg-amber-50 border-amber-100 text-amber-600", dot: "bg-amber-500" },
  purple: { text: "text-purple-600", chip: "bg-purple-50 border-purple-100 text-purple-600", dot: "bg-purple-500" },
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | GrahAI Systems Case Study`,
    description: cs.summary,
    alternates: { canonical: `${SITE_URL}/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.summary,
      type: "article",
      url: `${SITE_URL}/case-studies/${cs.slug}`,
      images: [{ url: "/og-case-studies.png", width: 1200, height: 630, alt: cs.title }],
    },
    twitter: { card: "summary_large_image", images: ["/og-case-studies.png"] },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();
  const a = accent[cs.accent] || accent.azure;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: cs.title,
    description: cs.summary,
    author: { "@type": "Organization", name: "GrahAI Systems" },
    publisher: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/case-studies/${cs.slug}`,
  };

  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-slate-50/30 pt-12 pb-24 sm:pt-16 sm:pb-28">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> All case studies
          </Link>

          {/* Header */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${a.chip}`}>{cs.product}</span>
              <span className="text-[11px] font-semibold text-slate-400">{cs.category}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
              {cs.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">{cs.summary}</p>
            <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${a.text} hover:underline`}>
              Visit the live product <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-display text-2xl font-extrabold text-slate-900">{m.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <Section title="The problem">
            {cs.problem.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-slate-600">{p}</p>
            ))}
          </Section>

          {/* Architecture */}
          <Section title="The architecture">
            <ul className="space-y-3">
              {cs.architecture.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* AI stack */}
          <Section title="The AI stack" icon={Cpu}>
            <div className="flex flex-wrap gap-2.5">
              {cs.aiStack.map((t) => (
                <span key={t} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* Challenges */}
          <Section title="Engineering challenges" icon={AlertTriangle}>
            <div className="space-y-5">
              {cs.challenges.map((c, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Results */}
          <Section title="The result" icon={Trophy}>
            <ul className="space-y-3">
              {cs.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <Check size={16} className={`mt-0.5 shrink-0 ${a.text}`} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Lessons */}
          <Section title="Lessons we'd bring to your build" icon={Lightbulb}>
            <ul className="space-y-3">
              {cs.lessons.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* CTA */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-center shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-extrabold text-white">Planning something like this?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              We bring the same production discipline to client builds. Tell us
              the problem you&apos;re solving and we&apos;ll map an approach.
            </p>
            <a href="/#contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Book a discovery call <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <section className="mt-12 border-t border-slate-200/70 pt-10">
      <h2 className="mb-5 flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {Icon && <Icon size={20} className="text-azure-600" />}
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
