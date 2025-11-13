import { useQuery } from '@tanstack/react-query';
import { AnalyticsOverview, TrafficSource, TopProduct, RealtimeMetrics } from '@/types';
import {
  analyticsOverview,
  revenueData,
  trafficSources,
  topProducts,
  realtimeMetrics,
} from '@/data/dummy-analytics';
import { QUERY_KEYS } from '@/lib/constants';

export function useAnalyticsOverview() {
  return useQuery({
    queryKey: [...QUERY_KEYS.analytics, 'overview'],
    queryFn: async (): Promise<AnalyticsOverview> => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return analyticsOverview;
    },
  });
}

export function useRevenueData() {
  return useQuery({
    queryKey: [...QUERY_KEYS.analytics, 'revenue'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return revenueData;
    },
  });
}

export function useTrafficSources() {
  return useQuery({
    queryKey: [...QUERY_KEYS.analytics, 'traffic-sources'],
    queryFn: async (): Promise<TrafficSource[]> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return trafficSources;
    },
  });
}

export function useTopProducts() {
  return useQuery({
    queryKey: [...QUERY_KEYS.analytics, 'top-products'],
    queryFn: async (): Promise<TopProduct[]> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return topProducts;
    },
  });
}

export function useRealtimeMetrics() {
  return useQuery({
    queryKey: [...QUERY_KEYS.analytics, 'realtime'],
    queryFn: async (): Promise<RealtimeMetrics> => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return realtimeMetrics;
    },
    refetchInterval: 5000, // Refetch every 5 seconds for realtime data
  });
}
