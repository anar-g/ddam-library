import Link from "next/link";
import { Calendar } from "lucide-react";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Avatar } from "@/components/ui/Avatar";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "Active", variant: "success" },
  review: { label: "Review", variant: "warning" },
  planned: { label: "Planned", variant: "info" },
  completed: { label: "Completed", variant: "gray" },
};

const PRIORITY_COLOR: Record<string, string> = {
  urgent: "#ef4444",
  high: "#f97316",
  medium: "#3b82f6",
  low: "#6b7280",
};

export function ProjectCard({ project }: { project: Project }) {
  const { label, variant } = STATUS_CONFIG[project.status];

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="rounded-xl border p-5 transition-all cursor-pointer group h-full flex flex-col hover:border-[var(--border-strong)]"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0 mr-3">
            <h3
              className="text-sm font-semibold transition-colors leading-tight group-hover:text-blue-500"
              style={{ color: "var(--text-1)" }}
            >
              {project.title}
            </h3>
            <p className="text-xs mt-1 truncate" style={{ color: "var(--text-3)" }}>
              {project.subtitle}
            </p>
          </div>
          <Badge variant={variant}>{label}</Badge>
        </div>

        <div className="mb-4 flex-1">
          <div className="flex justify-between text-xs mb-1.5" style={{ color: "var(--text-2)" }}>
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <ProgressBar value={project.progress} color={PRIORITY_COLOR[project.priority]} height="md" />
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex -space-x-2">
            {project.members.slice(0, 3).map((m) => (
              <div key={m.id} className="rounded-full outline outline-2 outline-[var(--ring-surface)]">
                <Avatar initials={m.initials} color={m.color} size="sm" />
              </div>
            ))}
            {project.members.length > 3 && (
              <div
                className="w-7 h-7 rounded-full outline outline-2 outline-[var(--ring-surface)] flex items-center justify-center text-xs"
                style={{ backgroundColor: "var(--overlay-md)", color: "var(--text-2)" }}
              >
                +{project.members.length - 3}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-3)" }}>
            <Calendar size={11} />
            <span>{project.endDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
