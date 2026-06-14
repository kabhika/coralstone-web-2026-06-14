"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 6) * 60}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
