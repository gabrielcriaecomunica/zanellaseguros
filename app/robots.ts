import type { MetadataRoute } from "next";
import { EMPRESA } from "@/content/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${EMPRESA.siteUrl}/sitemap.xml`,
  };
}
