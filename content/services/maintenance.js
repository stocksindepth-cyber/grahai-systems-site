// Service landing pages (rendered by components/seo/ServiceLanding.jsx).
// Each entry targets a cluster of buyer searches from the Oct 2026 Keyword Planner study.

export const maintenancePages = [
  {
    slug: "website-maintenance-services",
    category: "fixes",
    eyebrow: "Website maintenance",
    metaTitle: "Website Maintenance Services — Fixes from $99, Plans Monthly",
    metaDescription:
      "Website maintenance services for WordPress, Shopify and custom sites: updates, fixes and small changes. One-off fixes from $99 or a monthly plan. Cancel anytime.",
    keywords: [
      "website maintenance services",
      "wordpress support",
      "wordpress maintenance",
      "website maintenance packages",
      "monthly website maintenance",
      "fix my website",
      "website bug fix",
    ],
    h1: "Website maintenance services",
    h1Accent: "without the agency retainer",
    intro:
      "Keep your site updated, working and changing with your business. Fix one thing for a fixed price from $99, or put maintenance on a monthly plan where you send requests whenever you need them and cancel any time.",
    tiers: [
      {
        name: "One-off fix",
        billing: "one-time",
        priceUsd: 99,
        timeline: "1–3 days",
        forWho: "Something is broken or out of date and you want it sorted once.",
        includes: [
          "A fixed price agreed before any work starts",
          "Plugin, theme or dependency updates with a backup first",
          "One bug, error page or broken form fixed and tested",
          "A short note of what changed and why",
        ],
      },
      {
        name: "Care plan",
        billing: "monthly",
        priceUsd: 79,
        timeline: "Ongoing",
        forWho: "Your site was built by GrahAI agents and you want it kept healthy.",
        includes: [
          "Fixes for anything in the original delivery",
          "Up to 2 small change requests a month",
          "Dependency and security updates on request",
          "Priority replies in your plan room",
        ],
      },
      {
        name: "Retainer",
        billing: "monthly",
        priceUsd: 399,
        timeline: "Ongoing",
        forWho: "Any site, built by anyone, with a steady list of updates and changes.",
        includes: [
          "Unlimited requests, worked one at a time",
          "Most small requests delivered in 1–3 business days",
          "Updates, fixes, new sections, forms and integrations",
          "Engineer review on every delivery",
          "Cancel any time",
        ],
      },
    ],
    tasks: [
      { title: "Update WordPress core, theme and plugins with a full backup first", price: 99, days: 1 },
      { title: "Fix a contact form that stopped sending emails", price: 99, days: 1 },
      { title: "Repair a broken layout after a theme or plugin update", price: 149, days: 2 },
      { title: "Speed up slow pages: image compression, caching and script cleanup", price: 249, days: 3 },
      { title: "Move a site to new hosting with no downtime and working email", price: 349, days: 3 },
      { title: "Add a new service page, update pricing and refresh the homepage copy", price: 199, days: 2 },
    ],
    overviewTitle: "What website maintenance actually covers",
    overview: [
      "Most websites don't fail all at once. A plugin update breaks the checkout, a form quietly stops sending leads, the site gets slower every month, and a page about a service you stopped offering is still ranking. Website maintenance is the ongoing work that catches these things early: keeping software up to date, fixing what breaks, and making the small changes a growing business needs without starting a new project each time.",
      "Agencies usually sell maintenance as a fixed monthly retainer whether you need work that month or not. We split it the way people actually use it. If one thing is wrong, post it as a one-off job and pay a fixed price from $99. If you know there will be a steady stream of updates, a monthly plan is cheaper than paying per job, and you can cancel when the backlog runs out.",
      "Every request is scoped by an AI agent before work starts, so you see exactly what will be done. Agents make the change on a copy or after taking a backup, a GrahAI engineer reviews the result, and the delivery lands in your private room with a note explaining what changed. Two rounds of revisions are included on one-off jobs, and anything we can't deliver as agreed is refunded in full.",
      "We work on WordPress, WooCommerce, Shopify, Webflow and custom sites built with frameworks like React and Next.js. Access is shared through a collaborator or staff account you can remove when the job closes; you never send a password in a message. If a request turns out to be larger than maintenance, such as a full redesign, the agent tells you up front and quotes it as a separate job.",
    ],
    compare: {
      columns: ["GrahAI agents", "Agency retainer", "Freelancer", "Do it yourself"],
      rows: [
        { label: "Price", values: ["$99 per fix, or $79–$399 a month", "Often $100–$2,500 a month", "Hourly, varies widely", "Your time"] },
        { label: "Pay when idle?", values: ["No — one-off jobs or cancel any time", "Usually yes, fixed monthly fee", "Only for hours billed", "No"] },
        { label: "Know the cost first", values: ["Fixed price before work starts", "Within the retainer hours", "Estimate, then hours", "Free, but risky"] },
        { label: "Speed for small fixes", values: ["Most in 1–3 business days", "Depends on the queue", "Depends on availability", "Depends on your skills"] },
        { label: "Quality check", values: ["Engineer review on every delivery", "Varies by agency", "Self-checked", "None"] },
        { label: "If it goes wrong", values: ["Revisions, then a full refund", "Contract terms", "Platform dispute", "You fix it"] },
      ],
    },
    answers: [
      {
        q: "Can I pay someone to fix my website without signing a contract?",
        a: "Yes. Post the problem as a one-off job: describe what's broken, where it happens and what should happen instead. An AI agent replies in about a minute with a fixed price, usually from $99 for a single fix, and work starts only if you accept it. There is no contract or minimum term, and you only pay for that one job.",
      },
      {
        q: "How much does website maintenance cost per month?",
        a: "It depends on how often your site changes. Many agencies charge between $100 and $2,500 a month regardless of how much work they do. With us, a site we built can stay on the Care plan for $79 a month, and any site can use the Retainer at $399 a month for unlimited requests worked one at a time. If you only need occasional fixes, one-off jobs from $99 are cheaper.",
      },
      {
        q: "Do you look after WordPress sites built by someone else?",
        a: "Yes. Most maintenance requests come from sites built by another developer or agency. The agent reviews what you describe, asks for the details it needs, and quotes the work. For ongoing support on a site we didn't build, the Retainer is the right plan, because the Care plan is for sites GrahAI agents delivered.",
      },
    ],
    faqs: [
      {
        q: "What's included in a one-off maintenance job?",
        a: "Whatever the proposal lists, and nothing vague. Typical one-off jobs are core and plugin updates with a backup first, fixing a broken form or page, repairing layout problems after an update, or speeding up slow pages. The proposal states the deliverables, the delivery date and the price before you pay.",
      },
      {
        q: "Will updates break my site?",
        a: "Updates can break things, which is why they're done carefully: a backup is taken first, changes are tested on the pages that matter most, and anything that breaks is rolled back or fixed before delivery. If something we changed causes a problem after delivery, that's covered by your revision rounds.",
      },
      {
        q: "How do you get access to my website?",
        a: "Never by sharing a password in a message. After kickoff we'll ask you to add a collaborator or staff account with the access the job needs, such as a WordPress user, Shopify staff account or hosting collaborator. Remove it when the job is done.",
      },
      {
        q: "Can I cancel a monthly plan?",
        a: "Yes, from your plan room, at any time. The plan stays active until the end of the month you've paid for, anything already in progress is finished, and you won't be charged again. You can restart later and pick up where you left off.",
      },
      {
        q: "Do you handle hacked or malware-infected sites?",
        a: "Describe what you're seeing when you post the job. The agent will tell you whether it's something we can clean up and harden at a fixed price, or whether the site needs a restore from a clean backup or a specialist security service. We won't promise a cleanup we can't verify.",
      },
      {
        q: "Which platforms do you maintain?",
        a: "WordPress and WooCommerce, Shopify, Webflow, and custom sites built with frameworks such as React, Next.js or plain HTML and PHP. If you're on a hosted builder like Wix or Squarespace, the agent will tell you which changes are possible within that platform's limits.",
      },
    ],
    related: ["/hire/wordpress-developer", "/hire/bug-fixing", "/website-redesign-services", "/hire/retainer", "/hire/shopify-developer"],
    plan: "retainer",
  },
];
