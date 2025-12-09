"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { paths } from "@/config/paths";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Footer = () => {
  return (
    <motion.footer
      className="w-full border-t border-solid border-white/10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="sma-container flex flex-col gap-8 pt-20 pb-24 text-center"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center md:justify-between gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center gap-x-8 gap-y-4"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                className="text-muted-foreground text-base font-normal leading-normal hover:text-white transition-colors"
                href={paths.privacy_policy}
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                className="text-muted-foreground text-base font-normal leading-normal hover:text-white transition-colors"
                href={paths.terms_of_service}
              >
                Terms of Service
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 flex-wrap justify-center"
            variants={itemVariants}
          >
            <motion.a
              className="flex items-center gap-2 text-muted-foreground text-base font-normal leading-normal hover:text-white transition-colors"
              href="mailto:smasoftsolutions@gmail.com"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="material-symbols-outlined text-xl">email</span>
              <span>smasoftsolutions@gmail.com</span>
            </motion.a>
            <motion.a
              className="flex items-center gap-2 text-muted-foreground text-base font-normal leading-normal hover:text-white transition-colors"
              href="tel:+84123456789"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="material-symbols-outlined text-xl">call</span>
              <span>(+84) 123 456 789</span>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            className="text-muted-foreground hover:text-white transition-colors"
            data-alt="Facebook icon"
            href="https://www.facebook.com/sma.solutions"
            variants={iconVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </motion.a>
          <motion.a
            className="text-muted-foreground hover:text-white transition-colors"
            data-alt="LinkedIn icon"
            href="https://www.linkedin.com/company/sma-solutions"
            variants={iconVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect height="12" width="4" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </motion.a>
          <motion.a
            className="text-muted-foreground hover:text-white transition-colors"
            data-alt="Twitter icon"
            href="https://x.com/sma_solutions"
            variants={iconVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.8 1.4c-.7 0-1.4-.2-2.1-.4 0 0-4.1 7.4-13.2 7.4-4.1 0-7.4-2.8-7.4-2.8s2.8.2 4.1.2c2.8 0 5.6-1.4 5.6-1.4s-2.8-.2-4.1-2.8c0 0 .2.2.7.2.7 0 1.4-.2 1.4-.2s-2.8-1.4-2.8-4.1c0 0 .7.2 1.4.2C4.1 7.6 2.8 5 2.8 5s2.8 3.4 7.4 3.4c0-.7 0-1.4 0-1.4.7-2.1 2.8-3.4 4.8-3.4s3.4 1.4 3.4 1.4Z"></path>
            </svg>
          </motion.a>
          <motion.a
            className="text-muted-foreground hover:text-white transition-colors"
            data-alt="GitHub icon"
            href="https://github.com/sma-solutions"
            variants={iconVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </motion.a>
        </motion.div>
        <motion.p
          className="text-muted-foreground text-xs font-normal leading-normal"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} SMA Solutions. All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};
