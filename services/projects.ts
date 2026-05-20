import { ProjectItem } from "@/common/types/projects";

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Portfolio Website",
    slug: "onic-portfolio",
    description:
      "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies.",
    image: "/images/projects/portfolio.png",
    link_demo: "https://onic-gustino-id.vercel.app",
    link_github: "https://github.com/Onic1234/onic-gustino-id",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
    is_show: true,
    is_featured: true,
  },
];

// Projects service - Supabase functionality removed
export const getProjectsData = async (): Promise<ProjectItem[]> => {
  return PROJECTS_DATA;
};

export const getProjectsDataBySlug = async (
  slug: string
): Promise<ProjectItem | null> => {
  return PROJECTS_DATA.find((p) => p.slug === slug) || null;
};
