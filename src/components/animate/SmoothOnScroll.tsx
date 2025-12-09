"use client";

import type React from "react";
import type { ReactNode } from "react";

import { onScrollToTarget } from "@/utils/scroll-to-target";
import Link from "next/link";

type SmoothScrollLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
  offset?: number;
  onClick?: () => void;
};

export function SmoothScrollLink({
  href,
  children,
  className = "",
  duration = 800,
  onClick,
}: Readonly<SmoothScrollLinkProps>) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    if (href === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    onScrollToTarget(href, 0, duration);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
