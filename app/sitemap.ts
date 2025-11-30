// app/sitemap.ts
import { BASE_URL } from "../lib/metadata";

export default function sitemap() {
  const ROUTES = [
    "/",
    "/about",
    "/blog",
    "/brand-enquiry",
    "/contact",
    "/services",
    "/work",
    "/contact/brand",
    "/contact/influencer"
  ];

  const lastmod = new Date().toISOString();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: lastmod,
    changeFrequency: "weekly",
    priority: 0.9,
  }));
}
