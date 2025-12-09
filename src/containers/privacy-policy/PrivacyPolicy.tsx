"use client";

import { motion } from "framer-motion";
import {
  PrivacyPolicyContent,
  PrivacyPolicyHeader,
  PrivacyPolicyTableOfContents,
} from "./components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const PrivacyPolicy = () => {
  const headerData = {
    title: "Privacy Policy",
    description:
      "Your privacy is important to us. It is SMA Solutions' policy to respect your privacy regarding any information we may collect from you across our website. Last updated: October 26, 2023.",
  };

  const tableOfContentsData = {
    title: "Table of Contents",
    description: "Navigate the policy",
    items: [
      {
        id: "introduction",
        label: "Introduction",
        icon: "info",
      },
      {
        id: "info-collect",
        label: "Information We Collect",
        icon: "database",
      },
      {
        id: "info-use",
        label: "How We Use Information",
        icon: "manage_accounts",
      },
      {
        id: "info-share",
        label: "Information Sharing",
        icon: "share",
      },
      {
        id: "user-rights",
        label: "Your Rights",
        icon: "person",
      },
      {
        id: "data-security",
        label: "Data Security",
        icon: "verified_user",
      },
      {
        id: "cookie-policy",
        label: "Cookie Policy",
        icon: "cookie",
      },
      {
        id: "contact-info",
        label: "Contact Information",
        icon: "alternate_email",
      },
    ],
  };

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content:
        "This Privacy Policy outlines SMA Solutions' commitment to protecting the privacy of our users. We are dedicated to safeguarding any personal information we collect and providing transparency about how we use and share it. This policy applies to all information collected through our website and services.",
    },
    {
      id: "info-collect",
      title: "2. Information We Collect",
      content:
        "We collect information to provide and improve our services. This includes information you provide directly, such as your name and email when you fill out a contact form, and information we get from your use of our services, like log data and device information.",
    },
    {
      id: "info-use",
      title: "3. How We Use Information",
      content:
        "The information we collect is used to operate, maintain, and enhance our services, to communicate with you, to provide customer support, and to protect our company and our users from fraudulent or illegal activity. We do not use your personal information for purposes other than those for which it was collected.",
    },
    {
      id: "info-share",
      title: "4. Information Sharing",
      content:
        "We do not share your personal information with companies, organizations, or individuals outside of SMA Solutions except in the following cases: with your consent, for legal reasons such as complying with a law or regulation, or with trusted partners who process it for us based on our instructions and in compliance with our Privacy Policy.",
    },
    {
      id: "user-rights",
      title: "5. Your Rights",
      content:
        "You have the right to access, update, or delete your personal information at any time. You can also object to the processing of your data. To exercise these rights, please contact us using the information provided at the end of this policy.",
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content:
        "We work hard to protect SMA Solutions and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We implement a variety of security measures including encryption and authentication tools to maintain the safety of your personal information.",
    },
    {
      id: "cookie-policy",
      title: "7. Cookie Policy",
      content:
        "We use cookies to help improve your experience of our website. A cookie is a small file that is placed on your device. It enables us to remember your actions and preferences over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.",
    },
    {
      id: "contact-info",
      title: "8. Contact Information",
      content:
        "If you have any questions about this Privacy Policy, please feel free to contact us. You can reach our privacy team via email or through our website's contact form.",
    },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={childVariants}>
        <PrivacyPolicyHeader
          title={headerData.title}
          description={headerData.description}
        />
      </motion.div>
      <motion.div className="sma-container pb-20" variants={childVariants}>
        <div className="flex flex-col w-full lg:flex-row gap-12">
          <PrivacyPolicyTableOfContents
            title={tableOfContentsData.title}
            description={tableOfContentsData.description}
            items={tableOfContentsData.items}
          />
          <PrivacyPolicyContent sections={sections} />
        </div>
      </motion.div>
    </motion.div>
  );
};
