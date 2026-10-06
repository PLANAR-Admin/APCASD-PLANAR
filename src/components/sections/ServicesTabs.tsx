"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServicesByCategory } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/lib/types";

const TABS: { key: ServiceCategory; label: string }[] = [
  { key: "events", label: "Events" },
  { key: "hr-solutions", label: "HR Solutions" },
];

const AUTO_SWITCH_MS = 10000;

export function ServicesTabs() {
  const [active, setActive] = useState<ServiceCategory>("events");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const userPickedRef = useRef(false);
  const services = getServicesByCategory(active);

  function startCycle() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const nextIndex = (TABS.findIndex((t) => t.key === prev) + 1) % TABS.length;
        return TABS[nextIndex].key;
      });
    }, AUTO_SWITCH_MS);
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset to Events each time it comes into view (unless user already picked)
          if (!userPickedRef.current) {
            setActive("events");
          }
          startCycle();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function handleSelect(key: ServiceCategory) {
    userPickedRef.current = true;
    setActive(key);
    startCycle();
  }

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Our Services
        </p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-darkblue">
          Practical people expertise for growing teams
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Service categories"
        className="mt-10 flex justify-center gap-3"
      >
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => handleSelect(tab.key)}
            className={cn(
              "cursor-hover rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors",
              active === tab.key
                ? "border-darkblue bg-darkblue text-white"
                : "border-darkblue/25 text-darkblue hover:bg-darkblue/5"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative mt-10 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="w-[calc(50%-6px)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
