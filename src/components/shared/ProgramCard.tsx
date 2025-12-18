import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  link?: string;
}

export default function ProgramCard({ title, description, image, badge, link = "/programs" }: ProgramCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white shadow-lg">
            {badge}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary text-sm font-bold transition-colors hover:underline">
          Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
        </Link>
      </div>
    </div>
  );
}
