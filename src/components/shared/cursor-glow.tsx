"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CursorGlow() {
  const reducedMotion = useReducedMotionSafe();
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const enabled = isFinePointer && !reducedMotion;

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] rounded-full mix-blend-plus-lighter"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)",
      }}
    />
  );
}
