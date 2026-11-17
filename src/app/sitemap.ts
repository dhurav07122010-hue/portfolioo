import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-17T00:00:00.000Z";

  return [
    {
      url: "https://ds-studios.design",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ds-studios.design#work",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ds-studios.design#services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ds-studios.design#process",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ds-studios.design#about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ds-studios.design#contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
