import SkillsMatrix from "@/components/SkillsMatrix";
import SecurityToolkit from "@/components/SecurityToolkit";
import AIDataSection from "@/components/AIDataSection";
import ProblemSolving from "@/components/ProblemSolving";

export const metadata = {
  title: "Skills | Sampath S Hebbar",
  description: "Technical skills and expertise in AI, Data Science, and Cybersecurity.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <SkillsMatrix />
      <SecurityToolkit />
      <AIDataSection />
      <ProblemSolving />
    </div>
  );
}
