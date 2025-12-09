"use client";

import { type ReactNode, useEffect, useRef } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-in"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom-in";
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  duration = 600,
  once = true,
}: Readonly<AnimateOnScrollProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEntries = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      for (const entry of entries) {
        const target = entry.target;

        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => target.classList.add("animate"), delay);
          } else {
            target.classList.add("animate");
          }

          if (once) {
            observer.unobserve(target);
          }
        } else if (!once) {
          target.classList.remove("animate");
        }
      }
    };

    const observer = new IntersectionObserver(handleEntries, {
      threshold,
      rootMargin: "0px 0px -100px 0px",
    });

    const currentRef = ref.current;
    if (currentRef) {
      // Reset animation state when locale changes
      currentRef.classList.remove("animate");
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, once]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "opacity-0 transition-opacity";
      case "slide-up":
        return "opacity-0 translate-y-2.5 transition-all";
      case "slide-down":
        return "opacity-0 -translate-y-2.5 transition-all";
      case "slide-left":
        return "opacity-0 translate-x-2.5 transition-all";
      case "slide-right":
        return "opacity-0 -translate-x-2.5 transition-all";
      case "zoom-in":
        return "opacity-0 scale-95 transition-all";
      default:
        return "opacity-0 transition-opacity";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
