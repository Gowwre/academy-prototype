
interface TickerItemProps {
  text: string;
}

export default function TickerItem({ text }: TickerItemProps) {
  return <div className="ticker__item">{text}</div>;
}
