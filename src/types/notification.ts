import { BaseEntity } from './common';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type NotificationCategory = 'system' | 'order' | 'user' | 'product' | 'message';

export interface Notification extends BaseEntity {
  type: NotificationType;
  category: NotificationCategory;
  title: string;
  message: string;
  read: boolean;
  readAt?: string;
  actionUrl?: string;
  actionText?: string;
  metadata?: Record<string, unknown>;
  userId?: string;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  categories: {
    system: boolean;
    order: boolean;
    user: boolean;
    product: boolean;
    message: boolean;
  };
}
