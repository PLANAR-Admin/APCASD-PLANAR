import type { Metadata } from "next";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesHighlightSection } from "@/components/sections/IndustriesHighlightSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why APCASD PLANAR | HR Solutions & Event Management",
  description:
    "Discover APCASD PLANAR's story, mission, values, and industry expertise. We serve IT, manufacturing, automotive, BFSI, healthcare, pharmaceuticals, retail, education, startups, and professional services with specialized HR and event management solutions.",
  keywords: "HR solutions, event management, industry expertise, talent acquisition, employee engagement, corporate events",
};

export default function WhyApcasdPage() {
  return (
    <div className="pb-16">
      <section className="pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Why APCASD" }]} />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Our Story
          </p>
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
            {SITE.positioning}
          </h1>
          <p className="mt-5 text-lg text-muted">
            Founded in {SITE.foundedYear}, {SITE.legalName} is a people-focused business
            solutions company committed to helping organizations build stronger teams,
            streamline workforce operations, and create exceptional experiences.
          </p>
          <p className="mt-4 text-muted">
            Our event capabilities cover corporate events, conferences, seminars,
            team-building activities, exhibitions, brand activations and annual
            celebrations — every experience carefully planned around our clients&apos;
            objectives and audience.
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-surface p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
              Our Commitment
            </p>
            <p className="mt-4 text-foreground/90">
              &ldquo;At {SITE.legalName}, we believe that the right people drive business
              success. Our commitment is to deliver reliable, people-focused HR solutions
              that help organizations build strong teams and achieve sustainable
              growth.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <ValuesSection />
      <IndustriesHighlightSection />
      <CTASection />
    </div>
  );
}
