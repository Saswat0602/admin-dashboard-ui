'use client';

import { StatsCard } from '@/components/shared/StatsCard';
import { useAnalyticsOverview } from '@/hooks/queries/useAnalytics';
import { Users, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { LoadingState } from '@/components/shared/LoadingState';
import { ErrorState } from '@/components/shared/ErrorState';

export function DashboardStats() {
  const { data: analytics, isLoading, error } = useAnalyticsOverview();

  if (isLoading) {
    return <LoadingState message="Loading statistics..." />;
  }

  if (error || !analytics) {
    return <ErrorState message="Failed to load statistics" />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        value={`$${analytics.revenue.value.toLocaleString()}`}
        icon={DollarSign}
        trend={{
          value: analytics.revenue.change,
          isPositive: analytics.revenue.changeType === 'increase',
        }}
      />
      <StatsCard
        title="Total Customers"
        value={analytics.customers.value.toLocaleString()}
        icon={Users}
        trend={{
          value: analytics.customers.change,
          isPositive: analytics.customers.changeType === 'increase',
        }}
      />
      <StatsCard
        title="Total Orders"
        value={analytics.orders.value.toLocaleString()}
        icon={ShoppingCart}
        trend={{
          value: analytics.orders.change,
          isPositive: analytics.orders.changeType === 'increase',
        }}
      />
      <StatsCard
        title="Conversion Rate"
        value={`${analytics.conversion.value}%`}
        icon={Package}
        trend={{
          value: analytics.conversion.change,
          isPositive: analytics.conversion.changeType === 'increase',
        }}
      />
    </div>
  );
}
