export default function SectionHeading({ 
  title, 
  subtitle 
}: { 
  title: string; 
  subtitle?: string; 
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-luxury-text uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-luxury-muted max-w-2xl text-lg font-medium">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-cyber-cyan mt-6 rounded-full"></div>
    </div>
  );
}
