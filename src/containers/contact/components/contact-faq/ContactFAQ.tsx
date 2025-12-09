"use client";

import { motion } from "framer-motion";
import { ContactFAQItem } from ".";

interface ContactFAQData {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface ContactFAQProps {
  title: string;
  description: string;
  items: ContactFAQData[];
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const ContactFAQ = ({ title, description, items }: ContactFAQProps) => {
  return (
    <div className="py-16 sm:py-20">
      <motion.div
        className="flex flex-col items-center gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center gradient-text"
          variants={headerVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-base md:text-lg font-normal leading-normal max-w-2xl text-center"
          variants={headerVariants}
        >
          {description}
        </motion.p>
        <motion.div
          className="w-full max-w-4xl mt-8 space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ContactFAQItem
                question={item.question}
                answer={item.answer}
                defaultOpen={item.defaultOpen}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
