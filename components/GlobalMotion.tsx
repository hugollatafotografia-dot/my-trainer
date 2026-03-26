"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const AUTO_REVEAL_SELECTOR = [
  "main > section",
  "main section .surface-card",
  "main section .image-frame",
  "main section .dark-panel",
  "footer",
].join(",");

export default function GlobalMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(AUTO_REVEAL_SELECTOR),
    ).filter((node) => !node.classList.contains("reveal-motion"));

    if (nodes.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    nodes.forEach((node, index) => {
      node.classList.add("auto-reveal");
      node.style.transitionDelay = `${Math.min((index % 6) * 55, 220)}ms`;

      if (reducedMotion) {
        node.classList.add("auto-reveal-visible");
      }
    });

    if (reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.classList.add("auto-reveal-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
