// Rate card + taxonomy for the hire-an-AI-agent marketplace (/hire).
// The proposal agent is grounded on these bands, and the SERVER re-clamps every
// number to them, so a prompt-injected or hallucinated proposal can never
// produce a price below the floor or an absurd timeline.

export const MIN_PRICE_USD = 99;
export const MAX_PRICE_USD = 4999;
export const MIN_DAYS = 1;
export const MAX_DAYS = 30;
export const REVISION_ROUNDS = 2;
export const USD_TO_INR = 86;

// Proposals snap to clean price points.
export const PRICE_LADDER = [
  99, 149, 199, 249, 299, 349, 399, 499, 599, 699, 799, 999, 1299, 1499, 1999, 2499, 2999, 3499, 3999, 4999,
];

export const categories = [
  { id: "web", name: "Websites & web apps", agent: "Web Build Agent", hint: "Landing pages, business sites, dashboards, React/Next.js apps, WordPress, Webflow" },
  { id: "ecommerce", name: "Shopify & e-commerce", agent: "Commerce Agent", hint: "Shopify themes and apps, WooCommerce, checkout and payment fixes, product feeds" },
  { id: "ai", name: "AI chatbots & agents", agent: "AI Engineering Agent", hint: "Chatbots on your docs, AI agents, AI API integrations, WhatsApp/Telegram bots" },
  { id: "automation", name: "Automation & integrations", agent: "Automation Agent", hint: "n8n, Zapier, Make, Google Apps Script, API-to-API syncs, webhooks" },
  { id: "data", name: "Data, scraping & spreadsheets", agent: "Data Agent", hint: "Web scraping, Python scripts, Excel/Sheets automation, SQL, dashboards, PDF extraction" },
  { id: "mobile", name: "Mobile apps", agent: "Mobile Build Agent", hint: "Flutter and React Native apps, app fixes, store-ready builds" },
  { id: "fixes", name: "Bug fixes & maintenance", agent: "Maintenance Agent", hint: "Fix a broken site or script, speed up pages, upgrade dependencies, migrate hosting" },
  { id: "other", name: "Other software work", agent: "Solutions Agent", hint: "Chrome extensions, APIs, MVPs and anything else that is code" },
];

export const budgets = [
  { id: "99-249", label: "$99 – $249" },
  { id: "250-499", label: "$250 – $499" },
  { id: "500-999", label: "$500 – $999" },
  { id: "1000-2499", label: "$1,000 – $2,499" },
  { id: "2500+", label: "$2,500+" },
  { id: "unsure", label: "Not sure — tell me" },
];

export const timelines = [
  { id: "asap", label: "As soon as possible" },
  { id: "week", label: "Within a week" },
  { id: "2weeks", label: "Within 2 weeks" },
  { id: "flexible", label: "Flexible" },
];

export const categoryById = (id) => categories.find((c) => c.id === id) || categories[categories.length - 1];

// Shared grounding handed to the proposal + chat agents.
export const rateCardForAgents = `PRICING BANDS (fixed price for the whole job, USD):
- Small task — one script, one fix, one page, one simple automation, one data pull: $99–$299, 1–3 days
- Medium job — multi-page site, 2–3 tool integration, bot with a few flows, a dashboard, a scraper with scheduling: $299–$999, 3–7 days
- Large job — web app MVP, AI agent with tools, multi-system automation, mobile app: $999–$4,999, 7–30 days
- Anything that honestly needs more than $4,999 is a custom project, not a marketplace job.
Hard floor: $99. Revisions: ${REVISION_ROUNDS} rounds included.
ALLOWED PRICE POINTS — every price you state or return must be exactly one of: ${PRICE_LADDER.map((p) => `$${p.toLocaleString("en-US")}`).join(", ")}.`;
