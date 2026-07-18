"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a frame so the freshly-navigated page's DOM is in place.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.in)")
      );
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        els.forEach((el) => el.classList.add("in"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      // Store on window so cleanup can reach it.
      (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO =
        io;
    });

    return () => {
      cancelAnimationFrame(raf);
      const io = (window as unknown as { __revealIO?: IntersectionObserver })
        .__revealIO;
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
