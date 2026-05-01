import { Cpu } from "lucide-react";
import { AIModel } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  available: { label: "Available", variant: "success" },
  beta: { label: "Beta", variant: "warning" },
  upcoming: { label: "Upcoming", variant: "info" },
};

const PROVIDER_COLOR: Record<string, string> = {
  Anthropic: "#8b5cf6",
  OpenAI: "#10a37f",
  Google: "#4285f4",
  Meta: "#1877f2",
  DeepSeek: "#0ea5e9",
  xAI: "#6b7280",
};

export function ModelCard({ model }: { model: AIModel }) {
  const { label, variant } = STATUS_CONFIG[model.status];
  const color = PROVIDER_COLOR[model.provider] ?? "#6b7280";

  return (
    <div
      className="rounded-xl border p-5 transition-all flex flex-col hover:border-[var(--border-strong)]"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm border"
            style={{ backgroundColor: `${color}18`, borderColor: `${color}30`, color }}
          >
            {model.provider.slice(0, 1)}
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-tight" style={{ color: "var(--text-1)" }}>
              {model.name}
            </h3>
            <p className="text-xs" style={{ color: "var(--text-3)" }}>
              {model.provider}
            </p>
          </div>
        </div>
        <Badge variant={variant}>{label}</Badge>
      </div>

      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--text-2)" }}>
        {model.description}
      </p>

      <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "var(--text-3)" }}>
        <Cpu size={11} />
        <span>{model.contextWindow}</span>
        <span>·</span>
        <span>Released {model.releaseDate}</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {model.capabilities.slice(0, 4).map((cap) => (
          <span
            key={cap}
            className="px-2 py-0.5 rounded-full text-xs border"
            style={{
              backgroundColor: "var(--overlay-sm)",
              borderColor: "var(--border)",
              color: "var(--text-2)",
            }}
          >
            {cap}
          </span>
        ))}
        {model.capabilities.length > 4 && (
          <span
            className="px-2 py-0.5 rounded-full text-xs"
            style={{ backgroundColor: "var(--overlay-sm)", color: "var(--text-3)" }}
          >
            +{model.capabilities.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}
