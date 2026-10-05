import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";

const problemSolvingSteps = [
  { step: "01", title: "UNDERSTAND", description: "Understand the problem and requirements." },
  { step: "02", title: "RESEARCH", description: "Research technologies, data and possible approaches." },
  { step: "03", title: "ANALYZE", description: "Analyze information, risks and patterns." },
  { step: "04", title: "BUILD", description: "Create a practical solution." },
  { step: "05", title: "SECURE", description: "Think about security, reliability and responsible use." },
  { step: "06", title: "IMPROVE", description: "Test, learn and continuously improve." },
];

export default function ProblemSolving() {
  return (
    <section className="py-24 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <SectionHeading title="HOW I APPROACH A PROBLEM" />
        </MotionWrapper>
        
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-luxury-border hidden md:block -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {problemSolvingSteps.map((step, idx) => (
              <MotionWrapper key={step.step} delay={idx * 0.1} className="relative">
                <div className="flex flex-row md:flex-col items-center md:items-start group">
                  {/* Step Number Dot */}
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl border border-luxury-border flex items-center justify-center font-bold text-luxury-muted group-hover:border-cyber-cyan group-hover:text-cyber-cyan group-hover:-translate-y-1 transition-all z-10 shrink-0 text-lg">
                    {step.step}
                  </div>
                  
                  {/* Vertical line for mobile */}
                  <div className="w-px h-full bg-luxury-border absolute left-7 top-14 md:hidden z-0"></div>
                  
                  <div className="ml-8 md:ml-0 md:mt-8">
                    <h4 className="text-sm font-black tracking-widest text-luxury-text mb-3 group-hover:text-cyber-cyan transition-colors">{step.title}</h4>
                    <p className="text-sm font-medium text-luxury-muted leading-relaxed md:pr-4">{step.description}</p>
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
