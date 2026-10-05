"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";
import { getServicesByCategory } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const EVENT_SERVICES = getServicesByCategory("events");
const HR_SERVICES = getServicesByCategory("hr-solutions");

function SolutionCard({
  href,
  image,
  title,
}: {
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="cursor-hover group/card relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl text-white lg:aspect-auto lg:h-full"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 220px, 45vw"
        className="object-cover transition-transform duration-300 group-hover/card:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="relative z-10 flex items-end justify-between gap-2 p-4">
        <span className="text-sm font-bold leading-tight">{title}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crimson transition-transform group-hover/card:translate-x-0.5">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function SolutionsMegaMenuContent() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-[1fr_1fr_150px_150px]">
      <div>
        <Link
          href="/events"
          className="cursor-hover mb-3 block whitespace-nowrap text-xs font-bold uppercase tracking-wide text-darkblue hover:text-crimson"
        >
          Event Management
        </Link>
        <ul className="flex flex-col gap-2.5">
          {EVENT_SERVICES.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/events/${service.slug}`}
                className="cursor-hover whitespace-nowrap text-sm text-foreground/75 hover:text-crimson"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          href="/hr-solutions"
          className="cursor-hover mb-3 block whitespace-nowrap text-xs font-bold uppercase tracking-wide text-darkblue hover:text-crimson"
        >
          HR Solutions
        </Link>
        <ul className="flex flex-col gap-2.5">
          {HR_SERVICES.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/hr-solutions/${service.slug}`}
                className="cursor-hover whitespace-nowrap text-sm text-foreground/75 hover:text-crimson"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SolutionCard
        href="/events"
        image="/images/services/team-outings.jpg"
        title="Events & Experiences"
      />
      <SolutionCard
        href="/hr-solutions"
        image="/images/services/hr-consulting.jpg"
        title="People & Workforce Solutions"
      />
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openSolutions() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  }

  function scheduleCloseSolutions() {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 150);
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4 md:px-6">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between rounded-[22px] border border-white/40 bg-white/70 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-6">
        <Link href="/" className="cursor-hover shrink-0" aria-label="APCASD PLANAR home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 md:flex lg:gap-8">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.label}
                onMouseEnter={openSolutions}
                onMouseLeave={scheduleCloseSolutions}
              >
                <button
                  className="cursor-hover flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-foreground/80 transition-colors hover:text-crimson lg:text-sm"
                  aria-expanded={solutionsOpen}
                >
                  {link.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", solutionsOpen && "rotate-180")} />
                </button>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-hover whitespace-nowrap text-[13px] font-semibold text-foreground/80 transition-colors hover:text-crimson lg:text-sm"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="cursor-hover cta-gradient-flow whitespace-nowrap rounded-full border-2 border-transparent px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.05] hover:border-white hover:bg-transparent hover:text-white hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)] lg:px-5 lg:py-2.5 lg:text-sm"
          >
            Talk to Our Team
          </Link>
        </div>

        <button
          className="cursor-hover flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Desktop / tablet mega menu — centered under the whole navbar */}
      <div
        className={cn(
          "absolute left-1/2 top-full z-20 hidden w-[92vw] max-w-[1068px] -translate-x-1/2 pt-3 transition-all duration-200 md:block",
          solutionsOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onMouseEnter={openSolutions}
        onMouseLeave={scheduleCloseSolutions}
      >
        <div className="rounded-2xl border border-border bg-white p-6 shadow-2xl">
          <SolutionsMegaMenuContent />
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-3 max-h-[75vh] max-w-6xl overflow-y-auto rounded-[22px] border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.label}>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-foreground"
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                    aria-expanded={mobileSolutionsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileSolutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="mb-2 flex flex-col gap-5 rounded-xl bg-surface p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Link
                            href="/events"
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-darkblue"
                            onClick={() => setMobileOpen(false)}
                          >
                            Event Management
                          </Link>
                          <ul className="flex flex-col gap-2">
                            {EVENT_SERVICES.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/events/${service.slug}`}
                                  className="text-sm text-foreground/70 hover:text-crimson"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <Link
                            href="/hr-solutions"
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-darkblue"
                            onClick={() => setMobileOpen(false)}
                          >
                            HR Solutions
                          </Link>
                          <ul className="flex flex-col gap-2">
                            {HR_SERVICES.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/hr-solutions/${service.slug}`}
                                  className="text-sm text-foreground/70 hover:text-crimson"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div onClick={() => setMobileOpen(false)}>
                          <SolutionCard
                            href="/events"
                            image="/images/services/team-outings.jpg"
                            title="Events & Experiences"
                          />
                        </div>
                        <div onClick={() => setMobileOpen(false)}>
                          <SolutionCard
                            href="/hr-solutions"
                            image="/images/services/hr-consulting.jpg"
                            title="People & Workforce Solutions"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:text-crimson"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="cta-gradient-flow mt-2 rounded-full border-2 border-transparent px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
