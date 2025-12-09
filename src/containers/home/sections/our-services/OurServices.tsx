"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { paths } from "@/config/paths";
import { ServiceItem } from "./ServiceItem";

export const OUR_SERVICES = [
  {
    icon: "code",
    title: "Landing Page",
    slug: "landing-page",
    description:
      "Creating fast, responsive, and conversion-driven landing pages that deliver a strong first impression and measurable results.",
  },
  {
    icon: "storefront",
    title: "Ecommerce Website",
    slug: "ecommerce-website",
    description:
      "Building secure, scalable eCommerce websites with smooth user flows, optimized checkout, and intuitive product management.",
  },
  {
    icon: "business",
    title: "Business Website",
    slug: "business-website",
    description:
      "Developing professional business websites with clean design and user-focused experiences that strengthen brand credibility.",
  },
  {
    icon: "design_services",
    title: "Design on demand",
    slug: "design-on-demand",
    description:
      "Providing tailored UI/UX design solutions— from concept to final visuals—crafted to elevate your brand's digital presence.",
  },
  {
    icon: "search_insights",
    title: "SEO",
    slug: "seo",
    description:
      "Enhancing your online visibility with data-driven SEO strategies that improve search rankings, increase traffic, and support sustainable growth.",
  },
  {
    icon: "smart_toy",
    title: "AI Website Builder",
    slug: "ai-website-builder",
    description:
      "Introducing an AI-powered website builder that enables instant creation and customization of modern, high-quality websites. (Coming soon)",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const OurServices = () => {
  return (
    <motion.section
      id="services"
      className="py-16 md:py-24 w-full"
      variants={sectionVariants}
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
            Our Services
          </h2>
          <p className="text-base font-normal leading-normal text-muted">
            We deliver modern, reliable SMA Solutions that empower businesses to
            grow, innovate, and stay ahead in the ever-evolving digital
            landscape.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
        >
          {OUR_SERVICES.map((service) => (
            <motion.div
              className="flex"
              key={service.title}
              variants={itemVariants}
            >
              <Link className="flex" href={`${paths.pricing}/${service.slug}`}>
                <ServiceItem {...service} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
