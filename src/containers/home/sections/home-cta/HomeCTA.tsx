"use client";

import { paths } from "@/config/paths";
import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const HomeCTA = () => {
  return (
    <motion.section
      className="py-16 md:py-24 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="sma-container">
        <motion.div
          className="rounded-xl p-8 md:p-16 text-center bg-cover bg-center bg-gradient-to-r from-blue-600/50 to-cyan-500/50"
          data-alt="Abstract tech background with a blue to cyan gradient overlay."
          variants={contentVariants}
        >
          <motion.div
            className="flex flex-col items-center gap-6 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold leading-tight tracking-[-0.033em] text-white md:text-4xl"
              variants={contentVariants}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p
              className="text-base font-normal text-white/90 md:text-lg"
              variants={contentVariants}
            >
              Let's collaborate to build something amazing. Reach out to us to
              discuss your ideas and see how we can help you achieve your goals.
            </motion.p>
            <motion.button
              className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={paths.contact}>
                <span className="truncate">Contact Us Now</span>
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
