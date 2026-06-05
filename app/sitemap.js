import { blogPosts } from "../content/posts";

const SITE_URL = "https://grahaisystems.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Core Static Routes
  const routes = [
    "",
    "/blog",
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
    priority: route === "" ? 1.0 : route === "/blog" ? 0.9 : 0.8,
  }));

  // Dynamic Blog Post Routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
