import { getProjectsData } from "@/services/projects";

export async function GET() {
  try {
    const projects = await getProjectsData();
    return Response.json(projects);
  } catch (error) {
    console.error("Projects API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
