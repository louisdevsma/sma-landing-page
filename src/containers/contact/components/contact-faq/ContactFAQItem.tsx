"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ContactFAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const ContactFAQItem = ({
  question,
  answer,
  defaultOpen = false,
}: ContactFAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg bg-white/5 p-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between gap-1.5 text-white"
      >
        <h3 className="text-left text-lg font-medium">{question}</h3>
        <motion.span
          className="relative size-5 shrink-0"
          animate={{ rotate: isOpen ? 0 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span
            className="material-symbols-outlined absolute inset-0"
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            add
          </motion.span>
          <motion.span
            className="material-symbols-outlined absolute inset-0"
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            remove
          </motion.span>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ overflow: "hidden" }}
          >
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
