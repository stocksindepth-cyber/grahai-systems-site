import { notFound } from "next/navigation";
import SEOLandingTemplate from "../../../components/SEOLandingTemplate";
import { comparisons } from "../../../content/comparisons";

const SITE_URL = "https://grahaisystems.com";

export function generateStaticParams() {
  return comparisons.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = comparisons.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${SITE_URL}/compare/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE_URL}/compare/${s.slug}`,
      type: "article",
      images: [{ url: "/og-solutions.png", width: 1200, height: 630, alt: s.headline }],
    },
    twitter: { card: "summary_large_image", images: ["/og-solutions.png"] },
  };
}

export default function ComparePage({ params }) {
  const s = comparisons.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (s.faqs || []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
      { "@type": "ListItem", position: 3, name: s.headline, item: `${SITE_URL}/compare/${s.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.metaTitle,
    description: s.metaDescription,
    author: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
    publisher: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/compare/${s.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, articleSchema]) }} />
      <SEOLandingTemplate
        pageTitle={s.metaTitle}
        pageDescription={s.metaDescription}
        keywordAccent={s.keywordAccent}
        headline={s.headline}
        subheadline={s.subheadline}
        overviewTitle={s.overviewTitle}
        overviewText={s.overviewText}
        featuresTitle={s.featuresTitle}
        features={s.features}
        specTitle={s.specTitle}
        specs={s.specs}
        faqs={s.faqs}
      />
    </>
  );
}
