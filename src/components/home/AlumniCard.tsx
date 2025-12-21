
interface AlumniCardProps {
  name: string;
  achievement: string;
  image: string;
  quote: string;
}

export default function AlumniCard({ name, achievement, image, quote }: AlumniCardProps) {
  return (
    <div className="bg-surface-default p-6 rounded-2xl border border-border-default hover:border-primary/30 transition-all cursor-pointer shadow-sm">
      <div className="flex items-center gap-4 mb-3">
        <div 
          className="h-12 w-12 rounded-full bg-cover bg-center shrink-0" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div>
          <h4 className="font-bold text-text-primary line-clamp-1">{name}</h4>
          <p className="text-xs text-primary">{achievement}</p>
        </div>
      </div>
      <p className="text-sm text-text-secondary">"{quote}"</p>
    </div>
  );
}
