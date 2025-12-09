import type { MetadataRoute } from "next";
import { envs } from "@/config/envs";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/dashboard", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
