"use client";
import { useEffect, useState, useRef } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
