// Site configuration
export const siteConfig = {
  name: 'Admin Dashboard',
  description: 'Enterprise-grade modular admin dashboard',
  url: 'https://admin-dashboard.com',
  ogImage: 'https://admin-dashboard.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/admin',
    github: 'https://github.com/admin',
  },
};

// Application constants
export const APP_NAME = 'Admin Dashboard';
export const APP_VERSION = '1.0.0';
export const PAGE_SIZE = 10;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

// Date formats
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy hh:mm a';
export const TIME_FORMAT = 'hh:mm a';

// Currency
export const DEFAULT_CURRENCY = 'USD';
export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY'];

// Pagination
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const LIMIT_OPTIONS = [10, 20, 50, 100];

// Query keys
export const QUERY_KEYS = {
  users: ['users'],
  user: (id: string) => ['users', id],
  products: ['products'],
  product: (id: string) => ['products', id],
  orders: ['orders'],
  order: (id: string) => ['orders', id],
  posts: ['posts'],
  post: (id: string) => ['posts', id],
  analytics: ['analytics'],
  notifications: ['notifications'],
  settings: ['settings'],
} as const;
