const SITE_URL = "https://www.grahaisystems.com";

// Never worth crawling: private job/plan rooms (capability links), account and
// admin screens, and the pre-filled "post a job" links on service pages (hundreds
// of query variants that ate crawl budget; /hire/post itself stays crawlable).
const PRIVATE = ["/api/", "/_next/data/", "/hire/post?", "/hire/jobs/", "/hire/plans/", "/admin", "/dashboard", "/login"];

export default function robots() {
  return {
    rules: [
      // Default — allow everyone, including general search bots.
      { userAgent: "*", allow: "/", disallow: PRIVATE },

      // Explicit allowlist for AI search / answer engines. These are the
      // bots that fuel ChatGPT search, Claude citations, Perplexity, etc.
      { userAgent: "GPTBot", allow: "/", disallow: PRIVATE, crawlDelay: 1 },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: PRIVATE },
      { userAgent: "ChatGPT-User", allow: "/", disallow: PRIVATE },
      { userAgent: "ClaudeBot", allow: "/", disallow: PRIVATE },
      { userAgent: "Claude-Web", allow: "/", disallow: PRIVATE },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: PRIVATE },
      { userAgent: "anthropic-ai", allow: "/", disallow: PRIVATE },
      { userAgent: "PerplexityBot", allow: "/", disallow: PRIVATE },
      { userAgent: "Google-Extended", allow: "/", disallow: PRIVATE },
      { userAgent: "YouBot", allow: "/", disallow: PRIVATE },
      { userAgent: "cohere-ai", allow: "/", disallow: PRIVATE },
      { userAgent: "Applebot-Extended", allow: "/", disallow: PRIVATE },
      { userAgent: "FacebookBot", allow: "/", disallow: PRIVATE },

      // Block low-value scrapers — they don't drive any AI citation
      // benefit but do eat bandwidth and crawl budget.
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
