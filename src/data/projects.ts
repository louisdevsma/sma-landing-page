export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
}

/**
 * Get all projects
 * In the future, this can be replaced with an API call or database query
 */
export async function getAllProjects(): Promise<Project[]> {
  // TODO: Replace with actual data source (API, database, CMS, etc.)
  // For now, return static data
  return [
    {
      title: "Project 1",
      slug: "project-1",
      category: "Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_1.webp",
    },
    {
      title: "Project 2",
      slug: "project-2",
      category: "E-commerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_2.webp",
    },
    {
      title: "Project 3",
      slug: "project-3",
      category: "Business Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_3.webp",
    },
    {
      title: "Project 4",
      slug: "project-4",
      category: "Web App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_4.webp",
    },
    {
      title: "Project 5",
      slug: "project-5",
      category: "Design on demand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_5.webp",
    },
    {
      title: "Project 6",
      slug: "project-6",
      category: "Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/assets/images/projects/project_mockup_6.webp",
    },
  ];
}

/**
 * Get all project slugs
 */
export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map((project) => project.slug);
}
