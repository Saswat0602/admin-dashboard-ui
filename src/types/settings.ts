export interface AppSettings {
  general: GeneralSettings;
  appearance: AppearanceSettings;
  notifications: NotificationSettings;
  security: SecuritySettings;
  billing?: BillingSettings;
}

export interface GeneralSettings {
  siteName: string;
  siteUrl: string;
  adminEmail: string;
  timezone: string;
  dateFormat: string;
  currency: string;
  language: string;
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  accentColor: string;
  fontSize: 'sm' | 'md' | 'lg';
  sidebarCollapsed: boolean;
  compactMode: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  desktop: boolean;
  sound: boolean;
  frequency: 'realtime' | 'hourly' | 'daily';
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  passwordExpiry: number;
  ipWhitelist: string[];
  allowedDomains: string[];
}

export interface BillingSettings {
  plan: 'free' | 'starter' | 'pro' | 'enterprise';
  billingCycle: 'monthly' | 'yearly';
  paymentMethod?: string;
  nextBillingDate?: string;
}
