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
    // www is the canonical host — the apex 308s, and pointing our own company
    // site at the redirect wastes the one link we fully control.
    url: "https://www.applyvita.com",
    tagline: "AI career agent for résumés, applications and interviews",
    badge: "Career AI",
    blurb:
      "An AI career agent that scores a résumé on the real ATS rubric, rewrites the weak lines, tailors it to any job description, runs mock interviews and tracks every application. Free ATS check with no signup, and one-time pricing — no subscription.",
    features: [
      "Free ATS score — no signup, no card",
      "One-time pricing, nothing auto-renews",
      "Naukri, sarkari & global formats",
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
