// "Launch your AI business" productized offer for grahaisystems.com /launch.
// We sell a business-launch system, not software development. Prices are USD and
// authoritative server-side (see app/api/launch-checkout); Indian buyers are
// charged the INR equivalent. Care plans are shown as add-ons (invoiced manually
// for now — no recurring billing wired yet).

export const launchTiers = [
  {
    id: "launch",
    name: "Launch",
    priceUsd: 999,
    priceUsdDisplay: "$999",
    tagline: "Get a real AI product live on your own domain.",
    supportDays: 30,
    highlight: false,
    includes: [
      "Custom domain setup + SSL",
      "Production-ready web application",
      "One AI feature where it adds real value",
      "Conversion analytics + Clarity heatmaps",
      "SEO-ready pages (metadata, sitemap, schema)",
      "Contact form + lead capture",
      "Hosting & deployment (we ship it live)",
      "Handover docs",
      "30 days of support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceUsd: 1999,
    priceUsdDisplay: "$1,999",
    tagline: "A business you can operate, not just a website.",
    supportDays: 60,
    highlight: true,
    includes: [
      "Everything in Launch",
      "Admin dashboard to run the business",
      "CRM / lead pipeline built in",
      "Email automation (welcome, nurture, receipts)",
      "User accounts + authentication",
      "Payments / checkout wired in",
      "Blog / CMS for content & SEO",
      "60 days of support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceUsd: 4999,
    priceUsdDisplay: "$4,999",
    tagline: "A production AI business with the hard parts solved.",
    supportDays: 90,
    highlight: false,
    includes: [
      "Everything in Growth",
      "Custom, multi-step AI features (agents / RAG)",
      "Third-party integrations (your tools, APIs)",
      "Advanced analytics + conversion funnels",
      "Role-based access + team accounts",
      "Reports & billing modules",
      "Performance & cost tuning",
      "90 days of priority support",
    ],
  },
];

// Optional recurring care — displayed as add-ons, invoiced manually for now.
export const carePlans = [
  {
    id: "care-basic",
    name: "Basic Care",
    priceUsdDisplay: "$99/mo",
    for: "Keep the lights on.",
    includes: ["Hosting & uptime monitoring", "Security patches & dependency updates", "Backups", "Email support"],
  },
  {
    id: "care-growth",
    name: "Growth Care",
    priceUsdDisplay: "$199/mo",
    for: "Keep improving.",
    includes: ["Everything in Basic", "Content & SEO updates", "Minor changes & fixes each month", "Analytics review"],
  },
  {
    id: "care-pro",
    name: "Pro Care",
    priceUsdDisplay: "$299/mo",
    for: "Keep winning.",
    includes: ["Everything in Growth", "Priority support", "Monthly AI improvements", "Conversion-rate optimisation"],
  },
];

// The 7-day path from idea to a live, revenue-ready business.
export const launchTimeline = [
  { day: "Day 1", title: "Scope & blueprint", desc: "We lock the outcome, the pages, the AI feature and the domain — no endless discovery." },
  { day: "Day 2–3", title: "Assemble the core", desc: "We configure and brand our production modules — auth, payments, admin, CMS — instead of building from scratch." },
  { day: "Day 4–5", title: "AI + branding", desc: "Your AI feature is wired in where it earns its keep, and the whole app is skinned to your brand." },
  { day: "Day 6", title: "Analytics, SEO & QA", desc: "Conversion tracking, Clarity, SEO pages and a full quality pass so it's ready for real traffic." },
  { day: "Day 7", title: "Go live", desc: "We deploy to your domain, hand over the docs and logins, and your business is open." },
];

// The reusable "software factory" — why we can deliver in 7 days at this price.
export const factoryModules = [
  "Authentication", "Payments", "AI chat", "Admin panel", "CRM", "Blog / CMS",
  "Analytics", "Email automation", "User management", "File uploads", "Reports", "Billing",
];

export const launchFaqs = [
  { q: "What exactly do I get for $999?", a: "A real, production-ready web application on your own domain — not a template. It includes one AI feature, conversion analytics, SEO-ready pages, lead capture, hosting and deployment, handover docs, and 30 days of support. Higher tiers add an admin dashboard, CRM, payments, authentication and custom AI." },
  { q: "How can you deliver a business in 7 days?", a: "We don't build every app from scratch. We run a software factory of production-tested modules — auth, payments, admin, CRM, analytics, AI — so most of each project is configuration and branding, not new engineering. That is what makes a 7-day, fixed-price launch possible." },
  { q: "Is this a template or custom code?", a: "It's your own application, deployed to your domain, that you own — assembled from battle-tested modules and branded and configured for your business. It is not a shared template site." },
  { q: "Do you really offer lifetime maintenance?", a: "We offer optional Care plans ($99–$299/month) so your app stays hosted, patched and improving. A one-time build with 30–90 days of included support keeps things clean; ongoing care is a simple monthly add-on rather than an open-ended promise." },
  { q: "What if I need something outside these tiers?", a: "Use the instant scoping tool at /start and we'll price a custom build. Many businesses start with a Launch or Growth package and expand once it's earning." },
  { q: "How do payments and pricing work internationally?", a: "Prices are in USD and we serve India and the World. Indian customers are billed the equivalent in INR. Payment is secure and hosted — you pay to book, and we start the 7-day clock." },
  { q: "Who owns the code and the domain?", a: "You do. The domain is registered to you and you receive the application and its logins at handover. No lock-in." },
  { q: "How do I get started?", a: "Pick a tier below and book it, or scope a custom build at /start. We confirm the blueprint and begin day one." },
];
