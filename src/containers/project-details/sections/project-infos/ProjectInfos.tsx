"use client";

import { motion, type Variants } from "framer-motion";

interface ProjectInfosProps {
  description: string;
  client: string;
  services: string;
  industry: string;
  year: string;
  timeline: string;
  challenge: string;
  solution: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const ProjectInfos = ({
  description,
  client,
  services,
  industry,
  year,
  timeline,
  challenge,
  solution,
}: ProjectInfosProps) => {
  return (
    <>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col gap-1 rounded-lg bg-white/5 p-6 border border-white/10"
          variants={itemVariants}
        >
          <p className="text-white/60 text-sm font-normal leading-normal font-display">
            CLIENT
          </p>
          <p className="text-white text-base font-bold leading-tight font-display">
            {client}
          </p>
          <p className="text-white/60 text-sm font-normal leading-normal mt-2 font-display">
            {description}
          </p>
        </motion.div>
        <motion.div
          className="md:col-span-2 grid grid-cols-2 gap-x-4"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-1 border-t border-solid border-white/10 py-4"
            variants={itemVariants}
          >
            <p className="text-white/60 text-sm font-normal leading-normal font-display">
              Services
            </p>
            <p className="text-white text-sm font-normal leading-normal font-display">
              {services}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-1 border-t border-solid border-white/10 py-4"
            variants={itemVariants}
          >
            <p className="text-white/60 text-sm font-normal leading-normal font-display">
              Industry
            </p>
            <p className="text-white text-sm font-normal leading-normal font-display">
              {industry}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-1 border-t border-solid border-white/10 py-4"
            variants={itemVariants}
          >
            <p className="text-white/60 text-sm font-normal leading-normal font-display">
              Year
            </p>
            <p className="text-white text-sm font-normal leading-normal font-display">
              {year}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-1 border-t border-solid border-white/10 py-4"
            variants={itemVariants}
          >
            <p className="text-white/60 text-sm font-normal leading-normal font-display">
              Timeline
            </p>
            <p className="text-white text-sm font-normal leading-normal font-display">
              {timeline}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h2 className="text-2xl font-bold tracking-tight text-white font-display">
            The <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-white/70 leading-relaxed font-display">
            {challenge}
          </p>
        </motion.div>
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h2 className="text-2xl font-bold tracking-tight text-white font-display">
            Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-white/70 leading-relaxed font-display">
            {solution}
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};
