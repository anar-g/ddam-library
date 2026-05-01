import { UserPlus } from "lucide-react";
import { Member } from "@/lib/types";
import { Avatar } from "@/components/ui/Avatar";

const ROLE_COLOR: Record<string, string> = {
  "Dev Lead": "#3b82f6",
  Analyst: "#22c55e",
  PM: "#a855f7",
  "Backend Dev": "#f97316",
  "Data Engineer": "#6b7280",
};

export function TeamSection({ members }: { members: Member[] }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          Team Members
        </h2>
        <button
          className="flex items-center gap-1.5 text-xs transition-colors hover:text-blue-500"
          style={{ color: "var(--text-3)" }}
        >
          <UserPlus size={12} />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <Avatar initials={member.initials} color={member.color} size="md" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-tight" style={{ color: "var(--text-1)" }}>
                {member.name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-3)" }}>
                {member.title}
              </p>
            </div>
            <span className="text-xs font-medium" style={{ color: ROLE_COLOR[member.role] ?? "#6b7280" }}>
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
