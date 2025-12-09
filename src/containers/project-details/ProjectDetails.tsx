"use client";

import { motion } from "framer-motion";
import {
  ProjectDetailsCTA,
  ProjectInfos,
  ThumbnailHero,
  VisualShowcase,
} from "./sections";
import { RelatedProjects } from "./sections/related-projects/RelatedProjects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const ProjectDetails = () => {
  return (
    <motion.div
      className="w-full py-16 md:py-24 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="sma-container flex flex-col gap-16 sm:gap-24">
        <motion.div variants={sectionVariants}>
          <ThumbnailHero
            title="Revolutionizing FinTech with a Cloud-Native Platform"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuALFMPdR7JO5OvTDiiB4JLC5iiDHeC9GKPtl892R-PwoetDkys27E-0poiXAfhQEAHktRz6iMxo5AeVrSGQ5a_y1-ZdgbGqNR8TAOlHAzu0_y-InQMK1WaltSL2sKkYVK2eu0dIQH6pHkEZ_akO-YZ74oNo1ru9fr7Ip4nABx93jrmnLZne4gAJZczOcYZ9NHKHTw4gtYxRKaEnqOr6SClbfqaOuSwCRYX5QVSj0q3IqBBc2JPvoXVoSRotDd-lKFeAgJUIS_Bv154O"
            category="Fintech Platform"
          />
        </motion.div>

        <motion.div className="flex flex-col gap-8" variants={sectionVariants}>
          <ProjectInfos
            description="FinCorp Innovations faced significant scalability issues with their legacy monolithic system. It hindered their ability to rapidly deploy new features, integrate with third-party services, and handle peak user loads, which was critical for their growth in the competitive FinTech market."
            client="FinCorp Innovations"
            services="Cloud Architecture, Web Development, UI/UX Design"
            industry="Financial Technology"
            year="2023"
            timeline="2 Weeks"
            challenge="FinCorp Innovations faced significant scalability issues with their legacy monolithic system. It hindered their ability to rapidly deploy new features, integrate with third-party services, and handle peak user loads, which was critical for their growth in the competitive FinTech market."
            solution="We engineered a fully cloud-native platform from the ground up, built on a microservices architecture. This provided unparalleled scalability and resilience. The new system allowed for independent deployment of services, faster development cycles, and seamless integration with modern APIs, giving FinCorp a true competitive edge."
          />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <VisualShowcase
            images={[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCrdYx7aamJWh1f7H-MeXSoF4yOR0CY4Q68zOipbVOJMr73K4FY-MtSfSaLYBGKlIusc_aJTJ57sPWo1XE_gm0i6nddf7JQ5t-5qISVs1IeZoJ04ibxguFYgEitIIfP0obXL0-PBX4MOJ3b6i_VFM0POr6WkAgUP_2WGyRNYHnPURZGr2D222FASPZznz3pD2ELelRlPGn4Ab3kZTDKz-iNRXQB8lnX8AfHEoxBVn2LCEQbQdYAOGzyVKkEtO-RhM9kLLKZZKgB6slG",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDigpHcoEh3z2rpQ54gJH95Hlw_KFa7s4QrlccIJoxfiCZfmW7z5uXiAI9Oib5Tm3ff5drj7uriqvKrq3NipSe4M0lpHah7HammQlZtbnogCDgXyUrbsTjsfbFOuhoxEAvkGx6s-3vWm3lTta0_kjL8gsN0h1FqQQ1ebsWycHk7olmfLZ7fBSkxi50AA-aUmzqU2mQRPvJ6fCWq4GfUMx_0I2t0p3d_uYIkLO8mUOzrkeDe6c4pXAuqSoslENk5S6nWSsGekzK3muFW",
            ]}
          />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <RelatedProjects
            projects={[
              {
                title: "AI-Powered E-commerce Platform",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzFpD96gWn3EBKZJW8gt8pCxsQ-O7ik2Zyl-z5C6uSRWkkSovqujymyGt1Awy-aZLUZZGtNQz8rtItgcwRIkmUbWiriZAk8r6Aq7eeNZOjMbelMwizToaoUwPfbCXSU-fvi1cTHBPUAZQSiJaqSkxRf6FNSVwR6CXgu8vrbgvY81X64LW0XQz4m82kiAXbqq98pQ_rMkUAlyfFhGJ-nus3UxJvDznPVGMwYCk-dMRWwtuGs-6HbIPAc3JrwfuVf-FyrJVFdkDe8_6",
                slug: "/project-1",
                category: "E-commerce",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Telehealth Mobile Application",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzFpD96gWn3EBKZJW8gt8pCxsQ-O7ik2Zyl-z5C6uSRWkkSovqujymyGt1Awy-aZLUZZGtNQz8rtItgcwRIkmUbWiriZAk8r6Aq7eeNZOjMbelMwizToaoUwPfbCXSU-fvi1cTHBPUAZQSiJaqSkxRf6FNSVwR6CXgu8vrbgvY81X64LW0XQz4m82kiAXbqq98pQ_rMkUAlyfFhGJ-nus3UxJvDznPVGMwYCk-dMRWwtuGs-6HbIPAc3JrwfuVf-FyrJVFdkDe8_6",
                slug: "/project-2",
                category: "Healthcare",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Cloud Data Analytics SaaS",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzFpD96gWn3EBKZJW8gt8pCxsQ-O7ik2Zyl-z5C6uSRWkkSovqujymyGt1Awy-aZLUZZGtNQz8rtItgcwRIkmUbWiriZAk8r6Aq7eeNZOjMbelMwizToaoUwPfbCXSU-fvi1cTHBPUAZQSiJaqSkxRf6FNSVwR6CXgu8vrbgvY81X64LW0XQz4m82kiAXbqq98pQ_rMkUAlyfFhGJ-nus3UxJvDznPVGMwYCk-dMRWwtuGs-6HbIPAc3JrwfuVf-FyrJVFdkDe8_6",
                slug: "/project-3",
                category: "SaaS",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Project 4",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzFpD96gWn3EBKZJW8gt8pCxsQ-O7ik2Zyl-z5C6uSRWkkSovqujymyGt1Awy-aZLUZZGtNQz8rtItgcwRIkmUbWiriZAk8r6Aq7eeNZOjMbelMwizToaoUwPfbCXSU-fvi1cTHBPUAZQSiJaqSkxRf6FNSVwR6CXgu8vrbgvY81X64LW0XQz4m82kiAXbqq98pQ_rMkUAlyfFhGJ-nus3UxJvDznPVGMwYCk-dMRWwtuGs-6HbIPAc3JrwfuVf-FyrJVFdkDe8_6",
                slug: "/project-4",
                category: "E-commerce",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
            ]}
          />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ProjectDetailsCTA />
        </motion.div>
      </div>
    </motion.div>
  );
};
