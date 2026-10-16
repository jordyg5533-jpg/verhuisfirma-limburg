import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI-crawlers worden uitdrukkelijk toegelaten: zij voeden ChatGPT, Perplexity en Gemini.
export default function robots(): MetadataRoute.Robots {
  const bots = ["*", "Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"];
  return {
    rules: bots.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/bedankt"] })),
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
