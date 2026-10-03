// Monthly plans for GrahAI Agents. Billed monthly by payment link (works for
// international cards and INR); a plan stays active for one calendar month per
// payment. Requests made under a plan become ordinary jobs, covered by the plan.

export const plans = [
  {
    id: "care",
    name: "Care plan",
    priceUsd: 79,
    activeLimit: 1,
    requestsPerPeriod: 2,
    tagline: "Keep what we built running",
    pitch: "For anything GrahAI agents delivered for you. We stay on call so it keeps working as your business changes.",
    includes: [
      "Fixes for anything in your original delivery",
      "Up to 2 small change requests a month",
      "Dependency and security updates on request",
      "Priority replies in your plan room",
      "Cancel anytime — no lock-in",
    ],
  },
  {
    id: "retainer",
    name: "Retainer",
    priceUsd: 399,
    activeLimit: 1,
    requestsPerPeriod: null,
    tagline: "An AI dev team on call",
    pitch: "Send as many requests as you like. Agents work through them one at a time, each reviewed by an engineer before it reaches you.",
    includes: [
      "Unlimited requests, one in progress at a time",
      "Most small requests delivered in 1–3 business days",
      "Websites, automations, scripts, bots, integrations, fixes",
      "Engineer review on every delivery",
      "Cancel anytime — no lock-in",
    ],
    featured: true,
  },
  {
    id: "retainer-plus",
    name: "Retainer Plus",
    priceUsd: 799,
    activeLimit: 2,
    requestsPerPeriod: null,
    tagline: "Two requests in flight",
    pitch: "For teams with a steady backlog. Two requests run in parallel and yours go to the front of the queue.",
    includes: [
      "Unlimited requests, two in progress at a time",
      "Priority in the delivery queue",
      "Everything in Retainer",
      "Engineer review on every delivery",
      "Cancel anytime — no lock-in",
    ],
  },
];

export const planById = (id) => plans.find((p) => p.id === id) || null;

// Sizing rule shown to clients and used when scoping plan requests.
export const PLAN_REQUEST_RULE =
  "Each request should be a small, self-contained task — the kind we'd quote $99–$299 as a one-off. Bigger builds are split into steps or quoted as a separate job.";

export const RENEWAL_NOTICE_DAYS = 3;
