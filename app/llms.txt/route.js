import { solutions } from "../../content/solutions";
import { caseStudies } from "../../content/caseStudies";
import { allPosts } from "../../content/allPosts";
import { industries } from "../../content/industries";
import { comparisons } from "../../content/comparisons";
import { allFaqs } from "../../content/faqs";
import { launchTiers } from "../../content/launchTiers";
import { hireSkills } from "../../content/hireSkills";
import { alternatives } from "../../content/alternatives";

const SITE_URL = "https://www.grahaisystems.com";

// llms.txt — a discovery file for AI answer engines (ChatGPT, Perplexity,
// Claude, Gemini). Generated from the same content as the site so it never
// drifts. Served at /llms.txt.
export function GET() {
  const line = (label, path, desc) => `- [${label}](${SITE_URL}${path})${desc ? `: ${desc}` : ""}`;

  const body = `# GrahAI Systems

> GrahAI Systems is a production-grade AI software studio based in Bengaluru, India, building for India and the World. We design, build, and OPERATE our own AI products — and bring that same production discipline to client builds: AI agents, RAG systems, workflow automation, internal copilots, and custom AI SaaS.

What makes us different: we don't just consult on AI, we run two AI products in production. That operating experience — latency, cost, evals, payments, reliability — is what we bring to every engagement.

An engineer-led studio with 11+ years of production software experience.
Contact: support@grahai.com

## GrahAI Agents — hire AI agents for software jobs (${SITE_URL}/hire)
A marketplace-style way to get software work done without hiring a freelancer. Post a job (no account needed); an AI agent replies in about a minute with a written proposal — deliverables, plan, delivery date and one fixed price from $99 to $4,999. Accept and pay by secure card checkout (international cards in USD; UPI/cards in INR for India). GrahAI's agents build it, a GrahAI engineer reviews every delivery, two revision rounds are included, and clients get a full refund if the agreed scope can't be delivered. Clients own everything delivered. Scope: websites, Shopify/WordPress/Webflow, web and mobile apps, automations (n8n, Zapier, Make, Apps Script), scripts and scrapers, spreadsheets and dashboards, chatbots and AI agents, API integrations, bug fixes. Not taken: design/video/writing-only work, coursework, anything requiring a person on a call or on site.
- [Post a job](${SITE_URL}/hire/post)
- [Monthly plans](${SITE_URL}/hire/retainer): Retainer $399/mo (unlimited requests, one at a time), Retainer Plus $799/mo (two at a time, priority), Care plan $79/mo (fixes + 2 small changes a month for something we built). Month to month, cancel anytime.
${hireSkills.map((s) => line(`Hire ${s.article} ${s.skill}`, `/hire/${s.slug}`, s.metaDescription)).join("\n")}

## Freelance marketplace comparisons
${alternatives.map((a) => line(a.slug === "fiverr-vs-upwork" ? "Fiverr vs Upwork" : `${a.competitor} alternative`, `/alternatives/${a.slug}`, a.metaDescription)).join("\n")}

## Launch an AI business in 7 days (fixed-price packages)
Not software development — a production AI business on your own domain, live in 7 days: custom domain, web app, AI feature, admin dashboard, analytics, conversion tracking, SEO pages and lead capture. Optional Care plans ($99–$299/month) for hosting, patches and ongoing improvement. See ${SITE_URL}/launch
${launchTiers.map((t) => `- ${t.name} — ${t.priceUsdDisplay} one-time, ${t.supportDays}-day support: ${t.tagline}`).join("\n")}

## Productized engagements
- AI Customer Support Copilot — 30-day implementation, from $6,000
- AI Internal Knowledge Assistant — 40-day implementation, from $9,000
- AI Document Processing Platform — 45-day implementation, from $15,000
- Custom Production AI System — scoped per project

## Our products (proof we ship & operate)
- [GrahAI](https://www.grahai.com): multilingual AI Vedic astrology platform — 100,000+ users, 9 languages, 6M+ Google search impressions in the last 90 days

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
