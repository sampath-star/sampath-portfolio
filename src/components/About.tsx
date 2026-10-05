import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { Terminal, GraduationCap, Target, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading title="ABOUT ME" />
        </MotionWrapper>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <MotionWrapper className="lg:col-span-2 text-luxury-muted text-lg leading-relaxed space-y-6 font-medium">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-luxury-text mb-4 sm:mb-0">
                Sampath S Hebbar
                <span className="font-medium text-lg text-luxury-muted block mt-1">AI & Data Science Engineer | Cybersecurity Specialist</span>
              </h3>
            </div>
            
            <p>
              I am a certified cybersecurity professional and AI & Data Science engineer specializing in offensive security, vulnerability assessment, and intelligent systems architecture.
            </p>
            
            <div className="bg-white border border-luxury-border p-6 rounded-2xl shadow-sm my-6">
              <h4 className="font-bold text-luxury-text mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan mr-3"></span>
                Professional Certification
              </h4>
              <p className="text-sm font-bold text-luxury-text mb-1">Cyber Security Internship — EyeQ Dot Net Pvt. Ltd., India&apos;s Leading Cyber Security Company</p>
              <p className="text-xs text-luxury-muted mb-4 font-mono uppercase tracking-wide">Duration: December 2024 - April 2025 | Credential ID: 12/EYEQI365/24-25</p>
              <p className="text-sm"><strong className="text-luxury-text">Core Competencies:</strong> OWASP Top 10, Kali Linux, VAPT, Bug Hunting, Ethical Hacking</p>
            </div>
            
            <p>
              I work at the intersection of Artificial Intelligence, Data Science, and Cybersecurity — where I analyze complex systems, identify critical security gaps, and engineer resilient, data-driven solutions.
            </p>
            
            <p>
              My approach is systematic: understand the architecture, test its limits, secure its foundation. I build systems that are intelligent by design and secure by default.
            </p>
            
            <div className="py-5 border-y border-luxury-border my-6">
              <p className="text-sm leading-relaxed">
                <strong className="text-luxury-text uppercase tracking-widest text-[11px] mr-2 block mb-2">Expertise:</strong> 
                Cybersecurity Operations | Ethical Hacking & Penetration Testing | VAPT | AI Systems | Data Analytics | Prompt Engineering
              </p>
            </div>
            
            <p className="font-bold text-luxury-text text-xl italic font-serif">
              Driven by precision. Focused on impact. Built to lead.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2}>
            <div className="bg-white shadow-xl shadow-luxury-text/5 p-8 rounded-2xl space-y-8 relative overflow-hidden group border border-luxury-border sticky top-24">
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-luxury-muted font-bold tracking-widest uppercase mb-1">NAME</p>
                  <p className="text-sm text-luxury-text font-bold">Sampath S Hebbar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-luxury-muted font-bold tracking-widest uppercase mb-1">BRANCH</p>
                  <p className="text-sm text-luxury-text font-bold">Artificial Intelligence and Data Science</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-luxury-muted font-bold tracking-widest uppercase mb-1">FOCUS</p>
                  <p className="text-sm text-luxury-text font-bold">Cybersecurity + AI</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-luxury-muted font-bold tracking-widest uppercase mb-1">INTERESTS</p>
                  <p className="text-sm text-luxury-text font-bold">Ethical Hacking, VAPT, Data Analytics, Prompt Engineering, Generative AI</p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
