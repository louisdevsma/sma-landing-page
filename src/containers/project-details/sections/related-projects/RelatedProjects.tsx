"use client";

import { Button } from "@heroui/button";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "@/containers/projects/components";
import { breakpoints } from "@/utils/responsive";

interface Project {
  title: string;
  url: string;
  slug: string;
  category: string;
  description: string;
}

interface NavigationButtonProp {
  ref: React.RefObject<HTMLDivElement | null>;
  direction: "prev" | "next";
  disabled?: boolean;
}

const NavigationButton = ({
  ref,
  direction,
  disabled,
}: NavigationButtonProp) => (
  <div
    ref={ref}
    className={clsx(
      "absolute justify-center top-1/2 z-10 -translate-y-1/2 transition-all hover:scale-110 hidden md:block",
      {
        "-left-5": direction === "prev",
        "-right-5": direction === "next",
        "invisible pointer-events-none": disabled,
      },
    )}
  >
    <Button
      size="md"
      color="primary"
      radius="full"
      isIconOnly
      title={direction === "next" ? "Next project" : "Previous project"}
      disabled={disabled}
    >
      <span className="material-symbols-outlined">
        {direction === "next" ? "keyboard_arrow_right" : "keyboard_arrow_left"}
      </span>
    </Button>
  </div>
);

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const RelatedProjects = ({ projects }: { projects: Project[] }) => {
  //** States */
  const [_isDragging, setIsDragging] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  //** Refs */
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      id="related-projects"
      className="flex flex-col gap-8 items-center -mx-[22px] sm:-mx-9 md:-mx-11"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold tracking-tight text-white font-display"
        variants={titleVariants}
      >
        Related Projects
      </motion.h2>
      <div className="w-full relative lg:max-w-5xl lg:mx-auto">
        <Swiper
          className="!px-[22px] sm:!px-9 md:!px-11 lg:!px-0"
          freeMode
          initialSlide={0}
          spaceBetween={16}
          slidesPerView="auto"
          mousewheel={{
            forceToAxis: true,
          }}
          breakpoints={{
            [breakpoints.md]: {
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current ?? undefined,
            nextEl: navigationNextRef.current ?? undefined,
          }}
          onInit={(swiper: SwiperType) => {
            if (
              !!swiper.params?.navigation &&
              typeof swiper.params?.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current ?? undefined;
              swiper.params.navigation.nextEl =
                navigationNextRef.current ?? undefined;
            }
            swiper.navigation?.init();
            swiper.navigation?.update();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            swiper.on("slideChange", () => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                !!swiper.params?.navigation &&
                typeof swiper.params?.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl =
                  navigationPrevRef.current ?? undefined;
                swiper.params.navigation.nextEl =
                  navigationNextRef.current ?? undefined;
              }
              swiper.navigation?.destroy();
              swiper.navigation?.init();
              swiper.navigation?.update();
            });
          }}
          modules={[FreeMode, Navigation]}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {projects.map((project) => (
            <SwiperSlide
              className="!max-w-[320px] sm:!max-w-[325px]"
              key={project.title}
            >
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <NavigationButton
          ref={navigationPrevRef}
          direction="prev"
          disabled={isBeginning}
        />

        <NavigationButton
          ref={navigationNextRef}
          direction="next"
          disabled={isEnd}
        />
      </div>
    </motion.section>
  );
};
