import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { getServicesByCategory } from "@/lib/services-data";
import type { ServiceCategoryContent } from "@/lib/types";

export function CategoryLandingPage({
  content,
  extraContent,
}: {
  content: ServiceCategoryContent;
  extraContent?: ReactNode;
}) {
  const services = getServicesByCategory(content.slug);

  return (
    <div className="pb-24">
      <section className="pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: content.title }]} />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            {content.eyebrow}
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-tight text-darkblue">
            {content.introHeading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{content.heroCopy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="cursor-hover rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href="#services"
              className="cursor-hover rounded-full border-2 border-darkblue/20 px-7 py-3.5 text-center text-sm font-semibold text-darkblue transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6">
        <p className="max-w-3xl text-base font-medium text-muted sm:text-lg">{content.introCopy}</p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {extraContent}

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
