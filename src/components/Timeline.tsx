import { timelineSteps } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";

export default function Timeline() {
  return (
    <section className="py-24 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading title="Workflow Timeline" subtitle="Methodical approach to problem-solving and system design." />
        </MotionWrapper>
        
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-cyber-gray hidden md:block -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {timelineSteps.map((step, idx) => (
              <MotionWrapper key={step.step} delay={idx * 0.1} className="relative">
                <div className="flex flex-row md:flex-col items-center md:items-start group">
                  {/* Step Number Dot */}
                  <div className="w-12 h-12 rounded-full bg-cyber-dark border-2 border-cyber-gray flex items-center justify-center font-mono text-sm font-bold text-gray-400 group-hover:border-cyber-cyan group-hover:text-cyber-cyan transition-colors z-10 shrink-0">
                    {step.step}
                  </div>
                  
                  {/* Vertical line for mobile */}
                  <div className="w-px h-full bg-cyber-gray absolute left-6 top-12 md:hidden z-0"></div>
                  
                  <div className="ml-6 md:ml-0 md:mt-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed md:pr-4">{step.description}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
