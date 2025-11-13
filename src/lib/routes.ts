// Centralized route constants and helpers
export const ROUTES = {
  DASHBOARD: '/dashboard',
  ANALYTICS: '/dashboard/analytics',
  USERS: '/dashboard/users',
  PRODUCTS: '/dashboard/products',
  ORDERS: '/dashboard/orders',
  CONTENT: '/dashboard/content',
  REPORTS: '/dashboard/reports',
  SETTINGS: '/dashboard/settings',
  NOTIFICATIONS: '/dashboard/notifications',
} as const;

/**
 * Normalize a module route so it always returns an absolute path starting with '/'.
 * If the provided route already starts with '/dashboard' it will be returned as-is.
 */
export function normalizeRoute(route: string) {
  if (!route) return ROUTES.DASHBOARD;
  if (route.startsWith('/')) {
    return route.startsWith('/dashboard') ? route : `/dashboard${route}`;
  }
  return `/dashboard/${route}`;
}

export type Routes = typeof ROUTES;
