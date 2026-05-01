import { Plus, Filter } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const active = projects.filter((p) => p.status === "active");
  const review = projects.filter((p) => p.status === "review");
  const planned = projects.filter((p) => p.status === "planned");
  const completed = projects.filter((p) => p.status === "completed");

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-1)" }}>
            Projects
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
            {projects.length} total projects
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all hover:border-[var(--border-strong)]"
            style={{
              backgroundColor: "var(--overlay-sm)",
              borderColor: "var(--border)",
              color: "var(--text-2)",
            }}
          >
            <Filter size={14} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm text-white hover:bg-blue-700 transition-all">
            <Plus size={14} />
            New Project
          </button>
        </div>
      </div>

      {active.length > 0 && (
        <Section title="Active" count={active.length}>
          {active.map((p) => <ProjectCard key={p.id} project={p} />)}
        </Section>
      )}
      {review.length > 0 && (
        <Section title="In Review" count={review.length}>
          {review.map((p) => <ProjectCard key={p.id} project={p} />)}
        </Section>
      )}
      {planned.length > 0 && (
        <Section title="Planned" count={planned.length}>
          {planned.map((p) => <ProjectCard key={p.id} project={p} />)}
        </Section>
      )}
      {completed.length > 0 && (
        <Section title="Completed" count={completed.length}>
          {completed.map((p) => <ProjectCard key={p.id} project={p} />)}
        </Section>
      )}
    </div>
  );
}

function Section({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-3)" }}>
        {title} <span style={{ color: "var(--text-3)", opacity: 0.6 }}>({count})</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </section>
  );
}
