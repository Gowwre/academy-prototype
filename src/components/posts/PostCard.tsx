import { Link } from 'react-router-dom';
import Card from '../design-system/Card';
import { Heading, Text } from '../design-system/Typography';
import Badge from '../design-system/Badge';

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
    <Card 
      variant="elevated"
      className="group flex flex-col overflow-hidden h-full p-0 border-border-subtle hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute top-4 left-4">
          <Badge variant="brand" size="sm" className="bg-surface-default/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <Text variant="caption" className="font-semibold tracking-wider uppercase text-text-tertiary">{date}</Text>
        </div>
        <Heading as="h3" variant="h4" className="text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">
            <Link to={`/posts/${id}`}>
                {title}
            </Link>
        </Heading>
        <Text variant="body-sm" className="text-text-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">
            {excerpt}
        </Text>
        <div className="pt-4 border-t border-border-subtle">
            <Link to={`/posts/${id}`} className="inline-flex items-center text-primary text-sm font-bold transition-all group-hover:translate-x-1">
              Read Article <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link>
        </div>
      </div>
    </Card>
  );
}
