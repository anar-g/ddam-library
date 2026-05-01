import { ExternalLink } from "lucide-react";
import { ResearchNewsItem } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function ResearchNewsFeed({ news }: { news: ResearchNewsItem[] }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text-3)" }}>
        Latest Research & News
      </h2>
      <div className="space-y-5">
        {news.map((item) => (
          <div
            key={item.id}
            className="pb-5 border-b last:border-0 last:pb-0"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-medium cursor-pointer transition-colors hover:text-blue-500 leading-snug"
                  style={{ color: "var(--text-1)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {item.summary}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium" style={{ color: "var(--text-3)" }}>
                    {item.source}
                  </span>
                  <span style={{ color: "var(--text-3)" }}>·</span>
                  <span className="text-xs" style={{ color: "var(--text-3)" }}>
                    {item.date}
                  </span>
                </div>
              </div>
              <ExternalLink
                size={13}
                className="flex-shrink-0 mt-0.5 cursor-pointer transition-colors hover:text-blue-500"
                style={{ color: "var(--text-3)" }}
              />
            </div>
            <div className="flex gap-1.5 mt-2.5 flex-wrap">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="gray" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
