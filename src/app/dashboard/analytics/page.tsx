'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/shared/StatsCard';
import { useAnalyticsOverview } from '@/hooks/queries/useAnalytics';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { LoadingState } from '@/components/shared/LoadingState';
import { ErrorState } from '@/components/shared/ErrorState';

export default function AnalyticsPage() {
  const { data: analytics, isLoading, error } = useAnalyticsOverview();

  if (isLoading) {
    return <LoadingState message="Loading analytics..." />;
  }

  if (error || !analytics) {
    return <ErrorState message="Failed to load analytics" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track your business performance and metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Revenue"
          value={`$${analytics.revenue.value.toLocaleString()}`}
          description={analytics.revenue.label}
          icon={DollarSign}
          trend={{
            value: analytics.revenue.change,
            isPositive: analytics.revenue.changeType === 'increase',
          }}
        />
        <StatsCard
          title="Customers"
          value={analytics.customers.value.toLocaleString()}
          description={analytics.customers.label}
          icon={Users}
          trend={{
            value: analytics.customers.change,
            isPositive: analytics.customers.changeType === 'increase',
          }}
        />
        <StatsCard
          title="Orders"
          value={analytics.orders.value.toLocaleString()}
          description={analytics.orders.label}
          icon={ShoppingCart}
          trend={{
            value: analytics.orders.change,
            isPositive: analytics.orders.changeType === 'increase',
          }}
        />
        <StatsCard
          title="Conversion"
          value={`${analytics.conversion.value}%`}
          description={analytics.conversion.label}
          icon={TrendingUp}
          trend={{
            value: analytics.conversion.change,
            isPositive: analytics.conversion.changeType === 'increase',
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart visualization would go here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
