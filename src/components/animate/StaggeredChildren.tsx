"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type StaggeredChildrenProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?:
    | "fade-in"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom-in";
  threshold?: number;
  duration?: number;
  containerDelay?: number;
};

export function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fade-in",
  threshold = 0.1,
  duration = 600,
  containerDelay = 0,
}: Readonly<StaggeredChildrenProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateChildren = (target: Element) => {
      const children = Array.from(target.children);

      for (let index = 0; index < children.length; index++) {
        const child = children[index];
        const delayTime = containerDelay + index * staggerDelay;

        if (delayTime > 0) {
          setTimeout(() => child.classList.add("animate"), delayTime);
        } else {
          child.classList.add("animate");
        }
      }
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateChildren(entry.target);
          observer.unobserve(entry.target);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -100px 0px",
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [staggerDelay, threshold, containerDelay]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "opacity-0 transition-opacity";
      case "slide-up":
        return "opacity-0 translate-y-10 transition-all";
      case "slide-down":
        return "opacity-0 -translate-y-10 transition-all";
      case "slide-left":
        return "opacity-0 translate-x-10 transition-all";
      case "slide-right":
        return "opacity-0 -translate-x-10 transition-all";
      case "zoom-in":
        return "opacity-0 scale-95 transition-all";
      default:
        return "opacity-0 transition-opacity";
    }
  };

  const childrenWithAnimation = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(
        child as React.ReactElement<{
          className?: string;
          style?: React.CSSProperties;
        }>,
        {
          className: `${(child.props as { className?: string }).className || ""} ${getAnimationClass()}`,
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            transitionDuration: `${duration}ms`,
          },
        },
      );
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {childrenWithAnimation}
    </div>
  );
}
