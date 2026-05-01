import { FlaskConical } from "lucide-react";
import { aiModels, researchServices, researchNews } from "@/lib/data";
import { ModelCard } from "@/components/rd/ModelCard";
import { ServiceCard } from "@/components/rd/ServiceCard";
import { ResearchNewsFeed } from "@/components/rd/ResearchNewsFeed";

export default function RDPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/20 flex items-center justify-center">
          <FlaskConical size={20} className="text-purple-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-1)" }}>
            R&D Hub
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-2)" }}>
            Latest AI models, services, and research
          </p>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Latest AI Models
          </h2>
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            {aiModels.length} tracked
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Services & Tools
          </h2>
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            {researchServices.length} tracked
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <ResearchNewsFeed news={researchNews} />
    </div>
  );
}
