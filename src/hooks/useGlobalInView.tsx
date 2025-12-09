import { useEffect, useRef, useState } from "react";

// Shared observer singleton (keeps only one IntersectionObserver instance)
let globalObserver: IntersectionObserver | null = null;
let observerConfig: IntersectionObserverInit | null = null;
const observedElements = new Map<Element, (isIn: boolean) => void>();

function ensureObserver(
  config: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  },
) {
  if (
    globalObserver &&
    JSON.stringify(config) === JSON.stringify(observerConfig)
  )
    return globalObserver;
  if (globalObserver) {
    // Disconnect old one and recreate if config changed
    globalObserver.disconnect();
    observedElements.clear();
  }
  observerConfig = config;
  globalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const cb = observedElements.get(entry.target);
      if (cb)
        cb(
          entry.isIntersecting ||
            entry.intersectionRatio >=
              (Array.isArray(config.threshold)
                ? (config.threshold[0] as number)
                : (config.threshold as number) || 0),
        );
    });
  }, config);
  return globalObserver;
}

export function useGlobalInView(
  options?: IntersectionObserverInit,
  once = true,
) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = ensureObserver(options);
    const cb = (v: boolean) => {
      if (v) setInView(true);
      if (!v && !once) setInView(false);
    };
    observedElements.set(el, cb);
    obs.observe(el);

    return () => {
      observedElements.delete(el);
      obs.unobserve(el);
    };
  }, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, inView } as {
    ref: React.RefObject<HTMLElement>;
    inView: boolean;
  };
}
