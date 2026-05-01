interface StatsCardProps {
  label: string;
  value: number;
  sub: string;
  colorClass: string;
}

export function StatsCard({ label, value, sub, colorClass }: StatsCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl p-5 ${colorClass}`}>
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">{label}</p>
        <p className="text-4xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm text-white/70">{sub}</p>
      </div>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/5" />
    </div>
  );
}
