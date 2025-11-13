import { useQuery } from '@tanstack/react-query';
import { Notification } from '@/types';
import { dummyNotifications, getUnreadNotifications } from '@/data/dummy-notifications';
import { QUERY_KEYS } from '@/lib/constants';

export function useNotifications() {
  return useQuery({
    queryKey: QUERY_KEYS.notifications,
    queryFn: async (): Promise<Notification[]> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return dummyNotifications;
    },
  });
}

export function useUnreadNotifications() {
  return useQuery({
    queryKey: [...QUERY_KEYS.notifications, 'unread'],
    queryFn: async (): Promise<Notification[]> => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return getUnreadNotifications();
    },
  });
}
