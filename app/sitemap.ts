import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { gemeenten } from "@/lib/gemeenten";
import { diensten } from "@/lib/diensten";
import { artikels } from "@/lib/kennis";

// Wordt automatisch afgeleid uit de databestanden, zodat de sitemap nooit uit de pas loopt.
export default function sitemap(): MetadataRoute.Sitemap {
  const datum = new Date(site.nagekekenIso);
  const pad = (p: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${p}`,
    lastModified: datum,
    changeFrequency: "monthly",
    priority,
  });
  return [
    pad("", 1),
    pad("/diensten", 0.8),
    pad("/gemeenten", 0.8),
    pad("/kennis", 0.8),
    pad("/offerte", 0.7),
    pad("/over", 0.3),
    pad("/privacy", 0.2),
    ...diensten.map((d) => pad(`/diensten/${d.slug}`, 0.9)),
    ...gemeenten.map((g) => pad(`/${g.slug}`, 0.9)),
    ...artikels.map((a) => pad(`/kennis/${a.slug}`, 0.8)),
  ];
}
