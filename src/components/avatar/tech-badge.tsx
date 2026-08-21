"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  icon: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
}

export function TechBadge({
  icon,
  className,
  duration = 5,
  delay = 0,
  distance = 14,
}: TechBadgeProps) {
  return (
    <motion.div
      className={cn(
        "glass glow-ring absolute flex h-12 w-12 items-center justify-center rounded-2xl text-2xl sm:h-14 sm:w-14",
        className,
      )}
      animate={{ y: [0, -distance, 0], rotate: [0, 3, 0, -3, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {icon}
    </motion.div>
  );
}
