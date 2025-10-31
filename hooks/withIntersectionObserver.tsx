"use client";
import { useEffect, useRef } from "react";

export default function withIntersectionObserver<P>(Wrapped: React.ComponentType<P>) {
  return function ObserverComponent(props: P) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.classList.add("section-observer");
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            io.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    // @ts-expect-error: we attach ref to top-level section in wrapped component
    return <section ref={ref as any}><Wrapped {...props} /></section>;
  };
}
