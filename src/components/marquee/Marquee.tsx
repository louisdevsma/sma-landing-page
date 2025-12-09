"use client";
import { useCallback, useEffect, useRef } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  speed?: number;
  vertical?: boolean;
  repeat?: number;
  isShowMask?: boolean;
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const useAnimationFrame = (callback: (time: number, delta: number) => void) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== null) {
        const delta = time - previousTimeRef.current;
        callback(time, delta);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 50,
  vertical = false,
  repeat = 4,
  isShowMask = false,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);

  /** Cached values — không tính lại mỗi frame */
  const blockSize = useRef(0);
  const gapSize = useRef(0);

  const animX = useRef(0);
  const isPaused = useRef(false);

  /** 🔥 CHỈ MEASURE 1 LẦN SAU KHI MOUNT (và khi resize) */
  useEffect(() => {
    const measure = () => {
      if (!blockRef.current || !contentRef.current) return;

      blockSize.current = vertical
        ? blockRef.current.offsetHeight
        : blockRef.current.offsetWidth;

      const styles = getComputedStyle(contentRef.current);
      gapSize.current = vertical
        ? parseFloat(styles.rowGap || "0")
        : parseFloat(styles.columnGap || "0");
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (blockRef.current) ro.observe(blockRef.current);
    return () => ro.disconnect();
  }, [vertical]);

  useAnimationFrame((_t, delta) => {
    if (!contentRef.current) return;
    if (pauseOnHover && isPaused.current) return;

    const loopDistance = blockSize.current + gapSize.current;
    const dx = (speed * delta) / 1000;
    const effectiveDx = reverse ? dx : -dx;
    animX.current += effectiveDx;

    if (Math.abs(animX.current) >= loopDistance) {
      animX.current = animX.current % loopDistance;
    }

    contentRef.current.style.transform = vertical
      ? `translateY(${animX.current}px)`
      : `translateX(${animX.current}px)`;
  });

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden w-full p-2 [--gap:2rem] [gap:var(--gap)]" +
          (vertical ? " flex-col" : " flex-row"),
        isShowMask &&
          "[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]",
        className,
      )}
      aria-hidden="true"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]" +
            (vertical ? " flex-col" : " flex-row"),
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? blockRef : undefined}
              className="flex gap-8"
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}
