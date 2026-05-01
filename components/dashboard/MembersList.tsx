import { members } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const PROJECT_BADGE: Record<string, BadgeVariant> = {
  "fuji-2024": "default",
  "viz-v3": "warning",
  "media-mix": "success",
  "retail-heatmap": "purple",
  "ad-q4": "warning",
};

const PROJECT_LABEL: Record<string, string> = {
  "fuji-2024": "FUJI",
  "viz-v3": "Viz v3",
  "media-mix": "Media Mix",
  "retail-heatmap": "Retail",
  "ad-q4": "Ad Q4",
};

export function MembersList() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          Members
        </h2>
        <button className="text-xs transition-colors hover:text-blue-500" style={{ color: "var(--text-3)" }}>
          View all
        </button>
      </div>

      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3 py-1">
            <Avatar initials={member.initials} color={member.color} size="md" status={member.status} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-tight" style={{ color: "var(--text-1)" }}>
                {member.name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-3)" }}>
                {member.title}
              </p>
            </div>
            <div className="flex gap-1 flex-wrap justify-end">
              {member.projects.slice(0, 2).map((pid) => (
                <Badge key={pid} variant={PROJECT_BADGE[pid] ?? "gray"} size="sm">
                  {PROJECT_LABEL[pid] ?? pid}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
