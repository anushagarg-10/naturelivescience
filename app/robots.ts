import type { MetadataRoute } from "next";

// Served at /robots.txt
export default function robots(): MetadataRoute.Robots {
  const base = "https://naturelifescience.in";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
