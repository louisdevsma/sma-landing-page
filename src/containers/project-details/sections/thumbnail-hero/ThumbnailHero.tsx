"use client";

import { motion } from "framer-motion";

interface ThumbnailHeroProps {
  title: string;
  image: string;
  category: string;
}

const categoryVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export const ThumbnailHero = ({
  title,
  image,
  category,
}: ThumbnailHeroProps) => {
  return (
    <section className="flex flex-col gap-8 text-center items-center">
      <motion.span
        className="inline-block bg-primary/20 text-secondary text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-2"
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {category}
      </motion.span>
      <motion.h1
        className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] max-w-3xl font-display"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 md:min-h-[480px] mt-8 border border-white/10 shadow-2xl shadow-primary/10"
        data-alt="Abstract hero image showing digital financial data streams"
        style={{
          backgroundImage: `url('${image}')`,
        }}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      />
    </section>
  );
};
