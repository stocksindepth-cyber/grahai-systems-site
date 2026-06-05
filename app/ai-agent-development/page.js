import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "AI Agent Development Services | Autonomous Systems | Grah AI",
  description:
    "Design and build autonomous AI agents that plan, reason, and execute workflows using custom tools. Specialist AI engineers at Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Autonomous",
    keywordAccent: "AI Agent Development",
    subheadline:
      "We design and build production-grade autonomous AI agents that can reason, plan, use external APIs, and execute complex business tasks with minimal human oversight.",
    overviewTitle: "What are Autonomous AI Agents?",
    overviewText: [
      "Traditional automation executes pre-programmed recipes. If something unexpected happens, the recipe breaks. AI agents represent a new standard. An agent is given a high-level objective (e.g., 'resolve unpaid customer balances') and is equipped with a toolbox of API integrations (email, ledger, chat).",
      "Using iterative loops, the agent inspects the workspace, retrieves relevant data, makes decisions on what actions to take, and verifies the outcome. This reasoning loop lets AI manage complex, fluid business bottlenecks.",
      "At Grah AI Systems, we build secure, sandboxed AI agents that integrate directly into your CRM, database, and messaging channels to replace hours of daily manual work.",
    ],
    featuresTitle: "Agentic Capabilities We Deploy",
    features: [
      {
        name: "Support & Success Agents",
        desc: "Interact with customers, access tracking databases, verify credentials, and resolve delivery disputes autonomously.",
      },
      {
        name: "Research & Mining Agents",
        desc: "Browse directories, parse websites, read financial reports, and extract lead information into structured spreadsheets.",
      },
      {
        name: "B2B Sales Outreach Agents",
        desc: "Identify ideal client profiles, draft highly personalized pitches based on recipient articles, and schedule discovery calls.",
      },
      {
        name: "Recruiting Screening Agents",
        desc: "Analyze applicant resumes against technical rubrics, generate personalized screening prompts, and invite top fits.",
      },
      {
        name: "Data Verification Agents",
        desc: "Periodically audit databases, compare fields against authoritative external sources, and correct mismatch entries.",
      },
      {
        name: "Automated Reporting Agents",
        desc: "Synthesize data from multiple pipelines and compile formatted PDF summaries for stakeholders on a recurring schedule.",
      },
    ],
    specTitle: "Technical Agent Specifications",
    specs: [
      { name: "Core Reasoning LLMs", val: "Claude 3.5 Sonnet, OpenAI GPT-4o, Custom fine-tuned Llama 3" },
      { name: "Integration Protocols", val: "REST APIs, GraphQL, Webhooks, gRPC gateways" },
      { name: "Safety & Guardrails", val: "Prompt-injection firewalls, LLM sandbox environments, strict rate limit buffers" },
      { name: "Telemetry & Logs", val: "Full run tracing, token consumption logging, human auditing dashboards" },
    ],
    faqs: [
      {
        q: "What is the difference between a chatbot and an AI agent?",
        a: "A chatbot is conversational and reactive — it replies to user questions based on data it has. An AI agent is proactive and goal-driven — it is given an objective, plans a series of steps, uses tools (like writing data to an ERP or sending emails), and verifies if its goal is achieved without needing manual prompt guidance for every step.",
      },
      {
        q: "How do you prevent an AI agent from making mistakes?",
        a: "We implement multi-layered safety guardrails. First, we restrict the agent's tool access to sandbox environments or read-only APIs for testing. Second, we integrate Human-in-the-Loop (HITL) gateways for critical actions like issuing refunds or submitting tax forms. Third, we install deterministic validation filters on the AI's output before it is executed.",
      },
      {
        q: "How long does it take to deploy a custom AI agent?",
        a: "Standard agent pilots are designed and deployed to staging environments within 4 to 6 weeks. Enterprise systems requiring complex custom tool integrations and legacy database links are delivered in 8 to 12 weeks.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
