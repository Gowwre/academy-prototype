import { Heading, Text } from '../design-system/Typography';
import Card from '../design-system/Card';

interface AlumniCardProps {
  name: string;
  achievement: string;
  image: string;
  quote: string;
}

export default function AlumniCard({ name, achievement, image, quote }: AlumniCardProps) {
  return (
    <Card variant="elevated" className="p-6 border-border-default hover:border-primary/30 transition-all cursor-pointer">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="h-14 w-14 rounded-full bg-cover bg-center shrink-0 border-2 border-border-subtle shadow-sm" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div>
          <Heading as="h4" variant="h4" className="text-text-primary mb-0">{name}</Heading>
          <Text variant="caption" className="text-primary font-bold uppercase tracking-wider mb-0">{achievement}</Text>
        </div>
      </div>
      <Text variant="body-sm" className="text-text-secondary italic mb-0">"{quote}"</Text>
    </Card>
  );
}
