import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "Claude AI Development Company | Anthropic Integration | Grah AI",
  description:
    "Design and build reasoning workflows and custom chatbots using Anthropic Claude 3.5 Sonnet and Haiku. Senior AI engineers at Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Reasoning-First",
    keywordAccent: "Claude AI Integration",
    subheadline:
      "Deploy Anthropic's state-of-the-art Claude 3.5 model family. We build custom applications that excel at complex coding, structured JSON logic, and nuanced analysis.",
    overviewTitle: "Claude AI Integration & Optimization",
    overviewText: [
      "Anthropic's Claude models have established themselves as the industry benchmark for complex reasoning, code generation, and structured data outputting. Their strict adherence to system prompts makes them ideal for building autonomous agent systems.",
      "As expert Claude integration developers, we leverage the Messages API and prompt caching to build fast, robust pipelines. We optimize long-context system prompts using XML formatting (Anthropic's recommended standard) to achieve near-perfect instruction compliance.",
      "Grah AI Systems develops custom RAG platforms and developer automation tools powered by Claude 3.5 Sonnet and Haiku.",
    ],
    featuresTitle: "Claude Workflows We Deliver",
    features: [
      {
        name: "Structured JSON Parsing",
        desc: "Utilize Claude's exceptional schema compliance to output clean JSON payloads for system automation.",
      },
      {
        name: "Long System Prompt Audits",
        desc: "Configure extensive, 50k+ token system instructions using XML formatting to guide the model's tone and rules.",
      },
      {
        name: "Autonomous Coding Agents",
        desc: "Build tools that review code repositories, identify logic bugs, refactor code, and submit pull requests.",
      },
      {
        name: "Nuanced Document Analysis",
        desc: "Analyze lease contracts, financial reports, or legal transcripts, extracting key terms and cross-checks.",
      },
      {
        name: "Claude Prompt Caching",
        desc: "Cache large system instructions or documents directly on Anthropic's servers, reducing API costs by up to 90%.",
      },
      {
        name: "Secure Claude VPC Deployments",
        desc: "Deploy Claude models securely inside your private cloud using AWS Bedrock or Google Cloud Vertex AI integrations.",
      },
    ],
    specTitle: "Claude Technical Specifications",
    specs: [
      { name: "Primary Models Integrated", val: "Claude 3.5 Sonnet, Claude 3 Opus, Claude 3.5 Haiku" },
      { name: "APIs & Services Utilized", val: "Anthropic Messages API, AWS Bedrock, Google Vertex AI" },
      { name: "Context Optimization", val: "XML tag structuring, prompt caching, system prompt splitting" },
      { name: "JSON Mode Reliability", val: "Exceptional (using strict JSON schema system parameters)" },
    ],
    faqs: [
      {
        q: "Why should we choose Claude over other AI models?",
        a: "Claude 3.5 Sonnet is currently the industry leader in coding, reasoning, and JSON formatting. If your application requires the model to write code, parse complex legal language, or return strict JSON data to trigger backend APIs, Claude is highly recommended.",
      },
      {
        q: "What is Anthropic Prompt Caching and how does it save money?",
        a: "If you send a large document or a long system prompt (e.g. 20,000 tokens) on every chat turn, it gets expensive. Prompt caching allows the Anthropic server to keep that text in its RAM. Subsequent turns reference the cached text at a 90% discount, significantly reducing API billing.",
      },
      {
        q: "Is it possible to host Claude on our private AWS servers?",
        a: "Yes. Through AWS Bedrock, we can provision Claude model endpoints within your company's secure AWS Virtual Private Cloud (VPC), satisfying strict enterprise data compliance requirements.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
