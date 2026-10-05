import type { Metadata } from "next";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { IndustriesStackedSections } from "@/components/sections/IndustriesStackedSections";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | APCASD PLANAR",
  description:
    "Expert HR and event management solutions for 10+ industries including IT, Manufacturing, Automotive, BFSI, Healthcare, Pharma, Retail, Education, Startups & Professional Services. Industry-specific expertise backed by years of experience.",
  keywords: [
    "industry HR solutions",
    "event management by industry",
    "IT recruitment",
    "manufacturing HR",
    "automotive solutions",
    "banking HR",
    "healthcare staffing",
    "pharmaceutical recruitment",
  ].join(", "),
  openGraph: {
    title: "Industries We Serve | APCASD PLANAR",
    description: "Specialized HR and event management solutions for diverse industries",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <div className="pb-16">
      <div className="pt-36 sm:pt-44">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
        </div>
      </div>
      <IndustriesSection />
      <IndustriesStackedSections />
      <CTASection />
    </div>
  );
}
