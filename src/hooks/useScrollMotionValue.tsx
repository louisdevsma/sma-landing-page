"use client";

import { type MotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { breakpoints } from "@/utils/responsive";

/**
 * Hook tạo motion value responsive dựa theo scroll progress (hoặc motion value khác)
 *
 * @param source MotionValue<number> - thường là scrollYProgress
 * @param inputRanges Input ranges (ví dụ [0, 1])
 * @param outputRanges Responsive ranges cho sm/md/lg (ví dụ { sm: [0, 100], md: [0, 300], lg: [0, 800] })
 * @param springConfig Tùy chọn: cấu hình spring (stiffness, damping, mass)
 *
 * @returns MotionValue<number> (đã được spring)
 *
 * 📘 Ví dụ:
 * const x = useScrollMotionValue(scrollYProgress, {
 *   md: [0, 100],
 *   lg: [0, 300],
 *   xl: [0, 800]
 * });
 */
export function useScrollMotionValue(
  source: MotionValue<number>,
  inputRanges: number[],
  outputRanges: {
    md: number[];
    lg: number[];
    xl: number[];
  },
  springConfig = { stiffness: 80, damping: 20 },
) {
  // const value = useMotionValue(0);
  const [currentRange, setCurrentRange] = useState<number[]>(outputRanges.lg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoints.lg) setCurrentRange(outputRanges.md);
      else if (window.innerWidth < breakpoints.xl)
        setCurrentRange(outputRanges.lg);
      else setCurrentRange(outputRanges.xl);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [outputRanges]);

  return useSpring(
    useTransform(source, inputRanges, currentRange),
    springConfig,
  );
}
