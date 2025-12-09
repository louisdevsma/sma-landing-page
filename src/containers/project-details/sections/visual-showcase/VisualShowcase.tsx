"use client";

import { motion, type Variants } from "framer-motion";

interface VisualShowcaseProps {
  images: string[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const VisualShowcase = ({ images }: VisualShowcaseProps) => {
  return (
    <motion.section
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold tracking-tight text-white text-center font-display"
        variants={titleVariants}
      >
        Visual Showcase
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {images.map((image, index) => (
          <motion.div
            key={`visual-showcase-${index}`}
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 border border-white/10"
            data-alt="Screenshot of the platform's dashboard on a desktop device"
            style={{
              backgroundImage: `url('${image}')`,
            }}
            variants={imageVariants}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
