import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects | Sampath S Hebbar",
  description: "Explore my academic research and practical system development projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <ProjectsGrid />
    </div>
  );
}
