import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { OurApproach } from "@/components/sections/OurApproach";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { WhoWeAreStats } from "@/components/sections/WhoWeAreStats";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesTabs />
      <OurApproach />
      <ValuesSection />
      <WhoWeAreStats />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
