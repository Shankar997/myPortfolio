"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

function ScrollTriggerSync() {
  useLenis(() => {
    if (typeof window === "undefined") return;
    const win = window as typeof window & { ScrollTrigger?: { update: () => void } };
    win.ScrollTrigger?.update();
  });
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotionSafe();

  useEffect(() => {
    let cancelled = false;
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (cancelled) return;
      (window as typeof window & { ScrollTrigger?: unknown }).ScrollTrigger = ScrollTrigger;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
