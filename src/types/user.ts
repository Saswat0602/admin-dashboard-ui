import { BaseEntity, Address, Status } from './common';

export type UserRole = 'admin' | 'user' | 'moderator' | 'editor';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  emailUpdates: boolean;
  language?: string;
}

export interface UserStats {
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  lastOrderDate?: string;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: Status;
  phone?: string;
  lastLogin?: string;
  address?: Address;
  preferences: UserPreferences;
  stats: UserStats;
  bio?: string;
  company?: string;
  website?: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  address?: Address;
}

export interface UpdateUserInput extends Partial<CreateUserInput> {
  status?: Status;
  preferences?: Partial<UserPreferences>;
}

export interface UserActivity {
  id: string;
  userId: string;
  type: 'login' | 'logout' | 'update' | 'create' | 'delete' | 'purchase';
  description: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}
