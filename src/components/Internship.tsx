import Image from "next/image";
import { internshipData } from "@/data/internship";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { Building2, ShieldCheck } from "lucide-react";

export default function Internship() {
  return (
    <section id="internship" className="py-24 bg-luxury-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading title="Internship Experience" subtitle="Professional exposure in cybersecurity environments." />
        </MotionWrapper>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <MotionWrapper>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-luxury-border bg-white shadow-xl group">
              <Image 
                src="/certificate.png" 
                alt="EyeQ Dot Net Pvt Ltd Internship Certificate" 
                fill 
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2} className="space-y-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white shadow-sm rounded-xl border border-luxury-border">
                  <Building2 className="text-luxury-text" size={28} />
                </div>
                <h3 className="text-3xl font-black text-luxury-text tracking-tight">{internshipData.company}</h3>
              </div>
              <p className="text-luxury-muted text-lg leading-relaxed font-medium">
                {internshipData.description}
              </p>
            </div>
            
            <div className="bg-white shadow-lg shadow-luxury-text/5 border border-luxury-border p-8 rounded-2xl">
              <h4 className="flex items-center text-sm font-bold uppercase text-luxury-text mb-6 tracking-widest">
                <ShieldCheck className="text-cyber-cyan mr-3" size={20} />
                Key Focus Areas
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                {internshipData.focus.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,150,199,0.5)]"></div>
                    <span className="text-sm font-bold text-luxury-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
