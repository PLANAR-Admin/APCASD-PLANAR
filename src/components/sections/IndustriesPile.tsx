"use client";

import { useEffect, useRef } from "react";
import { INDUSTRIES } from "@/lib/site";

const TAG_STYLES: { bg: string; text: string }[] = [
  { bg: "bg-indigo-300", text: "text-white" },
  { bg: "bg-amber-200", text: "text-darkblue" },
  { bg: "bg-orange-300", text: "text-white" },
  { bg: "bg-teal-300", text: "text-white" },
  { bg: "bg-sky-300", text: "text-white" },
  { bg: "bg-pink-300", text: "text-white" },
  { bg: "bg-red-300", text: "text-white" },
  { bg: "bg-violet-300", text: "text-white" },
  { bg: "bg-emerald-300", text: "text-white" },
  { bg: "bg-blue-300", text: "text-white" },
];

export function IndustriesPile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId = 0;
    let started = false;
    let cancelled = false;
    let stopPhysics: (() => void) | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          start();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(container);

    // matter-js is a ~80KB dependency used only by this decorative section —
    // fetch it lazily so it never delays the rest of the page's first load.
    async function start() {
      const MatterModule = await import("matter-js");
      if (cancelled || !container) return;
      const Matter = MatterModule.default;
      const { Engine, World, Bodies, Composite, Mouse, MouseConstraint, Runner } = Matter;

      const bounds = container.getBoundingClientRect();
      const engine = Engine.create({ gravity: { x: 0, y: 2.2 } });
      const world = engine.world;

      // Inset the walls so a pill rotated by a collision still keeps its
      // corners inside the container — its bounding box grows past its
      // resting width/height whenever angle !== 0. A ceiling is included too
      // so a dragged tag can never be thrown out past the top edge.
      const MARGIN = 24;
      const wallOpts = { isStatic: true, friction: 0.5, render: { visible: false } };
      World.add(world, [
        Bodies.rectangle(bounds.width / 2, bounds.height - MARGIN + 30, bounds.width + 100, 60, wallOpts),
        Bodies.rectangle(bounds.width / 2, MARGIN - 30, bounds.width + 100, 60, wallOpts),
        Bodies.rectangle(MARGIN - 30, bounds.height / 2, 60, bounds.height + 200, wallOpts),
        Bodies.rectangle(bounds.width - MARGIN + 30, bounds.height / 2, 60, bounds.height + 200, wallOpts),
      ]);

      const els = tagRefs.current.filter((el): el is HTMLSpanElement => el !== null);
      const bodies = els.map((el) => {
        const rect = el.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        const span = Math.max(bounds.width - w - MARGIN * 2, 0);
        const x = w / 2 + MARGIN + Math.random() * span;
        // Spawn just under the ceiling wall (not off-screen above it) so
        // every tag actually falls and settles inside the walled bounds.
        const y = MARGIN + h / 2 + Math.random() * 30;
        const body = Bodies.rectangle(x, y, w, h, {
          friction: 0.3,
          frictionAir: 0.03,
          restitution: 0.1,
        });
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        return { el, body, w, h };
      });

      Composite.add(world, bodies.map((b) => b.body));

      const mouse = Mouse.create(container);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(world, mouseConstraint);
      const wheelHandler = (mouse as unknown as { mousewheel: (e: Event) => void }).mousewheel;
      mouse.element.removeEventListener("wheel", wheelHandler);

      const runner = Runner.create();
      Runner.run(runner, engine);

      function tick() {
        bodies.forEach(({ el, body, w, h }) => {
          el.style.visibility = "visible";
          el.style.transform = `translate(${body.position.x - w / 2}px, ${
            body.position.y - h / 2
          }px) rotate(${body.angle}rad)`;
        });
        frameId = requestAnimationFrame(tick);
      }
      tick();

      stopPhysics = () => {
        Runner.stop(runner);
        Composite.clear(world, false);
        Engine.clear(engine);
      };
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (stopPhysics) stopPhysics();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[160px] w-full overflow-hidden sm:h-[240px] lg:h-[340px]">
      {INDUSTRIES.map((industry, i) => {
        const { bg, text } = TAG_STYLES[i % TAG_STYLES.length];
        return (
          <span
            key={industry}
            ref={(el) => {
              tagRefs.current[i] = el;
            }}
            className={`cursor-hover invisible absolute left-0 top-0 flex select-none items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base ${bg} ${text}`}
          >
            {industry}
          </span>
        );
      })}
    </div>
  );
}
