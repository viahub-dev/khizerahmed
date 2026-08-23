"use client";

import { createElement, useEffect, useRef, useState } from "react";

export default function RevealHeading({
  as = "h2",
  className = "",
  children
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className: `reveal-heading ${inView ? "in-view" : ""} ${className}` },
    children
  );
}
