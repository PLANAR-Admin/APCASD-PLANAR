"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const STEPS = [
  { title: "Share Your Brief", copy: "Tell us your objective, audience and requirements." },
  { title: "Build the Concept", copy: "We shape the approach, direction and execution plan." },
  { title: "Coordinate Every Detail", copy: "We align vendors, timelines and logistics." },
  { title: "Deliver the Experience", copy: "Our team executes according to the agreed plan." },
];

const STEP_COLORS = [
  { bg: "bg-crimson", text: "text-white" },
  { bg: "bg-darkblue", text: "text-white" },
  { bg: "bg-amber-500", text: "text-white" },
  { bg: "bg-emerald-500", text: "text-white" },
];

function StepCard({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Narrow band around the viewport center — re-fires every time this card
  // crosses it, scrolling up or down, so the highlight always tracks scroll.
  const isActive = useInView(ref, { margin: "-45% 0px -45% 0px", once: false });
  const { bg, text } = STEP_COLORS[index % STEP_COLORS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className={cn(
        "process-card cursor-hover flex items-start gap-4 rounded-2xl border border-border bg-white p-5",
        isActive && "is-active border-transparent"
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300",
          isActive ? `${bg} ${text}` : "bg-surface text-darkblue"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-semibold text-foreground">{step.title}</h3>
        <p className="mt-1 text-sm text-muted">{step.copy}</p>
      </div>
    </motion.div>
  );
}

export function OurApproach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Our Approach
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight text-darkblue">
            From Brief to Experience
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="cursor-hover rounded-full border-2 border-transparent bg-darkblue px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              Start Your Brief
            </Link>
            <Link
              href="/hr-solutions"
              className="cursor-hover rounded-full border-2 border-darkblue/20 px-6 py-3 text-sm font-semibold text-darkblue transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
