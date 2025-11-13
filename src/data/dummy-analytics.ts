import { faker } from '@faker-js/faker';
import {
  AnalyticsOverview,
  TimeSeriesData,
  TrafficSource,
  TopProduct,
  RealtimeMetrics,
} from '@/types';
import { dummyProducts } from './dummy-products';

// Generate time series data
export function generateTimeSeriesData(days: number = 30): TimeSeriesData[] {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));
    return {
      date: date.toISOString().split('T')[0] || '',
      value: faker.number.int({ min: 1000, max: 10000 }),
    };
  });
}

// Analytics Overview
export const analyticsOverview: AnalyticsOverview = {
  revenue: {
    label: 'Total Revenue',
    value: 45231.89,
    change: 20.1,
    changeType: 'increase',
    trend: Array.from({ length: 7 }, () => faker.number.int({ min: 4000, max: 8000 })),
  },
  orders: {
    label: 'Total Orders',
    value: 2350,
    change: 12.5,
    changeType: 'increase',
    trend: Array.from({ length: 7 }, () => faker.number.int({ min: 200, max: 400 })),
  },
  customers: {
    label: 'Active Customers',
    value: 1853,
    change: 8.2,
    changeType: 'increase',
    trend: Array.from({ length: 7 }, () => faker.number.int({ min: 150, max: 300 })),
  },
  conversion: {
    label: 'Conversion Rate',
    value: 3.24,
    change: 2.1,
    changeType: 'decrease',
    trend: Array.from({ length: 7 }, () => faker.number.float({ min: 2.5, max: 4.5, multipleOf: 0.1 })),
  },
};

// Revenue over time
export const revenueData: TimeSeriesData[] = generateTimeSeriesData(30);

// Traffic sources
export const trafficSources: TrafficSource[] = [
  { source: 'Organic Search', visitors: 35420, percentage: 42.5 },
  { source: 'Direct', visitors: 22340, percentage: 26.8 },
  { source: 'Social Media', visitors: 15680, percentage: 18.8 },
  { source: 'Referral', visitors: 8230, percentage: 9.9 },
  { source: 'Email', visitors: 1660, percentage: 2.0 },
];

// Top products
export const topProducts: TopProduct[] = dummyProducts
  .slice(0, 10)
  .map((product) => ({
    id: product.id,
    name: product.name,
    sales: faker.number.int({ min: 100, max: 1000 }),
    revenue: faker.number.float({ min: 5000, max: 50000, multipleOf: 0.01 }),
  }));

// Realtime metrics
export const realtimeMetrics: RealtimeMetrics = {
  activeUsers: faker.number.int({ min: 50, max: 500 }),
  pageViews: faker.number.int({ min: 1000, max: 5000 }),
  bounceRate: faker.number.float({ min: 20, max: 60, multipleOf: 0.1 }),
  avgSessionDuration: faker.number.int({ min: 120, max: 600 }),
};

// Page views over time
export const pageViewsData: TimeSeriesData[] = generateTimeSeriesData(30);

// Conversion funnel data
export const conversionFunnelData = [
  { stage: 'Visitors', value: 100000 },
  { stage: 'Product Views', value: 45000 },
  { stage: 'Add to Cart', value: 12000 },
  { stage: 'Checkout', value: 5000 },
  { stage: 'Purchase', value: 3240 },
];
