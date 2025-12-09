"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PROJECT_CATEGORIES = [
  "All",
  "Landing Page",
  "E-commerce",
  "Business Website",
  "Web App",
  "Design on demand",
];

const CategoryItem = ({
  category,
  activeCategory,
  onClick,
}: {
  category: string;
  activeCategory: string;
  onClick: () => void;
}) => (
  <div
    aria-hidden
    className={clsx(
      "flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4",
      {
        "bg-[#1A1A1A] hover:bg-[#2D3748] transition-colors border border-[#2D3748]":
          activeCategory !== category,
        "bg-gradient-to-r from-[#007CF0] to-[#00DFD8]":
          activeCategory === category,
      },
    )}
    onClick={onClick}
  >
    <p className="text-white text-sm font-medium leading-normal whitespace-nowrap">
      {category}
    </p>
  </div>
);

export const ProjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDragging, setIsDragging] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const categoryIndex = PROJECT_CATEGORIES.indexOf(activeCategory);
      if (categoryIndex !== -1) {
        swiperRef.current.slideTo(categoryIndex, 300);
      }
    }
  }, [activeCategory]);

  return (
    <>
      <div className="flex justify-center mt-4 -mx-[22px] md:-mx-9 md:hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView="auto"
          slidesPerGroup={1}
          mousewheel={{
            forceToAxis: true,
          }}
          freeMode
          className="!px-[22px]"
          modules={[FreeMode]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {PROJECT_CATEGORIES.map((category) => (
            <SwiperSlide key={category} className="!w-auto">
              <CategoryItem
                category={category}
                activeCategory={activeCategory}
                onClick={() => {
                  if (isDragging) return;
                  setActiveCategory(category);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex-wrap justify-center gap-3 hidden md:flex">
        {PROJECT_CATEGORIES.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </>
  );
};
