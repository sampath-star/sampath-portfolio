import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import MotionWrapper from "./MotionWrapper";
import Link from "next/link";
import { ArrowRight, Lock, Database, Network } from "lucide-react";

export default function ProjectsGrid({ preview = false }: { preview?: boolean }) {
  const displayProjects = preview ? projects.slice(0, 3) : projects;

  const getIcon = (slug: string) => {
    switch (slug) {
      case "osint-investigation": return <Lock className="text-cyber-cyan mb-6" size={32} />;
      case "inventory-management": return <Database className="text-cyber-blue mb-6" size={32} />;
      case "autonomous-sdn-mtd": return <Network className="text-cyber-red mb-6" size={32} />;
      default: return <Lock className="text-cyber-cyan mb-6" size={32} />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title="Featured Projects" subtitle="Academic research and practical system development." />
            {preview && (
              <Link href="/projects" className="hidden sm:flex items-center text-luxury-text font-bold hover:text-cyber-cyan transition-colors mb-6 text-sm group">
                View All Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, idx) => (
            <MotionWrapper key={project.id} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-luxury-text/5 flex flex-col h-full border border-luxury-border transition-all hover:shadow-2xl hover:-translate-y-2 group">
                <div className="p-8 flex-grow">
                  {getIcon(project.slug)}
                  <h3 className="text-2xl font-black mb-4 text-luxury-text">{project.title}</h3>
                  <p className="text-luxury-muted text-sm leading-relaxed mb-8 font-medium">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1.5 bg-luxury-gray text-luxury-muted rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 border-t border-luxury-border bg-white">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center justify-between text-sm font-bold text-luxury-text group-hover:text-cyber-cyan transition-colors w-full"
                  >
                    View Case Study
                    <div className="w-8 h-8 rounded-full bg-luxury-gray flex items-center justify-center group-hover:bg-cyber-cyan group-hover:text-white transition-colors">
                      <ArrowRight size={16} className="" />
                    </div>
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
        
        {preview && (
          <div className="mt-12 text-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center text-luxury-text font-bold hover:text-cyber-cyan transition-colors text-sm border border-luxury-border bg-white shadow-lg px-6 py-3 rounded-xl">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
