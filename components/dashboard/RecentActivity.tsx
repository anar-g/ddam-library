const ACTIVITIES = [
  { actor: "Anna", action: "added new data to FUJI 2024", time: "5 min ago", color: "#3b82f6" },
  { actor: "Dorj", action: "is reviewing Viz v3", time: "32 min ago", color: "#f97316" },
  { actor: "Bolod", action: "reached 90% on Media Mix", time: "2 hours ago", color: "#22c55e" },
  { actor: "Tsend", action: "opened Retail Heatmap", time: "Yesterday", color: "#a855f7" },
];

export function RecentActivity() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-3)" }}>
        Recent Activity
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {ACTIVITIES.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border"
            style={{
              backgroundColor: "var(--overlay-xs)",
              borderColor: "var(--border)",
              borderLeftColor: item.color,
              borderLeftWidth: 3,
            }}
          >
            <p className="text-sm" style={{ color: "var(--text-1)" }}>
              <span className="font-semibold" style={{ color: item.color }}>
                {item.actor}
              </span>{" "}
              {item.action}
            </p>
            <p className="text-xs mt-1.5" style={{ color: "var(--text-3)" }}>
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
