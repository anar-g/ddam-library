import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const PRIORITY_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  urgent: { label: "Urgent", variant: "danger" },
  high: { label: "High", variant: "warning" },
  medium: { label: "Medium", variant: "default" },
  low: { label: "Low", variant: "gray" },
};

export function GeneralInfo({ project }: { project: Project }) {
  const { label, variant } = PRIORITY_CONFIG[project.priority];

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-3)" }}>
        General Information
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <Field label="Start Date" value={project.startDate} />
        <Field label="End Date" value={project.endDate} />
        <Field label="Client" value={project.client} />
        <Field label="Category" value={project.category} />
        <Field label="Responsible PM" value={project.pm} />
        <div>
          <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>
            Priority
          </p>
          <Badge variant={variant}>{label}</Badge>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="flex justify-between text-xs mb-2">
          <span style={{ color: "var(--text-2)" }}>Overall Progress</span>
          <span className="font-semibold" style={{ color: "var(--text-1)" }}>
            {project.progress}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--overlay-md)" }}>
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>
        {label}
      </p>
      <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>
        {value}
      </p>
    </div>
  );
}
