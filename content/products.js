// Canonical product catalogue for GrahAI Systems.
// Single source of truth shared by the homepage, hero showcase, footer and schema.
// Tailwind needs full static class strings (no dynamic interpolation) so each
// product carries its own pre-built accent classes.

export const products = [
  {
    id: "grahai",
    name: "GrahAI",
    domain: "grahai.com",
    // Clean www URL on purpose (2026-08-07): the old form was
    // apex + ?utm_source. The apex 308s to www (a wasted redirect hop on the
    // only followed link this domain sends), and the utm param mints yet
    // another parameterized duplicate of grahai.com's homepage. This footer
    // link renders on EVERY page of grahaisystems.com, so it is the single
    // most repeated external link we control — keep it canonical.
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
    id: "optionsgyani",
    name: "OptionsGyani",
    domain: "optionsgyani.com",
    url: "https://optionsgyani.com?utm_source=grahaisystems.com",
    badge: "Trading Practice",
    tagline: "Practice options trading without risking a rupee",
    blurb:
      "A simulation-first options playground — a live-style option chain, paper trading, and strategy backtests so traders can build an edge before they ever put real money on the line.",
    features: [
      "Realistic option chain & Greeks",
      "Paper trading + strategy backtests",
      "Deep broker & strategy guides",
    ],
    accent: {
      text: "text-emerald-600",
      hoverText: "group-hover:text-emerald-600",
      hoverBorder: "hover:border-emerald-500/30",
      dot: "bg-emerald-500",
      glow: "bg-emerald-500/10",
      chipBg: "bg-emerald-50",
      chipBorder: "border-emerald-100",
      ring: "ring-emerald-500/40",
    },
  },
  {
    id: "aasankhata",
    name: "AasanKhata",
    domain: "aasankhata.in",
    url: "https://aasankhata.in?utm_source=grahaisystems.com",
    badge: "Accounting",
    tagline: "Accounting on autopilot for Indian SMBs",
    blurb:
      "Turn messy invoices, bills and transaction logs into clean, audited ledgers automatically — so small businesses spend minutes on books instead of evenings.",
    features: [
      "Invoices & receipts → clean ledger",
      "High-volume auditing & validation",
      "Tally / ERP-ready exports",
    ],
    accent: {
      text: "text-amber-600",
      hoverText: "group-hover:text-amber-600",
      hoverBorder: "hover:border-amber-500/30",
      dot: "bg-amber-500",
      glow: "bg-amber-500/10",
      chipBg: "bg-amber-50",
      chipBorder: "border-amber-100",
      ring: "ring-amber-500/40",
    },
  },
  {
    id: "agencypitch",
    name: "AgencyPitch",
    domain: "agencypitch.io",
    url: "https://agencypitch.io?utm_source=grahaisystems.com",
    badge: "Proposal SaaS",
    tagline: "Win agency clients faster",
    blurb:
      "Proposal generation and client-acquisition automation for B2B agencies — pitch, scope, and close contracts in a fraction of the time, with analytics on every send.",
    features: [
      "AI-assisted proposal builder",
      "Client engagement analytics",
      "Seamless e-sign & close",
    ],
    accent: {
      text: "text-purple-600",
      hoverText: "group-hover:text-purple-600",
      hoverBorder: "hover:border-purple-500/30",
      dot: "bg-purple-500",
      glow: "bg-purple-500/10",
      chipBg: "bg-purple-50",
      chipBorder: "border-purple-100",
      ring: "ring-purple-500/40",
    },
  },
];
