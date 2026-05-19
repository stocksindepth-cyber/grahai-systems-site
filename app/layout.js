import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://grahaisystems.com";
const SITE_NAME = "GrahAI Systems";
const SITE_TAGLINE =
  "AI-first product studio building practical software for India.";
const SITE_DESCRIPTION =
  "GrahAI Systems is an Indian AI software company building category-leading consumer and SMB products — GrahAI (Vedic astrology AI), AasanKhata (GST invoicing), and AgencyPitch (AI proposals for agencies). Practical AI, made in India, used worldwide.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "GrahAI Systems",
    "AI company India",
    "AI product studio",
    "Indian AI startup",
    "GrahAI",
    "AasanKhata",
    "AgencyPitch",
    "Vedic astrology AI",
    "GST invoicing software",
    "AI proposal generator",
    "Bengaluru AI startup",
    "AI SaaS India",
    "practical AI",
  ],
  authors: [{ name: "GrahAI Systems", url: SITE_URL }],
  creator: "GrahAI Systems",
  publisher: "GrahAI Systems",
  category: "Technology",
  applicationName: SITE_NAME,
  generator: "Next.js",
  formatDetection: { email: false, telephone: false, address: false },
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": SITE_URL, "en-US": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/logo-square.png",
        width: 1024,
        height: 1024,
        alt: "GrahAI Systems — AI product studio (logo)",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/logo-square.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD: Organization + WebSite — discoverable by SEO + AEO crawlers
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "GrahAI Systems",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2024",
  founders: [{ "@type": "Person", name: "Rahul Dubey" }],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/stocksindepth-cyber",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@grahaisystems.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Vedic Astrology Software",
    "GST Invoicing",
    "SaaS",
    "AI for Indian Businesses",
    "AI Proposals",
    "AI Product Development",
  ],
  brand: [
    { "@type": "Brand", name: "GrahAI", url: "https://www.grahai.com" },
    { "@type": "Brand", name: "AasanKhata", url: "https://aasankhata.com" },
    { "@type": "Brand", name: "AgencyPitch", url: "https://agencypitch.com" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={query}`,
    "query-input": "required name=query",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="canonical" href={SITE_URL} />
        {/* Structured data — Organization + WebSite (graph node for AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [orgSchema, websiteSchema],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
