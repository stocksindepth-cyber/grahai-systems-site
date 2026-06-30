import { solutions } from "../../content/solutions";
import { caseStudies } from "../../content/caseStudies";
import { allPosts } from "../../content/allPosts";
import { industries } from "../../content/industries";
import { comparisons } from "../../content/comparisons";
import { allFaqs } from "../../content/faqs";

const SITE_URL = "https://grahaisystems.com";

// llms.txt — a discovery file for AI answer engines (ChatGPT, Perplexity,
// Claude, Gemini). Generated from the same content as the site so it never
// drifts. Served at /llms.txt.
export function GET() {
  const line = (label, path, desc) => `- [${label}](${SITE_URL}${path})${desc ? `: ${desc}` : ""}`;

  const body = `# GrahAI Systems

> GrahAI Systems is a production-grade AI software studio based in Bengaluru, India, building for India and the World. We design, build, and OPERATE our own AI products — and bring that same production discipline to client builds: AI agents, RAG systems, workflow automation, internal copilots, and custom AI SaaS.

What makes us different: we don't just consult on AI, we run four AI products in production. That operating experience — latency, cost, evals, payments, reliability — is what we bring to every engagement.

An engineer-led studio with 11+ years of production software experience.
Contact: support@grahai.com

## Productized engagements
- AI Customer Support Copilot — 30-day implementation, from $6,000
- AI Internal Knowledge Assistant — 40-day implementation, from $9,000
- AI Document Processing Platform — 45-day implementation, from $15,000
- Custom Production AI System — scoped per project

## Our products (proof we ship & operate)
- [GrahAI](https://grahai.com): multilingual AI Vedic astrology platform (9 languages, RAG-grounded chat)
- [OptionsGyani](https://optionsgyani.com): NSE options analytics & backtesting on a self-built simulation engine
- [AasanKhata](https://aasankhata.in): GST invoicing & accounting for Indian SMBs with document AI
- [AgencyPitch](https://agencypitch.io): AI proposal generation for B2B agencies

## Case studies (engineering deep-dives)
${caseStudies.map((c) => line(c.title, `/case-studies/${c.slug}`, c.summary)).join("\n")}

## AI solutions (by capability & use case)
${solutions.map((s) => line(`${s.headline} ${s.keywordAccent}`.trim(), `/solutions/${s.slug}`, s.metaDescription)).join("\n")}

## AI by industry
${industries.map((s) => line(`AI for ${s.industry}`, `/industries/${s.slug}`, s.metaDescription)).join("\n")}

## Buying guides & comparisons
${comparisons.map((s) => line(`${s.headline} ${s.keywordAccent}`.trim(), `/compare/${s.slug}`, s.metaDescription)).join("\n")}

## Engineering writing
${allPosts.slice(0, 10).map((p) => line(p.title, `/blog/${p.slug}`, p.excerpt)).join("\n")}

## Frequently asked questions
${allFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Reference
- [AI development FAQ](${SITE_URL}/faq): cost, timelines, process, security
- [AI glossary](${SITE_URL}/glossary): plain-English definitions of agents, RAG, evals and more
- [About GrahAI Systems](${SITE_URL}/about): the studio that operates its own AI products

## Contact
- Book a discovery call or send a proposal: support@grahai.com
- Website: ${SITE_URL}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
