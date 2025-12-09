"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PricingCard } from "../pricing-card";

interface PricingPlan {
  name: string;
  price?: string;
  priceUnit?: string;
  customPrice?: {
    main: string;
    sub: string;
  };
  buttonText: string;
  buttonVariant?: "default" | "gradient";
  features: string[];
  isPopular?: boolean;
}

interface PricingCardsListProps {
  plans: PricingPlan[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const PricingCardsList = ({ plans }: PricingCardsListProps) => {
  const [_isDragging, setIsDragging] = useState(false);

  // Find the index of the popular card
  const popularIndex = useMemo(() => {
    return plans.findIndex((plan) => plan.isPopular === true);
  }, [plans]);

  // Mobile: Swiper carousel
  return (
    <>
      <motion.div
        className="hidden lg:block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {plans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                priceUnit={plan.priceUnit}
                customPrice={plan.customPrice}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                features={plan.features}
                isPopular={plan.isPopular}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="w-screen block lg:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides={true}
          initialSlide={popularIndex >= 0 ? popularIndex : 0}
          className="!flex !items-stretch !h-auto"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {plans.map((plan, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto max-w-[320px] md:!max-w-[344px]"
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                priceUnit={plan.priceUnit}
                customPrice={plan.customPrice}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                features={plan.features}
                isPopular={plan.isPopular}
                className="h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};
