import MotionWrapper from "./MotionWrapper";

export default function BrandStatement() {
  return (
    <section className="py-32 bg-white relative border-y border-luxury-border overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-luxury-cream blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <MotionWrapper>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-luxury-text mb-16 leading-tight">
            <span className="block mb-6">Curiosity drives the <span className="text-cyber-cyan italic font-serif font-medium">research</span>.</span>
            <span className="block mb-6">Intelligence drives the <span className="text-cyber-blue italic font-serif font-medium">solution</span>.</span>
            <span className="block">Security protects the <span className="text-cyber-red italic font-serif font-medium">system</span>.</span>
          </h2>
          
          <div className="inline-flex flex-col items-center border border-luxury-border bg-white shadow-xl px-10 py-6 rounded-2xl">
            <span className="font-black text-sm tracking-widest text-luxury-text mb-2">SAMPATH S HEBBAR</span>
            <span className="font-bold text-[10px] tracking-widest text-luxury-muted">AI & DATA SCIENCE • CYBERSECURITY</span>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
