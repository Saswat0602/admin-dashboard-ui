import { useQuery } from '@tanstack/react-query';
import { User } from '@/types';
import { dummyUsers, getUserById } from '@/data/dummy-users';
import { QUERY_KEYS } from '@/lib/constants';

export function useUsers() {
  return useQuery({
    queryKey: QUERY_KEYS.users,
    queryFn: async (): Promise<User[]> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return dummyUsers;
    },
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.user(id),
    queryFn: async (): Promise<User | undefined> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));
      return getUserById(id);
    },
    enabled: !!id,
  });
}
