import { Link } from 'react-router-dom';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export default function PostCard({ id, title, excerpt, date, category, image }: PostCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">
            <Link to={`/posts/${id}`}>
                {title}
            </Link>
        </h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {excerpt}
        </p>
        <div className="pt-4 border-t border-slate-100">
            <Link to={`/posts/${id}`} className="inline-flex items-center text-primary text-sm font-bold transition-all group-hover:translate-x-1">
            Read Article <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link>
        </div>
      </div>
    </div>
  );
}
