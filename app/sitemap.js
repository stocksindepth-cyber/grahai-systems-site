import { allPosts } from "../content/allPosts";
import { solutions } from "../content/solutions";
import { caseStudies } from "../content/caseStudies";
import { industries } from "../content/industries";
import { comparisons } from "../content/comparisons";
import { hireSkills } from "../content/hireSkills";
import { alternatives } from "../content/alternatives";

const SITE_URL = "https://grahaisystems.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Core static + legacy SEO routes
  const routes = [
    "",
    "/launch",
    "/start",
    "/pricing",
    "/contact",
    "/terms",
    "/privacy",
    "/refund",
    "/shipping",
    "/solutions",
    "/case-studies",
    "/blog",
    "/industries",
    "/compare",
    "/faq",
    "/about",
    "/services",
    "/hire",
    "/hire/post",
    "/alternatives",
    "/glossary",
    "/ai-agent-development",
    "/ai-chatbot-development",
    "/ai-automation-services",
    "/document-processing-ai",
    "/enterprise-ai-solutions",
    "/openai-development-company",
    "/claude-ai-development",
    "/gemini-ai-development",
    "/groq-development-services",
    "/custom-ai-saas-development",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/hire" ? 0.95 : route === "/services" ? 0.95 : route === "/solutions" || route === "/case-studies" ? 0.9 : 0.8,
  }));

  // Long-tail solution pages
  const solutionRoutes = solutions.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Case study pages
  const caseRoutes = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog posts
  const blogRoutes = allPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Industry pages
  const industryRoutes = industries.map((s) => ({
    url: `${SITE_URL}/industries/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Comparison / buying-guide pages
  const compareRoutes = comparisons.map((s) => ({
    url: `${SITE_URL}/compare/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Hire-an-agent skill pages + marketplace comparisons
  const hireRoutes = hireSkills.map((s) => ({
    url: `${SITE_URL}/hire/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));
  const alternativeRoutes = alternatives.map((a) => ({
    url: `${SITE_URL}/alternatives/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...hireRoutes, ...alternativeRoutes, ...solutionRoutes, ...caseRoutes, ...blogRoutes, ...industryRoutes, ...compareRoutes];
}
