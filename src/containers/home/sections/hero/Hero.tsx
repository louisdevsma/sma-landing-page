"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ScrollIndicator } from "../../components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Hero = () => {
  return (
    <section id="hero" className="relative py-20 md:py-32 min-h-screen">
      <div id="tsparticles" />
      <motion.div
        className="relative z-10 sma-container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-3xl">
          <motion.h1
            className="text-4xl font-black leading-tight tracking-tighter text-white md:text-6xl"
            variants={itemVariants}
          >
            Transforming Ideas into <br />
            <span className="gradient-text">Digital Realities</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-base font-normal leading-normal text-[#A0A0A0] md:text-lg"
            variants={itemVariants}
          >
            We specialize in crafting bespoke web, mobile, and cloud solutions
            that drive growth and innovation for your business.
          </motion.p>
          <motion.div
            className="mt-8 mb-10 flex flex-wrap justify-center gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div variants={buttonVariants}>
              <Button
                color="primary"
                className="font-semibold transition-transform duration-300 hover:scale-105"
                size="lg"
              >
                Explore Our Solutions
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link href="/projects">
                <Button
                  className="font-semibold transition-transform duration-300 hover:scale-105"
                  size="lg"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ScrollIndicator nextSection="our-clients" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
