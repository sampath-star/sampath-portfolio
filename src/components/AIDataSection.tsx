import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { Bot, BarChart3, MessageSquareCode } from "lucide-react";

export default function AIDataSection() {
  return (
    <section className="py-24 bg-luxury-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <SectionHeading title="AI, Data & Prompt Engineering" subtitle="Leveraging artificial intelligence and data science for analytical advantages." />
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-white shadow-xl shadow-luxury-text/5 border border-luxury-border p-8 rounded-2xl h-full relative overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyber-blue/5 rounded-full blur-3xl group-hover:bg-cyber-blue/10 transition-all"></div>
              <div className="w-16 h-16 bg-cyber-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <Bot className="text-cyber-blue" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-luxury-text">AI Workflows</h3>
              <p className="text-luxury-muted text-sm leading-relaxed font-medium">
                Prompt design, structured AI workflows, research assistance and generative-AI applications for solving complex problems.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2}>
            <div className="bg-white shadow-xl shadow-luxury-text/5 border border-luxury-border p-8 rounded-2xl h-full relative overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all"></div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="text-purple-600" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-luxury-text">Data Analytics</h3>
              <p className="text-luxury-muted text-sm leading-relaxed font-medium">
                Data exploration, analysis, visualization and insight generation to support intelligence-driven decision making.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.3}>
            <div className="bg-white shadow-xl shadow-luxury-text/5 border border-luxury-border p-8 rounded-2xl h-full relative overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-3xl group-hover:bg-cyber-cyan/10 transition-all"></div>
              <div className="w-16 h-16 bg-cyber-cyan/10 rounded-2xl flex items-center justify-center mb-8">
                <MessageSquareCode className="text-cyber-cyan" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-luxury-text">GPT Expertise</h3>
              <p className="text-luxury-muted text-sm leading-relaxed font-medium">
                Using ChatGPT/GPT systems for research, productivity, rapid prototyping and structured problem solving.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
