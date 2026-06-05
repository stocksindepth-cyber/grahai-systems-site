import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "Enterprise AI Solutions | Transformation & Consulting | Grah AI",
  description:
    "Accelerate operations, build custom models, and deploy secure AI architectures with our enterprise-grade consulting services. Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Enterprise-Grade",
    keywordAccent: "AI Solutions & Consulting",
    subheadline:
      "We partner with businesses to audit processes, design custom AI architecture blueprints, fine-tune models, and deploy secure, scalable systems under strict SLA support.",
    overviewTitle: "Enterprise AI Transformation",
    overviewText: [
      "Integrating AI into an enterprise is not just about writing prompt templates. It requires designing scalable database architecture, ensuring SOC2 compliance, optimizing API latency, managing GPU costs, and training internal teams.",
      "Grah AI Systems provides end-to-end consulting and implementation services. We start by auditing your current operational bottlenecks, design a technical blueprint, build custom integrations, and provide long-term maintenance.",
      "Our background as product founders means we build systems that are optimized for real-world traffic, security, and measurable ROI.",
    ],
    featuresTitle: "Enterprise Services We Provide",
    features: [
      {
        name: "Systems Discovery Audit",
        desc: "We analyze your company's workflows, locate manual bottlenecks, and compile a technical AI implementation roadmap.",
      },
      {
        name: "Custom Model Fine-Tuning",
        desc: "Fine-tune open-source models (like Llama 3) on your proprietary datasets to achieve specialized domain knowledge.",
      },
      {
        name: "SOC2 Compliance & Guardrails",
        desc: "Deploy firewalls that detect prompt-injection attacks, mask customer PII, and audit LLM inputs/outputs.",
      },
      {
        name: "Dedicated Engineering Support",
        desc: "Get priority engineering SLAs and a dedicated Slack channel to resolve critical bugs and maintain API uptime.",
      },
      {
        name: "GPU & Cost Optimization",
        desc: "Implement semantic caching and model routing protocols to reduce monthly API token costs by 40% to 60%.",
      },
      {
        name: "Team Enablement & Training",
        desc: "Conduct workshops and draft technical guides to enable your in-house developers to build on top of our AI pipelines.",
      },
    ],
    specTitle: "Enterprise Integration Specs",
    specs: [
      { name: "Compliance Guardrails", val: "PII masking, Prompt-injection firewalls, Audit log databases" },
      { name: "Model Customization", val: "LoRA fine-tuning, retrieval-augmented generation (RAG), custom system prompts" },
      { name: "Hosting Deployments", val: "Private VPC (AWS/GCP), secure cloud functions, on-premise containers" },
      { name: "Ongoing Maintenance", val: "24/7 SLA uptime monitoring, dedicated engineering team, quarterly audits" },
    ],
    faqs: [
      {
        q: "How do you ensure our proprietary business data remains private?",
        a: "We set up secure enterprise API connections with providers like OpenAI and Google that legally guarantee your data is not stored or used for model training. For high-security environments, we deploy open-source models (like Llama) inside your company's private cloud (VPC), ensuring data never leaves your servers.",
      },
      {
        q: "What is included in the Systems Discovery Audit?",
        a: "Our team spends 1-2 weeks reviewing your internal operations, shadowing team workflows, and inspecting data schemas. We then deliver a detailed blueprint document mapping out proposed AI integrations, expected build times, API costs, and measurable ROI targets.",
      },
      {
        q: "Do you offer post-deployment support?",
        a: "Yes. We provide ongoing maintenance contracts with guaranteed SLA response times. This includes system monitoring, security patches, model endpoint updates, and monthly engineering check-ins to optimize token usage.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
