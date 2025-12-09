"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OUR_SERVICES } from "@/containers/home/sections";
import "./services-swiper.css";
import { ServiceItem } from "./ServiceItem";

interface ServicesSelectionProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServicesSelection = ({
  isOpen,
  onOpenChange,
}: ServicesSelectionProps) => {
  const swiperRef = useRef<SwiperType>(null);
  const [_activeIndex, setActiveIndex] = useState(0);

  return (
    <Modal
      size="4xl"
      classNames={{
        base: "border border-white/10 bg-background-dark bg-[radial-gradient(circle_at_top_left,rgba(46,109,255,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1),transparent_30%)]",
      }}
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col p-8">
          <h2 className="text-2xl md:text-3xl text-center font-medium text-white">
            Choose a service
          </h2>
          <p className="text-sm md:text-base font-normal text-center text-muted mt-2">
            Comprehensive solutions to power your digital transformation.
          </p>
        </ModalHeader>
        <ModalBody className="px-0">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.4}
            centeredSlides
            roundLengths
            loop
            spaceBetween={1}
            modules={[Navigation]}
            className="services-swiper"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.6,
              },
              568: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 2.6,
              },
              860: {
                slidesPerView: 3,
              },
            }}
          >
            {OUR_SERVICES.map((slideStep) => (
              <SwiperSlide key={slideStep.title}>
                <div className=" w-full h-auto overflow-hidden relative">
                  <ServiceItem {...slideStep} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalBody>

        <ModalFooter>
          <Button
            color="default"
            size="lg"
            className="max-md:w-full"
            onPress={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            size="lg"
            className="max-md:w-full"
            onPress={() => onOpenChange(false)}
          >
            View details
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
