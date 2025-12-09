"use client";

import { Pagination } from "@heroui/pagination";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import {
  ProjectCard,
  ProjectCategories,
} from "@/containers/projects/components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const paginationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

const projects = [
  {
    id: 1,
    title: "Project 1",
    url: images.projects.project_mockup_1,
    slug: "/p/project-1",
    category: "Landing Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    title: "Project 2",
    url: images.projects.project_mockup_2,
    slug: "/p/project-2",
    category: "E-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    title: "Project 3",
    url: images.projects.project_mockup_3,
    slug: "/p/project-3",
    category: "Business Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    title: "Project 4",
    url: images.projects.project_mockup_4,
    slug: "/p/project-4",
    category: "Web App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 5,
    title: "Project 5",
    url: images.projects.project_mockup_5,
    slug: "/p/project-5",
    category: "Design on demand",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 6,
    title: "Project 6",
    url: images.projects.project_mockup_6,
    slug: "/p/project-6",
    category: "Landing Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full py-16 md:py-24 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
    >
      <div className="sma-container flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-4 mb-4 text-center mx-auto"
          variants={titleVariants}
        >
          <h1 className="text-4xl font-black leading-tight tracking-tighter text-white md:text-6xl">
            Discover our{" "}
            <span className="gradient-text">standout projects</span>
          </h1>
          <p className="text-base font-normal leading-normal text-muted">
            See how our solutions elevate brands, accelerate growth, and bring
            real results to our clients.
          </p>
        </motion.div>

        <ProjectCategories />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <ProjectCard
                title={project.title}
                url={project.url}
                slug={project.slug}
                category={project.category}
                description={project.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center"
          variants={paginationVariants}
        >
          <Pagination
            variant="light"
            radius="full"
            classNames={{
              item: "[&[data-hover=true]:not([data-active=true])]:bg-primary/20 active:bg-primary/30",
              next: "[&[data-hover=true]:not([data-active=true])]:bg-primary/20 active:bg-primary/30",
              prev: "[&[data-hover=true]:not([data-active=true])]:bg-primary/20 active:bg-primary/30",
            }}
            showControls
            initialPage={1}
            total={10}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
