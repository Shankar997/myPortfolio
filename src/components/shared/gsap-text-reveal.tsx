"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

export function GsapTextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotionSafe();

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll<HTMLSpanElement>("[data-letter]");
    if (!letters || letters.length === 0) return;

    if (reducedMotion) {
      gsap.set(letters, { opacity: 1, y: 0 });
      return;
    }

    const timeline = gsap.timeline({ delay });
    timeline.fromTo(
      letters,
      { opacity: 0, y: "0.7em", rotateX: -40 },
      {
        opacity: 1,
        y: "0em",
        rotateX: 0,
        duration: 0.7,
        ease: "back.out(1.6)",
        stagger: 0.045,
      }
    );

    return () => {
      timeline.kill();
    };
  }, [delay, reducedMotion]);

  return (
    <span ref={containerRef} className={className} style={{ perspective: 400 }} aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          data-letter
          aria-hidden
          className="inline-block opacity-0"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
