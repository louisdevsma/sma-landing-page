"use client";
import Lenis from "@studio-freight/lenis";
import type * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenisInstance() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Recalculate scroll height when window resizes or content loads
    const handleResize = () => {
      lenisInstance.resize();
    };

    // Listen to window resize
    window.addEventListener("resize", handleResize);

    // Recalculate when images load (for lazy-loaded images)
    const handleImageLoad = () => {
      lenisInstance.resize();
    };

    // Listen to all image load events
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        // Image already loaded
        lenisInstance.resize();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    // Use MutationObserver to watch for new content being added
    // Debounce resize calls to avoid performance issues
    let resizeTimeout: NodeJS.Timeout | undefined;
    const debouncedResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(() => {
        lenisInstance.resize();
      }, 150);
    };

    const observer = new MutationObserver(debouncedResize);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // Initial resize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      lenisInstance.resize();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      window.removeEventListener("resize", handleResize);
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
      observer.disconnect();
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

// Keep useLenis for backward compatibility, but it's now handled by LenisProvider
export function useLenis() {
  // This is now a no-op since LenisProvider handles initialization
  // Keeping for backward compatibility
}
