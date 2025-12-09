"use client";

import { motion } from "framer-motion";

interface PricingCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const PricingCTA = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: PricingCTAProps) => {
  return (
    <motion.div
      className="flex w-full flex-col items-center gap-6 rounded-xl bg-gradient-to-r from-blue-600/50 to-cyan-500/50 px-6 py-10 md:p-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl font-bold text-white"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="max-w-xl text-center text-white/80"
        variants={itemVariants}
      >
        {description}
      </motion.p>
      <motion.button
        onClick={onButtonClick}
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-white text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all duration-300 hover:scale-105"
        variants={ctaVariants}
      >
        <span className="truncate">{buttonText}</span>
      </motion.button>
    </motion.div>
  );
};
