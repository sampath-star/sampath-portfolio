import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import { TerminalSquare, Search, Bug, Shield, Server, Network, Fingerprint, Code } from "lucide-react";

const tools = [
  { name: "Kali Linux", icon: <TerminalSquare size={24} />, desc: "Security OS", focus: "Infrastructure" },
  { name: "Nmap", icon: <Network size={24} />, desc: "Network Mapper", focus: "Reconnaissance" },
  { name: "Burp Suite Pro", icon: <Bug size={24} />, desc: "Web vulnerability scanner", focus: "Web Security" },
  { name: "Autopsy", icon: <Fingerprint size={24} />, desc: "Digital Forensics", focus: "Investigation" },
  { name: "SQL Injection", icon: <Code size={24} />, desc: "Vulnerability testing", focus: "Database" },
  { name: "OWASP", icon: <Shield size={24} />, desc: "Security practices", focus: "Standards" },
  { name: "Network Security", icon: <Server size={24} />, desc: "Infrastructure protection", focus: "Architecture" },
  { name: "OSINT", icon: <Search size={24} />, desc: "Open-source intelligence", focus: "Reconnaissance" },
];

export default function SecurityToolkit() {
  return (
    <section className="py-24 bg-luxury-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading title="Security Toolkit" subtitle="Technologies and frameworks used for vulnerability analysis and system hardening." />
        </MotionWrapper>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <MotionWrapper key={tool.name} delay={idx * 0.05}>
              <div className="bg-white border border-luxury-border rounded-2xl p-6 hover:shadow-xl transition-all group flex flex-col h-full hover:-translate-y-1">
                <div className="p-3 bg-luxury-cream rounded-xl text-luxury-muted group-hover:bg-cyber-cyan/10 group-hover:text-cyber-cyan transition-colors mb-6 self-start">
                  {tool.icon}
                </div>
                <h4 className="font-black text-luxury-text mb-2 text-lg">{tool.name}</h4>
                <p className="text-sm text-luxury-muted mb-6 font-medium flex-grow">{tool.desc}</p>
                <div className="inline-block px-3 py-1 bg-luxury-cream rounded-full text-[10px] font-bold text-luxury-muted self-start">
                  {tool.focus}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
