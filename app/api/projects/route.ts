export async function GET() {
  try {
    // Import all MDX files from contents/projects
    // This is a simple implementation that returns mock project data
    // In production, you would parse the actual MDX files
    const projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description:
          "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS",
        image: "/images/projects/portfolio.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://onic-gustino-id.vercel.app",
        github: "https://github.com/Onic1234/onic-gustino-id",
        is_show: true,
        is_featured: true,
      },
    ];

    return Response.json(projects);
  } catch (error) {
    console.error("Projects API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
