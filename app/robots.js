const SITE_URL = "https://grahaisystems.com";

export default function robots() {
  return {
    rules: [
      // Default — allow everyone, including general search bots.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/data/"] },

      // Explicit allowlist for AI search / answer engines. These are the
      // bots that fuel ChatGPT search, Claude citations, Perplexity, etc.
      { userAgent: "GPTBot", allow: "/", crawlDelay: 1 },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },

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
