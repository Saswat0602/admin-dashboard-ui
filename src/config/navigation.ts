import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  FileText,
  BarChart,
  Settings,
  Bell,
  LucideIcon,
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
  badge?: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Products',
    href: '/dashboard/products',
    icon: Package,
  },
  {
    title: 'Orders',
    href: '/dashboard/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Content',
    href: '/dashboard/content',
    icon: FileText,
    children: [
      {
        title: 'Posts',
        href: '/dashboard/content/posts',
        icon: FileText,
      },
      {
        title: 'Media',
        href: '/dashboard/content/media',
        icon: FileText,
      },
      {
        title: 'Pages',
        href: '/dashboard/content/pages',
        icon: FileText,
      },
    ],
  },
  {
    title: 'Reports',
    href: '/dashboard/reports',
    icon: BarChart,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
    badge: '12',
  },
];
