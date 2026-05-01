import React from "react";
import { MemberOnlineStatus } from "@/lib/types";

interface AvatarProps {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg";
  status?: MemberOnlineStatus;
}

const sizeClasses = {
  sm: "w-7 h-7 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-11 h-11 text-base",
};

const statusColors: Record<MemberOnlineStatus, string> = {
  online: "#22c55e",
  offline: "#6b7280",
  away: "#eab308",
};

export function Avatar({ initials, color, size = "md", status }: AvatarProps) {
  return (
    <div className="relative inline-flex flex-shrink-0">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white`}
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      {status && (
        <span
          className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
          style={{
            backgroundColor: statusColors[status],
            borderColor: "var(--ring-surface)",
          }}
        />
      )}
    </div>
  );
}
