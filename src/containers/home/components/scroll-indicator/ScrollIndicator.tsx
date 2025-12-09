"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { useLenisInstance } from "@/hooks/useLenis";

type ScrollIndicatorProps = {
  nextSection?: string;
};

export function ScrollIndicator({ nextSection }: ScrollIndicatorProps) {
  const lenis = useLenisInstance();

  const handleScroll = useCallback(() => {
    if (!nextSection || !lenis) return;
    const targetElement = document.getElementById(nextSection);
    if (!targetElement) return;

    lenis.scrollTo(targetElement, {
      offset: -100,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    });
  }, [nextSection, lenis]);

  return (
    <div
      className="flex flex-col items-center text-white cursor-pointer"
      aria-hidden
      onClick={handleScroll}
    >
      {/* TEXT – sync */}
      <motion.p
        className="text-lg font-light mb-3"
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Scroll down
      </motion.p>

      {/* LINE – refined & smooth */}
      <div className="relative h-20 w-px mb-3 overflow-visible">
        <motion.div
          className="absolute left-1/2 w-px h-16 bg-white/30 -translate-x-1/2"
          animate={{
            opacity: [0, 0.8, 0], // nhẹ, không gắt
            y: [-4, 10, 18], // đi ngắn, mượt, không kéo quá xa
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* MOUSE WHEEL – sync */}
      <div className="w-8 h-14 rounded-full border border-white/70 flex justify-center">
        <motion.div
          className="w-1 h-2 bg-white rounded-full mt-2"
          animate={{
            opacity: [1, 0],
            y: [0, 12],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
