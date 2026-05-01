import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ActiveProjectsList } from "@/components/dashboard/ActiveProjectsList";
import { MembersList } from "@/components/dashboard/MembersList";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-1)" }}>
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
          Overview of all projects and activity
        </p>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ActiveProjectsList />
        </div>
        <MembersList />
      </div>

      <RecentActivity />
    </div>
  );
}
