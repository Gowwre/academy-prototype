import { Heading, Text } from '../design-system/Typography';
import Card from '../design-system/Card';

interface TestimonialCardProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, initials, name, role }: TestimonialCardProps) {
  return (
    <Card variant="elevated" className="p-8 !rounded-[2rem] relative shadow-lg">
      <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-8 font-variation-settings-light">format_quote</span>
      <div className="flex gap-1 text-primary mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-[16px] font-variation-settings-fill">star</span>
        ))}
      </div>
      <Text variant="body-sm" className="text-text-secondary mb-8 leading-relaxed font-medium">"{quote}"</Text>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-sm border-2 border-primary/5">
          {initials}
        </div>
        <div>
          <Heading as="h4" variant="h4" className="text-text-primary mb-0 text-sm">{name}</Heading>
          <Text variant="caption" className="text-text-tertiary mb-0">{role}</Text>
        </div>
      </div>
    </Card>
  );
}
