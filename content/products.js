// Canonical product catalogue for GrahAI Systems.
// Single source of truth shared by the homepage, hero showcase, footer and schema.
// Tailwind needs full static class strings (no dynamic interpolation) so each
// product carries its own pre-built accent classes.

export const products = [
  {
    id: "grahai",
    name: "GrahAI",
    domain: "grahai.com",
    url: "https://www.grahai.com",
    tagline: "AI Vedic astrology for India and the World",
    badge: "Flagship",
    blurb:
      "A multilingual Vedic astrology platform — instant Kundli blueprints, daily Panchang, and a conversational AI Jyotish that answers life questions in your own language.",
    features: [
      "AI Jyotish chat, grounded in real charts",
      "English, Hindi, Tamil & Telugu",
      "Instant Kundli + daily Panchang",
    ],
    accent: {
      text: "text-azure-600",
      hoverText: "group-hover:text-azure-600",
      hoverBorder: "hover:border-azure-500/30",
      dot: "bg-azure-500",
      glow: "bg-azure-500/10",
      chipBg: "bg-azure-50",
      chipBorder: "border-azure-100",
      ring: "ring-azure-500/40",
    },
  },
  {
    id: "applyvita",
    name: "ApplyVita",
    domain: "applyvita.com",
    url: "https://applyvita.com",
    tagline: "AI résumé builder that beats ATS and lands interviews",
    badge: "Career AI",
    blurb:
      "An AI-powered résumé and career platform that optimises CVs for ATS systems, tailors applications to job descriptions, and helps job seekers in India and globally get past the first filter.",
    features: [
      "ATS-optimised résumé builder",
      "Job-description tailoring & gap analysis",
      "India & global formats supported",
    ],
    accent: {
      text: "text-violet-600",
      hoverText: "group-hover:text-violet-600",
      hoverBorder: "hover:border-violet-500/30",
      dot: "bg-violet-500",
      glow: "bg-violet-500/10",
      chipBg: "bg-violet-50",
      chipBorder: "border-violet-100",
      ring: "ring-violet-500/40",
    },
  },
];
