import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/events",
    "/hr-solutions",
    "/industries",
    "/why-apcasd",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE.url}/${service.category}/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
