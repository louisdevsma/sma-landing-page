"use client";

import { paths } from "@/config/paths";
import { Link } from "@/i18n/navigation";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ProjectDetailsCTA = () => {
  return (
    <motion.section
      className="flex flex-col gap-6 items-center text-center bg-white/5 p-12 rounded-xl border border-white/10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white max-w-2xl font-display"
        variants={itemVariants}
      >
        Ready to build <span className="gradient-text">the next big thing</span>
        ?
      </motion.h2>
      <motion.p
        className="text-white/70 max-w-lg font-display"
        variants={itemVariants}
      >
        Let's turn your idea into a reality. We're here to help you navigate the
        complexities of technology and build a solution that drives results.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link href={paths.contact}>
          <Button
            color="primary"
            className="font-semibold transition-transform duration-300 hover:scale-105"
            size="lg"
          >
            Start Your Project
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};
