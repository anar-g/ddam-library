import { FileSpreadsheet, FileText, File, Link as LinkIcon, Plus } from "lucide-react";
import { ProjectFile } from "@/lib/types";

type IconConfig = { icon: React.ElementType; color: string; bg: string };

const FILE_ICONS: Record<string, IconConfig> = {
  xlsx: { icon: FileSpreadsheet, color: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  pptx: { icon: FileText, color: "#f97316", bg: "rgba(249,115,22,0.12)" },
  docx: { icon: FileText, color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  pdf: { icon: File, color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
  link: { icon: LinkIcon, color: "#a855f7", bg: "rgba(168,85,247,0.12)" },
};

export function FileSection({ files }: { files: ProjectFile[] }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          Files & Documents
        </h2>
        <button
          className="text-xs transition-colors hover:text-blue-500"
          style={{ color: "var(--text-3)" }}
        >
          View all
        </button>
      </div>

      {files.length === 0 ? (
        <p className="text-xs text-center py-4" style={{ color: "var(--text-3)" }}>
          No files yet
        </p>
      ) : (
        <div className="space-y-1">
          {files.map((file) => {
            const cfg = FILE_ICONS[file.type] ?? FILE_ICONS.pdf;
            const Icon = cfg.icon;
            return (
              <div
                key={file.id}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors cursor-pointer group hover:bg-[var(--overlay-xs)]"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cfg.bg }}
                >
                  <Icon size={14} style={{ color: cfg.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm truncate transition-colors group-hover:text-blue-500"
                    style={{ color: "var(--text-1)" }}
                  >
                    {file.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>
                    {file.uploadedBy} · {file.uploadedAt}
                  </p>
                </div>
                {file.size && (
                  <span className="text-xs flex-shrink-0" style={{ color: "var(--text-3)" }}>
                    {file.size}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      <button
        className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed text-xs transition-all hover:text-blue-500"
        style={{ borderColor: "var(--border)", color: "var(--text-3)" }}
      >
        <Plus size={12} />
        Upload File
      </button>
    </div>
  );
}
