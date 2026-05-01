import React from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  success: "bg-green-500/20 text-green-400 border border-green-500/30",
  warning: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
  danger: "bg-red-500/20 text-red-400 border border-red-500/30",
  info: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
  purple: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  gray: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
};

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  const padding = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${padding} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
