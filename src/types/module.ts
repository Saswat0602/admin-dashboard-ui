import { LucideIcon } from 'lucide-react';

export type ModuleCategory = 'core' | 'analytics' | 'commerce' | 'content' | 'communication' | 'settings';

export interface Module {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  route: string;
  enabled: boolean;
  locked?: boolean;
  category: ModuleCategory;
  dependencies?: string[];
  features: string[];
}

export interface ModuleConfig {
  enabledModules: string[];
  customOrder?: string[];
}
