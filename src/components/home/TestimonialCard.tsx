
interface TestimonialCardProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, initials, name, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2rem] relative shadow-sm border border-gray-100">
      <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-6">format_quote</span>
      <div className="flex gap-1 text-primary mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-sm">star</span>
        ))}
      </div>
      <p className="text-slate-600 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold">
          {initials}
        </div>
        <div>
          <p className="text-slate-900 font-bold text-sm">{name}</p>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
