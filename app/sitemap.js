import { allPosts } from "../content/allPosts";
import { solutions } from "../content/solutions";
import { caseStudies } from "../content/caseStudies";
import { industries } from "../content/industries";
import { comparisons } from "../content/comparisons";

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
    priority: route === "" ? 1.0 : route === "/launch" ? 0.95 : route === "/solutions" || route === "/case-studies" ? 0.9 : 0.8,
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

  return [...routes, ...solutionRoutes, ...caseRoutes, ...blogRoutes, ...industryRoutes, ...compareRoutes];
}
