"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/hooks/useMediaQuery";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .cursor-hover';

export function CustomCursor() {
  const isFinePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer) return;

    const dot = dotRef.current;
    if (!dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.classList.add("is-visible");

      const target = e.target as HTMLElement | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        dot.classList.add("is-hovering");
      } else {
        dot.classList.remove("is-hovering");
      }
    };

    const onLeave = () => dot.classList.remove("is-visible");
    const onDown = () => dot.classList.add("is-clicking");
    const onUp = () => dot.classList.remove("is-clicking");

    const tick = () => {
      const ease = reducedMotion ? 1 : 0.2;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [isFinePointer, reducedMotion]);

  if (!isFinePointer) return null;

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />;
}
