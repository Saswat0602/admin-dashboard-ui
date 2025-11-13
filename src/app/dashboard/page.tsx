import { DashboardStats } from '@/components/modules/dashboard/DashboardStats';
import { RecentActivity } from '@/components/modules/dashboard/RecentActivity';
import { QuickActions } from '@/components/modules/dashboard/QuickActions';
import { SystemStatus } from '@/components/modules/dashboard/SystemStatus';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header Section with Gradient */}
      <div className="relative overflow-hidden rounded-lg bg-linear-to-br from-primary/10 via-primary/5 to-background border p-8">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Hi, Welcome back 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Here&apos;s what&apos;s happening with your projects today
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Sidebar - Takes 1 column */}
        <div className="space-y-6">
          <QuickActions />
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}
