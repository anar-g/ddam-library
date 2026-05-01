interface ProgressBarProps {
  value: number;
  color?: string;
  height?: "sm" | "md";
}

export function ProgressBar({ value, color = "#3b82f6", height = "sm" }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`w-full rounded-full bg-white/10 ${height === "sm" ? "h-1.5" : "h-2"}`}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${clamped}%`, backgroundColor: color }}
      />
    </div>
  );
}
