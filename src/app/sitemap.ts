import type { MetadataRoute } from "next";
import { envs } from "@/config/envs";
import { getProjectSlugs } from "@/data/projects";
import { AppConfig } from "@/utils/app-config";

// Static routes
const staticRoutes = [
  "",
  "contact",
  "projects",
  "privacy-policy",
  "terms-of-service",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const locales = AppConfig.locales;
  const defaultLocale = AppConfig.defaultLocale;

  const urls: MetadataRoute.Sitemap = [];

  // Generate URLs for static routes
  for (const route of staticRoutes) {
    for (const locale of locales) {
      const path = route === "" ? "" : `/${route}`;
      const localePath = locale === defaultLocale ? "" : `/${locale}`;
      const url = `${baseUrl}${localePath}${path}`;

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc,
              `${baseUrl}${loc === defaultLocale ? "" : `/${loc}`}${path}`,
            ]),
          ),
        },
      });
    }
  }

  // Get project slugs dynamically
  const projectSlugs = await getProjectSlugs();

  // Generate URLs for project detail pages
  for (const slug of projectSlugs) {
    for (const locale of locales) {
      const localePath = locale === defaultLocale ? "" : `/${locale}`;
      const url = `${baseUrl}${localePath}/p/${slug}`;

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc,
              `${baseUrl}${loc === defaultLocale ? "" : `/${loc}`}/p/${slug}`,
            ]),
          ),
        },
      });
    }
  }

  return urls;
}
