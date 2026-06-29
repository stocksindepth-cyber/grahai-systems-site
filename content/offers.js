// Productized AI engagements — fixed scope, fixed timeline, starting price.
// These read like products a CTO can buy, not open-ended "services".
export const offers = [
  {
    id: "support-copilot",
    name: "AI Customer Support Copilot",
    outcome: "Deflect repetitive tickets and answer customers 24/7 — grounded in your own docs, not hallucinations.",
    timeline: "30-day implementation",
    priceFrom: "$6,000",
    accent: "azure",
    includes: [
      "RAG over your help docs, policies & past tickets",
      "Safe tool-use (order status, account lookups)",
      "Human handoff on low confidence or high risk",
      "Analytics: deflection rate, CSAT, gaps to fill",
    ],
    idealFor: "Teams drowning in repetitive support volume.",
    href: "/solutions/customer-support-automation",
  },
  {
    id: "knowledge-assistant",
    name: "AI Internal Knowledge Assistant",
    outcome: "Give your team an internal copilot that answers from your wiki, SOPs and drives — with citations.",
    timeline: "40-day implementation",
    priceFrom: "$9,000",
    accent: "purple",
    includes: [
      "Private RAG over internal knowledge (no data leaves your control)",
      "Role-aware access & permissions",
      "Cited answers your staff can trust",
      "Slack / web / internal-tool integration",
    ],
    idealFor: "Companies where staff waste hours hunting for answers.",
    href: "/solutions/internal-knowledge-chatbot",
  },
  {
    id: "doc-processing",
    name: "AI Document Processing Platform",
    outcome: "Turn invoices, forms and contracts into structured, validated data — automatically.",
    timeline: "45-day implementation",
    priceFrom: "$15,000",
    accent: "emerald",
    includes: [
      "Vision + LLM extraction for messy real-world documents",
      "Validation, fraud / duplicate checks, human review queue",
      "Two-way sync to your ERP / accounting / DB",
      "Throughput dashboards & audit trail",
    ],
    idealFor: "Operations processing thousands of documents by hand.",
    href: "/solutions/invoice-automation",
  },
];

// Anything outside the productized lanes — full custom production AI.
export const customOffer = {
  name: "Custom Production AI System",
  outcome: "Agents, automations or a full AI SaaS, scoped to your problem and built to run under real load.",
  timeline: "Scoped after a discovery call",
  priceFrom: "Project-based",
  href: "/solutions/enterprise-ai-agent-development",
};
