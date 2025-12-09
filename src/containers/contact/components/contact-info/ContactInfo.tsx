"use client";

import { motion } from "framer-motion";
import { ContactSocialLinks } from "../contact-social-links";
import { ContactInfoItem } from "./ContactInfoItem";

interface ContactInfoData {
  icon: string;
  label: string;
  value: string;
}

interface ContactInfoProps {
  items: ContactInfoData[];
  socialLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const socialVariants = {
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

export const ContactInfo = ({ items, socialLinks }: ContactInfoProps) => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-10">
      <motion.div
        className="flex flex-col gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ContactInfoItem
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={socialVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactSocialLinks links={socialLinks} />
      </motion.div>
    </div>
  );
};
