import type { MetadataRoute } from "next";
import { EMPRESA } from "@/content/empresa";
import { MODALIDADES_SEGURO } from "@/content/seguros";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = EMPRESA.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/sobre",
    "/seguros",
    "/empresas",
    "/nautico",
    "/contato",
    "/politica-de-privacidade",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const modalidadeRoutes: MetadataRoute.Sitemap = MODALIDADES_SEGURO.filter(
    (m) => m.slug !== "nautico"
  ).map((m) => ({
    url: `${baseUrl}/seguros/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...modalidadeRoutes];
}
