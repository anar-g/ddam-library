import { StatsCard } from "./StatsCard";
import { dashboardStats } from "@/lib/data";

const CARDS = [
  { label: "Total Projects", value: dashboardStats.totalProjects, sub: `${dashboardStats.newThisMonth} new this month`, colorClass: "bg-blue-600" },
  { label: "In Progress", value: dashboardStats.inProgress, sub: `${dashboardStats.urgent} urgent`, colorClass: "bg-emerald-600" },
  { label: "Members", value: dashboardStats.members, sub: `${dashboardStats.teams} teams`, colorClass: "bg-amber-600" },
  { label: "Documents", value: dashboardStats.documents, sub: `${dashboardStats.docsThisWeek} this week`, colorClass: "bg-purple-600" },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {CARDS.map((card) => (
        <StatsCard key={card.label} {...card} />
      ))}
    </div>
  );
}
