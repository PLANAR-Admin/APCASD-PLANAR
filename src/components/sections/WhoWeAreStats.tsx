"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 3, suffix: "+", label: "Years", sub: "Proven Experience" },
  { value: 20, suffix: "+", label: "Clients", sub: "Trusted Partnerships" },
  { value: 50, suffix: "+", label: "", sub: "Project Impactful Results" },
];

const COUNT_DURATION = 1800;

function CountUp({ target, play, delay = 0 }: { target: number; play: boolean; delay?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!play) {
      setValue(0);
      return;
    }

    let frameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    timeoutId = setTimeout(() => {
      const start = performance.now();

      function tick(now: number) {
        const progress = Math.min((now - start) / COUNT_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      }
      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [play, target, delay]);

  return <>{value}</>;
}

export function WhoWeAreStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div ref={sectionRef} className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Who We Are
        </p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-darkblue">
          Transforming Businesses with Expertise
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <div
            key={stat.sub}
            className="flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#f1eefb] px-4 py-8 text-center sm:min-h-[170px] sm:px-6 sm:py-10"
          >
            <p className="flex flex-nowrap items-baseline justify-center gap-x-2 whitespace-nowrap text-[clamp(1.5rem,3.2vw,2.5rem)] font-bold leading-none text-darkblue">
              <span>
                <CountUp target={stat.value} play={isInView} delay={i * 150} />
                {stat.suffix}
              </span>
              {stat.label && <span>{stat.label}</span>}
            </p>
            <p className="mt-4 text-sm font-semibold text-darkblue/70">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
