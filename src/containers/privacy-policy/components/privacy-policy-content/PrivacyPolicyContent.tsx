"use client";

import { motion } from "framer-motion";
import { PrivacyPolicySection } from "../privacy-policy-section";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface PrivacyPolicyContentProps {
  sections: Section[];
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const PrivacyPolicyContent = ({
  sections,
}: PrivacyPolicyContentProps) => {
  return (
    <motion.div
      className="w-full lg:w-3/4 space-y-10"
      variants={contentVariants}
    >
      {sections.map((section) => (
        <motion.div key={section.id} variants={sectionVariants}>
          <PrivacyPolicySection
            id={section.id}
            title={section.title}
            content={section.content}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
