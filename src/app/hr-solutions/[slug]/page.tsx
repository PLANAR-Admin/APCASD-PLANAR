import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug, getServicesByCategory } from "@/lib/services-data";

export async function generateStaticParams() {
  return getServicesByCategory("hr-solutions").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("hr-solutions", slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.metaDescription };
}

export default async function HrServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug("hr-solutions", slug);
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
