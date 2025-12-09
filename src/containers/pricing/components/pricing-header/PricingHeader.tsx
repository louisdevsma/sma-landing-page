"use client";

import { motion } from "framer-motion";

interface PricingHeaderProps {
  title: string;
  titleHighlight?: string;
  description: string;
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

export const PricingHeader = ({
  title,
  titleHighlight,
  description,
}: PricingHeaderProps) => {
  return (
    <motion.div
      className="flex max-w-2xl flex-col items-center gap-4 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl lg:text-6xl"
        variants={itemVariants}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </motion.h1>
      <motion.p
        className="text-base font-normal leading-normal text-white/70 md:text-lg"
        variants={itemVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
