"use client";

import { useRef, useState, type MouseEvent, type ReactNode, type Ref } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
  primary:
    "bg-foreground text-background hover:shadow-[0_0_40px_-8px_var(--glow-accent)] border border-transparent",
  secondary: "bg-transparent border border-border text-foreground hover:border-accent",
  ghost: "bg-transparent border border-transparent text-foreground hover:bg-muted/60",
};

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  target,
  rel,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
      ]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    }
    onClick?.();
  };

  const sharedClassName = cn(
    "group relative isolate inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300",
    variantClasses[variant],
    className
  );

  const rippleNodes = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="pointer-events-none absolute rounded-full bg-current/20 animate-[ripple_0.65s_ease-out]"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: 10,
        height: 10,
        transform: "translate(-50%, -50%)",
      }}
    />
  ));

  if (href) {
    return (
      <motion.a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ x: springX, y: springY }}
        whileTap={{ scale: 0.96 }}
        className={sharedClassName}
      >
        {rippleNodes}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={sharedClassName}
    >
      {rippleNodes}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
