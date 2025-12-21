
interface StatItemProps {
  label: string;
  value: string;
  suffix?: string;
}

export default function StatItem({ label, value, suffix }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-black text-text-primary mb-2">
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <p className="text-sm font-medium text-text-tertiary uppercase tracking-widest">{label}</p>
    </div>
  );
}
