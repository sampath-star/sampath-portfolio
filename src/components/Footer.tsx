import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-luxury-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="font-mono text-2xl font-black tracking-tighter mb-2 text-luxury-text">
              SAMPATH S HEBBAR
            </h3>
            <p className="text-luxury-muted text-sm font-bold tracking-widest">
              AI & DATA SCIENCE • CYBERSECURITY
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/about" className="text-sm font-bold text-luxury-muted hover:text-luxury-text transition-colors">ABOUT</Link>
            <Link href="/skills" className="text-sm font-bold text-luxury-muted hover:text-luxury-text transition-colors">SKILLS</Link>
            <Link href="/projects" className="text-sm font-bold text-luxury-muted hover:text-luxury-text transition-colors">PROJECTS</Link>
            <Link href="/internship" className="text-sm font-bold text-luxury-muted hover:text-luxury-text transition-colors">INTERNSHIP</Link>
            <Link href="/contact" className="text-sm font-bold text-luxury-muted hover:text-luxury-text transition-colors">CONTACT</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-luxury-border text-center flex flex-col md:flex-row justify-between items-center text-xs text-luxury-muted font-medium">
          <p>© {new Date().getFullYear()} Sampath S Hebbar. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-bold text-cyber-cyan/80 tracking-widest uppercase">Designed with a security-first mindset</p>
        </div>
      </div>
    </footer>
  );
}
