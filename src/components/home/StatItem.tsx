
interface StatItemProps {
  label: string;
  value: string;
  suffix?: string;
}

export default function StatItem({ label, value, suffix }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{label}</p>
    </div>
  );
}
