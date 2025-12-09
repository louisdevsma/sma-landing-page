"use client";

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    icon: "search",
    title: "Discovery",
    description: "Understanding your vision and project goals.",
  },
  {
    icon: "palette",
    title: "Design",
    description: "Crafting intuitive and engaging user experiences.",
  },
  {
    icon: "code_blocks",
    title: "Development",
    description: "Bringing the design to life with clean, efficient code.",
  },
  {
    icon: "rocket_launch",
    title: "Deployment",
    description: "Launching your project for the world to see.",
  },
  {
    icon: "support_agent",
    title: "Support",
    description: "Providing ongoing maintenance and support.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const OurProcess = () => {
  return (
    <motion.section
      id="our-process"
      className="py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="sma-container">
        <motion.div
          className="flex flex-col gap-4 max-w-3xl mb-12 text-center mx-auto"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.033em] text-white md:text-4xl">
            Our Process
          </h2>
          <p className="text-base font-normal leading-normal text-[#A0A0A0]">
            We follow a structured and transparent process to ensure the
            successful delivery of every project, from concept to launch and
            beyond.
          </p>
        </motion.div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            className="absolute left-0 right-0 top-[40%] -translate-y-1/2 h-0.5 bg-white/10 hidden lg:block origin-left"
            variants={lineVariants}
          ></motion.div>
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.title}
              className="relative flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background-dark z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="material-symbols-outlined text-2xl gradient-text">
                  {step.icon}
                </span>
              </motion.div>
              <h3 className="text-lg font-bold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-normal leading-normal text-[#A0A0A0]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
