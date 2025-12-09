"use client";

import { motion, type Variants } from "framer-motion";
import { WorkCard } from "./WorkCard";

const OUR_RECENT_WORKS = [
  {
    id: 1,
    title: "Fintech Platform",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4iyUXElYd3eVIVYvTS255tLVkrYOtzDxOGLFnGAaDOE0SRYrYYjwQzdhT2FrCm_Dq2bYdS4_7Di1O_ww5Dzsu0bGQ0e5S98xbLnEQ19gesh3dEhFLY323-f0gTKUTZav2ph4HmQngErssdvIgjPLaN1zOrvGBbWCjwBASm5TFwbnQD5031DlxdgS2rVKAZiWgI3fYJHsAHz5Uk7M_ZQyHM5ZDIvx8S--a9UToPHSEvwsvrdhUJAn4ldErHzIWKc4oJShAazlstF_S",
    slug: "/fintech-platform",
  },
  {
    id: 2,
    title: "E-commerce App",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuChkBeFRKfMSjJLzX9LKqh-RG-mh2oG6G9iNpk8yhMw8hAX_8qXwUFiax1g77V4jrnJVjwF0jZjucqwZV1VoB2iozU8SCPmOv9vbrqGckf7aCH10DYWJwRS7_DXFLy6C3YL_exdZrXG85TSvDum_lbeUVQhyKxThmcvcAjIIJllM5tuxOSyKLYyJoZDiSpQxas3fe0pwWI7DB8IG-6RigCPBw6ercU2Ukx4hGXUz1C7VRvF4I1mybVVOJu7xsIUihQAWLTA-g2DLdhd",
    slug: "/e-commerce-app",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const OurRecentWorks = () => {
  return (
    <motion.section
      className="py-16 md:py-24 w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="sma-container">
        <motion.div
          className="flex flex-col gap-4 mx-auto items-center max-w-3xl mb-12"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.033em] text-white md:text-4xl">
            Our Recent Works
          </h2>
        </motion.div>
        <motion.div
          className="grid w-full grid-cols-1 gap-8 md:grid-cols-2"
          variants={cardsContainerVariants}
        >
          {OUR_RECENT_WORKS.map((work) => (
            <motion.div
              className="col-span-1"
              key={work.id}
              variants={cardVariants}
            >
              <WorkCard {...work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
