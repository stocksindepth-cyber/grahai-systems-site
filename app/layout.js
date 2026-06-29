import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://grahaisystems.com";
const SITE_NAME = "GrahAI Systems";
const SITE_TAGLINE = "Production-Grade AI Systems for Business.";
const SITE_DESCRIPTION =
  "GrahAI Systems builds production-grade AI for business — AI agents, RAG, workflow automation, internal copilots and custom AI SaaS. We bring real operating experience: we also build and run our own AI products (GrahAI, OptionsGyani, AasanKhata, AgencyPitch). Bengaluru-based, building for India and the World.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "GrahAI Systems",
    "GrahAI",
    "AI company India",
    "Indian AI startup",
    "Vedic astrology AI",
    "AI Kundli",
    "AI Jyotish",
    "Bengaluru AI company",
    "Indian language AI",
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
        alt: "GrahAI Systems",
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
  themeColor: "#f8fafc",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "GrahAI Systems",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@grahai.com",
      telephone: "+91-96196-98372",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Vedic Astrology Software",
    "Large Language Models",
    "Production AI Systems",
    "Retrieval-Augmented Generation (RAG)",
    "AI Agent Development",
    "AI Workflow Automation",
    "Custom AI Chatbots",
    "AI Document Processing OCR",
    "AI SaaS Platform Development",
  ],
  brand: [
    { "@type": "Brand", name: "GrahAI", url: "https://grahai.com" },
    { "@type": "Brand", name: "OptionsGyani", url: "https://optionsgyani.com" },
    { "@type": "Brand", name: "AasanKhata", url: "https://aasankhata.in" },
    { "@type": "Brand", name: "AgencyPitch", url: "https://agencypitch.io" },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={SITE_URL} />
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
