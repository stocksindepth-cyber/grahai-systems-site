import { notFound } from "next/navigation";
import SEOLandingTemplate from "../../../components/SEOLandingTemplate";
import { solutions } from "../../../content/solutions";

const SITE_URL = "https://grahaisystems.com";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${SITE_URL}/solutions/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE_URL}/solutions/${s.slug}`,
      type: "website",
      images: [{ url: "/og-solutions.png", width: 1200, height: 630, alt: s.headline }],
    },
    twitter: { card: "summary_large_image", images: ["/og-solutions.png"] },
  };
}

export default function SolutionPage({ params }) {
  const s = solutions.find((x) => x.slug === params.slug);
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
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: s.headline, item: `${SITE_URL}/solutions/${s.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.headline,
    provider: { "@type": "Organization", name: "GrahAI Systems", url: SITE_URL },
    areaServed: "Worldwide",
    description: s.metaDescription,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]) }} />
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
