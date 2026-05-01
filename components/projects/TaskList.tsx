"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { Task } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  done: { label: "Done", variant: "success" },
  "in-progress": { label: "In Progress", variant: "warning" },
  pending: { label: "Pending", variant: "default" },
  low: { label: "Low", variant: "gray" },
};

export function TaskList({ tasks }: { tasks: Task[] }) {
  const [items, setItems] = useState(tasks);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const done = items.filter((t) => t.completed).length;

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Tasks
          </h2>
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            {done}/{items.length}
          </span>
        </div>
        <button
          className="flex items-center gap-1.5 text-xs transition-colors hover:text-blue-500"
          style={{ color: "var(--text-3)" }}
        >
          <Plus size={12} />
          Add Task
        </button>
      </div>

      <div className="space-y-1">
        {items.map((task) => {
          const { label, variant } = STATUS_CONFIG[task.status];
          return (
            <div
              key={task.id}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors group hover:bg-[var(--overlay-xs)]"
            >
              <button
                onClick={() => toggle(task.id)}
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all"
                style={
                  task.completed
                    ? { backgroundColor: "#22c55e", borderColor: "#22c55e" }
                    : { borderColor: "var(--border-input)" }
                }
              >
                {task.completed && <Check size={11} className="text-white" />}
              </button>
              <span
                className="flex-1 text-sm transition-colors"
                style={{
                  color: task.completed ? "var(--text-3)" : "var(--text-1)",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <span className="text-xs hidden sm:block" style={{ color: "var(--text-3)" }}>
                {task.assignee}
              </span>
              {!task.completed && (
                <Badge variant={variant} size="sm">
                  {label}
                </Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
