import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Pencil, Upload } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { GeneralInfo } from "@/components/projects/GeneralInfo";
import { TeamSection } from "@/components/projects/TeamSection";
import { TaskList } from "@/components/projects/TaskList";
import { FileSection } from "@/components/projects/FileSection";
import { AIAssistant } from "@/components/projects/AIAssistant";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple" | "gray";

const STATUS_CONFIG: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "In Progress", variant: "success" },
  review: { label: "In Review", variant: "warning" },
  planned: { label: "Planned", variant: "info" },
  completed: { label: "Completed", variant: "gray" },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const { label, variant } = STATUS_CONFIG[project.status];

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
        <Link href="/" className="transition-colors hover:text-blue-500" style={{ color: "var(--text-3)" }}>
          DDAM Hub
        </Link>
        <ChevronRight size={12} />
        <Link href="/projects" className="transition-colors hover:text-blue-500" style={{ color: "var(--text-3)" }}>
          Projects
        </Link>
        <ChevronRight size={12} />
        <span style={{ color: "var(--text-2)" }}>{project.title}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h1 className="text-2xl font-bold" style={{ color: "var(--text-1)" }}>
              {project.title}
            </h1>
            <Badge variant={variant}>{label}</Badge>
          </div>
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            {project.subtitle}
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all"
            style={{
              backgroundColor: "var(--overlay-sm)",
              borderColor: "var(--border)",
              color: "var(--text-2)",
            }}
          >
            <Pencil size={13} />
            Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm text-white hover:bg-blue-700 transition-all">
            <Upload size={13} />
            Add File
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <GeneralInfo project={project} />
          <TaskList tasks={project.tasks} />
          <FileSection files={project.files} />
        </div>
        <div className="space-y-5">
          <TeamSection members={project.members} />
          <AIAssistant projectTitle={project.title} />
        </div>
      </div>
    </div>
  );
}
