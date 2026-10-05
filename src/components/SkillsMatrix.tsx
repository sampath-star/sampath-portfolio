import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { ShieldAlert, Terminal, BrainCircuit, Code2 } from "lucide-react";

const getIcon = (title: string) => {
  switch(title) {
    case "Cybersecurity": return <ShieldAlert className="text-cyber-red" size={24} />;
    case "Tools / Practice Areas": return <Terminal className="text-cyber-cyan" size={24} />;
    case "AI & Data": return <BrainCircuit className="text-cyber-blue" size={24} />;
    default: return <Code2 className="text-luxury-muted" size={24} />;
  }
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 bg-luxury-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <SectionHeading title="Expertise Matrix" subtitle="Areas of focus and practical tools." />
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <MotionWrapper key={category.title} delay={idx * 0.1}>
              <div className="bg-white shadow-xl shadow-luxury-text/5 p-8 rounded-2xl h-full transition-transform hover:-translate-y-2 border border-luxury-border">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-luxury-gray rounded-xl">
                    {getIcon(category.title)}
                  </div>
                  <h3 className="text-lg font-black text-luxury-text">{category.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start text-sm text-luxury-muted font-medium">
                      <span className="mr-3 text-cyber-cyan mt-0.5 text-xs">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
