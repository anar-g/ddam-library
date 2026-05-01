import { Zap } from "lucide-react";
import { ResearchService } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "Active", variant: "success" },
  beta: { label: "Beta", variant: "warning" },
  deprecated: { label: "Deprecated", variant: "danger" },
};

const TYPE_COLOR: Record<string, string> = {
  "AI API": "#8b5cf6",
  "ML Platform": "#3b82f6",
  "Model Registry": "#f97316",
  Framework: "#22c55e",
  "Vector Database": "#06b6d4",
};

export function ServiceCard({ service }: { service: ResearchService }) {
  const { label, variant } = STATUS_CONFIG[service.status];
  const color = TYPE_COLOR[service.type] ?? "#6b7280";

  return (
    <div
      className="rounded-xl border p-4 transition-all flex flex-col hover:border-[var(--border-strong)]"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}18` }}
          >
            <Zap size={14} style={{ color }} />
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-tight" style={{ color: "var(--text-1)" }}>
              {service.name}
            </h3>
            <p className="text-xs" style={{ color: "var(--text-3)" }}>
              {service.type}
            </p>
          </div>
        </div>
        <Badge variant={variant}>{label}</Badge>
      </div>

      <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "var(--text-2)" }}>
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs"
            style={{ backgroundColor: "var(--overlay-sm)", color: "var(--text-3)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
