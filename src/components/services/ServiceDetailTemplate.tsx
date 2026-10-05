import Image from "next/image";
import Link from "next/link";
import {
  Check,
  UserSearch,
  ClipboardList,
  GraduationCap,
  FolderCog,
  Presentation,
  PartyPopper,
  Trophy,
  Rocket,
  Users,
  Sparkles,
  Building2,
  Briefcase,
  Target,
  Users2,
  Award,
  Medal,
  Megaphone,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getRelatedServices } from "@/lib/services-data";
import { CATEGORY_CONTENT } from "@/lib/services-data";
import type { Service } from "@/lib/types";

const WHAT_WE_DO_ICONS: Record<string, LucideIcon> = {
  UserSearch,
  ClipboardList,
  GraduationCap,
  FolderCog,
  Presentation,
  PartyPopper,
  Trophy,
  Rocket,
  Users,
  Sparkles,
};

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Target,
  Users2,
  Award,
  Medal,
  Megaphone,
  HeartHandshake,
  PartyPopper,
};

export function ServiceDetailTemplate({ service }: { service: Service }) {
  const category = CATEGORY_CONTENT[service.category];
  const related = getRelatedServices(service);
  const WhatWeDoIcon = WHAT_WE_DO_ICONS[service.icon] ?? Check;
  const AudienceIcon = AUDIENCE_ICONS[service.audienceIcon] ?? Check;
  const expandedParagraphs = service.expandedCopy.split("\n\n");

  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: category.title, href: `/${category.slug}` },
            { label: service.title },
          ]}
        />
      </div>

      <div className="mx-auto mt-4 max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full bg-crimson px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
          Our Service
        </span>
        <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
          {service.title}
        </h1>
        <p className="mt-3 text-muted">{service.cardDescription}</p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-6">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
          <Image
            src={
              service.slug === "annual-day-celebrations"
                ? `/images/services/${service.slug}.png`
                : `/images/services/${service.slug}.jpg`
            }
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <blockquote className="rounded-2xl border border-border p-6 text-lg font-medium leading-snug text-darkblue">
            {service.heroCopy}
          </blockquote>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/who-we-are.jpg"
              alt="APCASD PLANAR team at work"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-surface p-8 text-center">
          <h2 className="text-xl font-bold text-darkblue">Ready to Get Started?</h2>
          <p className="mt-3 text-sm text-muted">
            Partner with APCASD PLANAR to bring the right structure, people and execution
            to {service.title.toLowerCase()}. Tell us your requirement and our team will
            guide the next step.
          </p>
          <Link
            href="/contact"
            className="cursor-hover mt-6 inline-block rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
          >
            {service.ctaLabel}
          </Link>

          <div className="relative mt-8 min-h-[180px] w-full flex-1 opacity-90">
            <Image src="/images/logo-mark.svg" alt="" fill sizes="(min-width: 1024px) 320px, 240px" className="object-contain p-2" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-darkblue">What We Do</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {service.whatWeDo.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <WhatWeDoIcon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="mt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-darkblue">Who This Is For</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {service.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-darkblue/10 text-darkblue">
                  <AudienceIcon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="mt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <h2 className="text-xl font-bold text-darkblue">Our Approach</h2>
        {expandedParagraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <h2 className="text-xl font-bold text-darkblue">Why Choose APCASD PLANAR</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-border p-5">
              <Check className="h-5 w-5 text-crimson" strokeWidth={2.5} />
              <p className="mt-3 text-sm font-semibold text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {service.faqs.length > 0 && (
        <div className="mx-auto mt-16 max-w-4xl px-6">
          <h2 className="text-xl font-bold text-darkblue">Frequently Asked Questions</h2>
          <div className="mt-4 flex flex-col divide-y divide-border rounded-2xl border border-border">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="mx-auto mt-16 max-w-5xl px-6 text-center">
          <h2 className="text-xl font-bold text-darkblue">Check Other Services</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-left">
            {related.map((r) => (
              <div key={r.slug} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <ServiceCard service={r} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mt-16 max-w-4xl px-6 text-center">
        <div className="rounded-3xl bg-surface p-10">
          <h2 className="text-xl font-bold text-darkblue">Ready to Discuss Your Requirements?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            Tell us what you need and our team will help you explore the right solution.
          </p>
          <Link
            href="/contact"
            className="cursor-hover mt-6 inline-block rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
