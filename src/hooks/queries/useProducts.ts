import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';
import { dummyProducts, getProductById } from '@/data/dummy-products';
import { QUERY_KEYS } from '@/lib/constants';

export function useProducts() {
  return useQuery({
    queryKey: QUERY_KEYS.products,
    queryFn: async (): Promise<Product[]> => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return dummyProducts;
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.product(id),
    queryFn: async (): Promise<Product | undefined> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return getProductById(id);
    },
    enabled: !!id,
  });
}
