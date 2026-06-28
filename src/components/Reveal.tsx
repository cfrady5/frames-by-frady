"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds before the element animates in. */
  delay?: number;
  /** Element/component to render as. Defaults to a div. */
  as?: ElementType;
  className?: string;
}

/**
 * Fades + slides its children in when scrolled into view.
 * Uses IntersectionObserver and reveals once. Honors prefers-reduced-motion
 * via the `.reveal` styles in globals.css, and reveals immediately if the
 * observer is unavailable so content is never stuck hidden.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver is missing, show on the next frame.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
