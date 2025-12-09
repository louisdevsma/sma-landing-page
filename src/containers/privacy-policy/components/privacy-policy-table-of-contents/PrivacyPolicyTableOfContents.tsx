"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLenisInstance } from "@/hooks/useLenis";
import { useBelowBreakpoint } from "@/utils/responsive";

interface TableOfContentsItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

interface PrivacyPolicyTableOfContentsProps {
  title: string;
  description: string;
  items: TableOfContentsItem[];
}

const tocVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
    },
  }),
};

export const PrivacyPolicyTableOfContents = ({
  title,
  description,
  items,
}: PrivacyPolicyTableOfContentsProps) => {
  const lenis = useLenisInstance();
  const isMobile = useBelowBreakpoint("lg");
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeId, setActiveId] = useState<string | null>(
    items.find((item) => item.isActive)?.id || items[0]?.id || null,
  );

  useEffect(() => {
    type Section = { id: string; element: HTMLElement };
    const sections: Section[] = items
      .map((item) => {
        const element = document.getElementById(item.id);
        return { id: item.id, element };
      })
      .filter((section): section is Section => section.element !== null);

    if (sections.length === 0) return;

    // Reference point from top of viewport (adjust this value as needed)
    const REFERENCE_OFFSET = 150;

    type ClosestSection = { id: string; distance: number };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom =
        scrollPosition + windowHeight >= documentHeight - 100; // 100px threshold

      type BestSection = { id: string; distance: number };
      let bestSection: BestSection | null = null;

      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Check if section is visible in viewport (at least partially)
        const isVisible = sectionTop < windowHeight && sectionBottom > 0;

        if (isVisible) {
          // Calculate distance from reference point
          const distance = Math.abs(sectionTop - REFERENCE_OFFSET);

          // Choose the section closest to reference point
          if (!bestSection || distance < bestSection.distance) {
            bestSection = { id: section.id, distance };
          }
        }
      });

      // If we found a visible section, use it
      if (bestSection) {
        const best: BestSection = bestSection;
        setActiveId(best.id);
        return;
      }

      // If no section is visible and we're near bottom, activate last section
      if (isNearBottom && sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          setActiveId(lastSection.id);
          return;
        }
      }

      // Otherwise, find the section closest to reference point (above viewport)
      let closestSection: ClosestSection | null = null;

      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top;

        // Prefer sections that are above the viewport
        if (sectionTop < REFERENCE_OFFSET) {
          const distance = REFERENCE_OFFSET - sectionTop;
          if (!closestSection || distance < closestSection.distance) {
            closestSection = { id: section.id, distance };
          }
        }
      });

      if (closestSection) {
        const closest: ClosestSection = closestSection;
        setActiveId(closest.id);
      } else if (sections.length > 0) {
        // Fallback to first section if nothing found
        setActiveId(sections[0]?.id || null);
      }
    };

    // Initial update
    updateActiveSection();

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  // Auto-scroll Swiper to active item
  useEffect(() => {
    if (isMobile && swiperRef.current && activeId) {
      const activeIndex = items.findIndex((item) => item.id === activeId);
      if (activeIndex !== -1) {
        swiperRef.current.slideTo(activeIndex, 300);
      }
    }
  }, [activeId, isMobile, items]);

  const handleItemClick = (itemId: string) => {
    if (!lenis) return;
    const element = document.getElementById(itemId);
    if (element) {
      lenis.scrollTo(element, {
        offset: -100,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      });
    }
  };

  const renderItem = (item: TableOfContentsItem, index: number) => {
    const isActive = activeId === item.id;
    return (
      <motion.a
        key={item.id}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group whitespace-nowrap ${
          isActive ? "bg-primary/30" : "hover:bg-white/5"
        }`}
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleItemClick(item.id);
        }}
        variants={itemVariants}
        custom={index}
      >
        <span
          className={`material-symbols-outlined text-xl transition-colors ${
            isActive ? "text-primary" : "text-white/60 group-hover:text-white"
          }`}
        >
          {item.icon}
        </span>
        <p
          className={`text-sm font-medium leading-normal transition-colors ${
            isActive ? "text-white" : "text-white/80 group-hover:text-white"
          }`}
        >
          {item.label}
        </p>
      </motion.a>
    );
  };

  return (
    <>
      {/* Mobile: Horizontal Swiper Carousel (Sticky) */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 z-50 w-screen py-3 bg-[#1A1A2E]/95 backdrop-blur-sm border-b border-white/10">
          <Swiper
            spaceBetween={8}
            slidesPerView="auto"
            freeMode
            modules={[FreeMode]}
            className="!px-[22px] sm:!px-[36px]"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-auto">
                {renderItem(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Desktop: Vertical List (Sticky Sidebar) */}
      {!isMobile && (
        <aside className="w-full lg:w-[30%] lg:sticky lg:top-28 self-start">
          <motion.div
            className="flex h-full flex-col justify-between rounded-xl border border-white/10 p-6 bg-[#1A1A2E]/50"
            variants={tocVariants}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-white text-base font-bold leading-normal">
                  {title}
                </h3>
                <p className="text-white/60 text-sm font-normal leading-normal">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {items.map((item, index) => renderItem(item, index))}
              </div>
            </div>
          </motion.div>
        </aside>
      )}
    </>
  );
};
