
interface TestimonialCardProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, initials, name, role }: TestimonialCardProps) {
  return (
    <div className="bg-surface-default p-8 rounded-[2rem] relative shadow-sm border border-border-subtle">
      <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-6">format_quote</span>
      <div className="flex gap-1 text-primary mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-sm">star</span>
        ))}
      </div>
      <p className="text-text-secondary mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-surface-highlight rounded-full flex items-center justify-center text-text-secondary font-bold">
          {initials}
        </div>
        <div>
          <p className="text-text-primary font-bold text-sm">{name}</p>
          <p className="text-text-tertiary text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
