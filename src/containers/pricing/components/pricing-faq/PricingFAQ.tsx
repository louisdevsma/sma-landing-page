"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface PricingFAQProps {
  title: string;
  items: FAQItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const answerVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
      opacity: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
      opacity: {
        duration: 0.2,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  },
};

const iconVariants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const PricingFAQ = ({ title, items }: PricingFAQProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(
    new Set(
      items
        .map((item, index) => (item.isOpen ? index : -1))
        .filter((i) => i !== -1),
    ),
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      className="flex w-full max-w-3xl flex-col gap-8 px-4 pt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h4
        className="text-2xl font-bold leading-normal tracking-[-0.015em] text-white"
        variants={titleVariants}
      >
        {title}
      </motion.h4>
      <div className="flex flex-col">
        {items.map((item, index) => {
          const isOpen = openItems.has(index);
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col border-t border-t-white/20 py-2 ${
                index === items.length - 1 ? "border-y border-y-white/20" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex cursor-pointer list-none items-center justify-between gap-6 py-2 text-left"
              >
                <p className="text-sm font-medium leading-normal text-white">
                  {item.question}
                </p>
                <motion.span
                  className="material-symbols-outlined text-xl text-white/70"
                  variants={iconVariants}
                  animate={isOpen ? "open" : "closed"}
                >
                  expand_more
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    variants={answerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <p className="pb-2 text-left text-sm font-normal leading-normal text-white/70">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
