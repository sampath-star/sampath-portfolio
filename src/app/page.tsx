import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectsGrid from "@/components/ProjectsGrid";
import SecurityToolkit from "@/components/SecurityToolkit";
import AIDataSection from "@/components/AIDataSection";
import Internship from "@/components/Internship";
import ProblemSolving from "@/components/ProblemSolving";
import BrandStatement from "@/components/BrandStatement";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsMatrix />
      <ProjectsGrid preview />
      <SecurityToolkit />
      <AIDataSection />
      <Internship />
      <ProblemSolving />
      <BrandStatement />
      <Contact />
    </>
  );
}
