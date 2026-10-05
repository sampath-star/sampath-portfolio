import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock, Database, Network } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const getIcon = (slug: string) => {
    switch (slug) {
      case "osint-investigation": return <Lock className="text-cyber-cyan" size={48} />;
      case "inventory-management": return <Database className="text-cyber-blue" size={48} />;
      case "autonomous-sdn-mtd": return <Network className="text-cyber-red" size={48} />;
      default: return <Lock className="text-cyber-cyan" size={48} />;
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-luxury-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center text-luxury-muted font-bold hover:text-luxury-text transition-colors mb-12 text-sm uppercase tracking-widest">
          <ArrowLeft size={16} className="mr-3" />
          Back to Projects
        </Link>
        
        <MotionWrapper>
          <div className="bg-white border border-luxury-border p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gray rounded-full blur-3xl -z-10"></div>
            
            <div className="mb-12 relative z-10">
              <div className="p-6 bg-luxury-cream rounded-2xl inline-block border border-luxury-border shadow-sm">
                {getIcon(project.slug)}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-luxury-text tracking-tight">{project.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-12 border-b border-luxury-border pb-12 relative z-10">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold px-4 py-2 bg-luxury-cream text-luxury-muted rounded-full border border-luxury-border">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none relative z-10 text-luxury-text">
              <h3 className="text-2xl font-black mb-6 text-luxury-text">Project Overview</h3>
              <p className="text-luxury-muted leading-relaxed font-medium">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
