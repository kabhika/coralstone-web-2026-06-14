import type { MetadataRoute } from "next";

const base = "https://www.coralstonegroup.com.au";
const paths = ["", "/websites", "/it-support", "/pricing", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${base}${p}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
