"use client";

import { motion } from "framer-motion";
import {
  ContactFAQ,
  ContactForm,
  ContactHeader,
  ContactInfo,
} from "./components";

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

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const faqVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const Contact = () => {
  const contactInfoData = [
    {
      icon: "mail",
      label: "Email Address",
      value: "contact@itsolutions.com",
    },
    {
      icon: "call",
      label: "Phone Number",
      value: "(+84) 123 456 789",
    },
    {
      icon: "location_on",
      label: "Main Office",
      value: "123 Tech Avenue, Silicon Valley",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            clipRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      ),
    },
  ];

  const formFields = [
    {
      id: "full-name",
      name: "full-name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "John Doe",
      autoComplete: "name",
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email" as const,
      placeholder: "you@example.com",
      autoComplete: "email",
    },
    {
      id: "phone-number",
      name: "phone-number",
      label: "Phone number",
      type: "tel" as const,
      placeholder: "(+84) 123 456 789",
    },
    {
      id: "service",
      name: "service",
      label: "Service",
      type: "select" as const,
      options: [
        "Web Development",
        "Cloud Solutions",
        "Cybersecurity",
        "IT Consulting",
      ],
    },
    {
      id: "subject",
      name: "subject",
      label: "Subject",
      type: "text" as const,
      placeholder: "Regarding our project",
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea" as const,
      placeholder: "Enter your message here...",
      rows: 6,
    },
  ];

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of SMA Solutions including custom software development, cloud computing services, cybersecurity, data analytics, and IT consulting. Our goal is to provide comprehensive tech support for businesses of all sizes.",
      defaultOpen: true,
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The timeline for a project varies greatly depending on its scope and complexity. A simple website might take a few weeks, while a complex software development project could take several months. We provide a detailed project timeline after our initial consultation.",
    },
    {
      question: "How do you ensure the security of my data?",
      answer:
        "Data security is our top priority. We implement industry-best practices, including end-to-end encryption, regular security audits, access control policies, and compliance with data protection regulations like GDPR to ensure your information is always secure.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models to suit different needs, including fixed-price projects, time and materials, and dedicated team retainers. We'll work with you to determine the best model for your budget and project requirements. Contact us for a custom quote.",
    },
  ];

  return (
    <motion.section
      className="py-16 md:py-24 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col flex-1 gap-16 sma-container ">
        <div className="flex flex-col gap-12">
          <motion.div variants={headerVariants}>
            <ContactHeader
              title="Get in Touch"
              description="Ready to start your project? Send us a message and we'll get back to you shortly."
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-16"
            variants={sectionVariants}
          >
            <ContactInfo items={contactInfoData} socialLinks={socialLinks} />
            <ContactForm fields={formFields} submitButtonText="Send Message" />
          </motion.div>
        </div>
        <motion.div variants={faqVariants}>
          <ContactFAQ
            title="Frequently Asked Questions"
            description="Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us directly."
            items={faqData}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
