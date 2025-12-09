"use client";

import { motion } from "framer-motion";

interface PrivacyPolicyHeaderProps {
  title: string;
  description: string;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const PrivacyPolicyHeader = ({
  title,
  description,
}: PrivacyPolicyHeaderProps) => {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="sma-container text-center">
        <motion.div
          className="flex flex-col w-full items-center justify-center gap-4"
          variants={headerVariants}
        >
          <motion.h1
            className="gradient-text text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl"
            variants={titleVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="max-w-3xl text-white/70 text-base font-normal leading-relaxed md:text-lg"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
