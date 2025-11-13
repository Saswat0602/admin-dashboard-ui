import { useQuery } from '@tanstack/react-query';
import { Order } from '@/types';
import { dummyOrders, getOrderById } from '@/data/dummy-orders';
import { QUERY_KEYS } from '@/lib/constants';

export function useOrders() {
  return useQuery({
    queryKey: QUERY_KEYS.orders,
    queryFn: async (): Promise<Order[]> => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return dummyOrders;
    },
  });
}

export function useOrder(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.order(id),
    queryFn: async (): Promise<Order | undefined> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return getOrderById(id);
    },
    enabled: !!id,
  });
}
