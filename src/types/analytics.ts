export interface AnalyticsMetric {
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  trend: number[];
}

export interface TimeSeriesData {
  date: string;
  value: number;
  label?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }[];
}

export interface AnalyticsOverview {
  revenue: AnalyticsMetric;
  orders: AnalyticsMetric;
  customers: AnalyticsMetric;
  conversion: AnalyticsMetric;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
}

export interface TopProduct {
  id: string;
  name: string;
  sales: number;
  revenue: number;
}

export interface RealtimeMetrics {
  activeUsers: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
}
