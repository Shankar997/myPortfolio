"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

const MESSAGES = [
  [
    "👋 Hi!",
    "I'm Shankar.",
    "Senior Frontend Developer.",
    "Welcome to my Portfolio.",
  ],
  ["I build modern web experiences."],
  ["React • Next.js • TypeScript"],
  ["Let's Build Something Amazing 🚀"],
];

const TYPE_SPEED = 32;
const HOLD_DURATION = 4000;

export function SpeechBubble() {
  const reducedMotion = useReducedMotionSafe();
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, HOLD_DURATION);
    return () => clearTimeout(timeout);
  }, [messageIndex]);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    const fullLines = MESSAGES[messageIndex];

    async function typeLines() {
      setTypedLines(fullLines.map(() => ""));
      for (let li = 0; li < fullLines.length; li++) {
        const full = fullLines[li];
        for (let ci = 1; ci <= full.length; ci++) {
          if (cancelled) return;
          await new Promise((resolve) => setTimeout(resolve, TYPE_SPEED));
          if (cancelled) return;
          setTypedLines((prev) => {
            const next = [...prev];
            next[li] = full.slice(0, ci);
            return next;
          });
        }
      }
    }

    typeLines();

    return () => {
      cancelled = true;
    };
  }, [messageIndex, reducedMotion]);

  const lines = reducedMotion ? MESSAGES[messageIndex] : typedLines;

  return (
    <div className="absolute -top-6 right-2 z-20 w-[15.5rem] sm:-top-8 sm:right-0 sm:w-64">
      <AnimatePresence mode="wait">
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass glow-ring relative rounded-2xl rounded-bl-md px-4 py-3 font-mono text-sm leading-relaxed text-foreground sm:text-sm"
        >
          {lines.map((line, index) => (
            <p key={index} className="min-h-[1.35em] text-sm">
              {line}
              {index === lines.length - 1 && (
                <span className="animate-blink-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent align-middle" />
              )}
            </p>
          ))}
          <span className="glass absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-r-0 border-t-0" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
