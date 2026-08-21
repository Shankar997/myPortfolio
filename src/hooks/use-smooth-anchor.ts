"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

export function useSmoothAnchor() {
  const lenis = useLenis();

  return useCallback(
    (href: string) => (event: React.MouseEvent) => {
      if (!href.startsWith("#")) return;
      event.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      history.pushState(null, "", href);
    },
    [lenis]
  );
}
