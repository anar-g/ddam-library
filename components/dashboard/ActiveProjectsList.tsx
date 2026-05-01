import Link from "next/link";
import { Plus } from "lucide-react";
import { projects } from "@/lib/data";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "Active", variant: "success" },
  review: { label: "Review", variant: "warning" },
  planned: { label: "Planned", variant: "info" },
  completed: { label: "Completed", variant: "gray" },
};

const PROJECT_COLORS = ["#3b82f6", "#f97316", "#22c55e", "#ef4444", "#a855f7"];

export function ActiveProjectsList() {
  const displayed = projects.slice(0, 5);

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          Active Projects
        </h2>
        <Link
          href="/projects"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
          style={{ backgroundColor: "var(--overlay-sm)", color: "var(--text-2)" }}
        >
          <Plus size={11} />
          New
        </Link>
      </div>

      <div className="divide-y" style={{ borderColor: "var(--border)" }}>
        {displayed.map((project, i) => {
          const cfg = STATUS_CONFIG[project.status];
          const color = PROJECT_COLORS[i % PROJECT_COLORS.length];
          const memberNames = project.members
            .slice(0, 2)
            .map((m) => m.name.split(" ")[0])
            .join(", ");

          return (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="flex items-center gap-4 py-3 rounded-lg px-2 -mx-2 transition-colors group cursor-pointer hover:bg-[var(--overlay-xs)]">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium transition-colors truncate group-hover:text-blue-500"
                    style={{ color: "var(--text-1)" }}
                  >
                    {project.title}
                  </p>
                  <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-3)" }}>
                    {project.subtitle.split(" · ")[0]} · {memberNames}
                  </p>
                </div>
                <div className="w-24 flex-shrink-0">
                  <ProgressBar value={project.progress} color={color} />
                </div>
                <span className="text-xs w-9 text-right flex-shrink-0" style={{ color: "var(--text-2)" }}>
                  {project.progress}%
                </span>
                <Badge variant={cfg.variant}>{cfg.label}</Badge>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
