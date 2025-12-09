"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "@/components";
import { images } from "@/config/images";

const OUR_CLIENTS_MOCKUPS = [
  {
    id: 1,
    light: images.brands.brand_mockup_light_1,
    dark: images.brands.brand_mockup_dark_1,
  },
  {
    id: 2,
    light: images.brands.brand_mockup_light_2,
    dark: images.brands.brand_mockup_dark_2,
  },
  {
    id: 3,
    light: images.brands.brand_mockup_light_3,
    dark: images.brands.brand_mockup_dark_3,
  },
  {
    id: 4,
    light: images.brands.brand_mockup_light_4,
    dark: images.brands.brand_mockup_dark_4,
  },
  {
    id: 5,
    light: images.brands.brand_mockup_light_5,
    dark: images.brands.brand_mockup_dark_5,
  },
  {
    id: 6,
    light: images.brands.brand_mockup_light_6,
    dark: images.brands.brand_mockup_dark_6,
  },
  {
    id: 7,
    light: images.brands.brand_mockup_light_7,
    dark: images.brands.brand_mockup_dark_7,
  },
  {
    id: 8,
    light: images.brands.brand_mockup_light_8,
    dark: images.brands.brand_mockup_dark_8,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const marqueeVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const OurClients = () => {
  return (
    <motion.section
      id="our-clients"
      className="max-w-[calc(100%-80px)] mx-auto pb-8 md:pb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center mb-12" variants={titleVariants}>
        <p className="text-base font-medium text-[#A0A0A0]">
          Trusted by <span className="gradient-text">many</span>
        </p>
      </motion.div>
      <motion.div variants={marqueeVariants}>
        <Marquee isShowMask className="flex items-center gap-x-4">
          {OUR_CLIENTS_MOCKUPS.map((logo) => (
            <motion.div
              key={`logo-${logo.id}`}
              className="mx-20"
              variants={logoVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Image
                src={logo.dark}
                alt="Client Logo"
                placeholder="blur"
                loading="lazy"
                blurDataURL={logo.dark}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: "auto",
                  height: "40px",
                }}
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.section>
  );
};
