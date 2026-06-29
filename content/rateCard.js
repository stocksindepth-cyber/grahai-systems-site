// Grounding + guardrails for the AI Solutions Architect (/start).
// The model is told these lanes so its quote stays in a credible band, and the
// SERVER re-clamps every number to these bounds so a prompt-injected or
// hallucinated quote can never produce an absurd price or timeline.
// All prices are in USD; geo conversion to INR happens at request time.

export const lanes = [
  { id: "support-copilot", name: "AI Customer Support Copilot", min: 6000, max: 15000, typical: 6000, weeksMin: 4, weeksMax: 7 },
  { id: "knowledge-assistant", name: "AI Internal Knowledge Assistant", min: 9000, max: 22000, typical: 9000, weeksMin: 5, weeksMax: 8 },
  { id: "doc-processing", name: "AI Document Processing Platform", min: 15000, max: 45000, typical: 15000, weeksMin: 6, weeksMax: 10 },
  { id: "ai-agent", name: "Custom AI Agent System", min: 8000, max: 50000, typical: 14000, weeksMin: 5, weeksMax: 12 },
  { id: "rag-system", name: "RAG / Private Knowledge System", min: 8000, max: 40000, typical: 12000, weeksMin: 5, weeksMax: 11 },
  { id: "workflow-automation", name: "AI Workflow Automation", min: 5000, max: 30000, typical: 8000, weeksMin: 4, weeksMax: 10 },
  { id: "custom-saas", name: "Custom Production AI SaaS", min: 15000, max: 90000, typical: 24000, weeksMin: 6, weeksMax: 16 },
];

// Hard global bounds the server enforces no matter what the model returns.
export const PRICE_FLOOR_USD = 4000;
export const PRICE_CEIL_USD = 120000;
export const WEEKS_FLOOR = 3;
export const WEEKS_CEIL = 20;

// Below this the customer pays the starting price in full; above it they pay a
// booking deposit (credited to the project).
export const FULL_PAYMENT_MAX_USD = 9000;

// Booking deposit = 10% of the project, clamped to a card-friendly band.
export const DEPOSIT_PCT = 0.1;
export const DEPOSIT_MIN_USD = 199;
export const DEPOSIT_MAX_USD = 999;

// USD → INR for Indian visitors (kept conservative; round to nice numbers after).
export const USD_TO_INR = 86;

// Compact grounding string handed to the model.
export const rateCardForPrompt = lanes
  .map((l) => `- ${l.name}: $${l.min.toLocaleString()}–$${l.max.toLocaleString()}, ${l.weeksMin}–${l.weeksMax} weeks`)
  .join("\n");
