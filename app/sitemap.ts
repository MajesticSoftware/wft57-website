import type { MetadataRoute } from "next";

const SITE_URL = "https://wft57.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/news", "/news/trinidad-trip", "/charities", "/contact", "/login"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/news" || route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/news" ? 0.9 : 0.7,
  }));
}
