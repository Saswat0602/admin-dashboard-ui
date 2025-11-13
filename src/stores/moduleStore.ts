import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { availableModules } from '@/config/modules';
import { Module } from '@/types';

interface ModuleStore {
  enabledModules: string[];
  toggleModule: (moduleId: string) => void;
  isModuleEnabled: (moduleId: string) => boolean;
  getEnabledModules: () => Module[];
  resetModules: () => void;
}

export const useModuleStore = create<ModuleStore>()(
  persist(
    (set, get) => ({
      enabledModules: availableModules
        .filter((m) => m.enabled)
        .map((m) => m.id),

      toggleModule: (moduleId: string) => {
        const foundModule = availableModules.find((m) => m.id === moduleId);
        if (foundModule?.locked) return; // Cannot toggle locked modules

        set((state) => ({
          enabledModules: state.enabledModules.includes(moduleId)
            ? state.enabledModules.filter((id) => id !== moduleId)
            : [...state.enabledModules, moduleId],
        }));
      },

      isModuleEnabled: (moduleId: string) => {
        return get().enabledModules.includes(moduleId);
      },

      getEnabledModules: () => {
        return availableModules.filter((m) =>
          get().enabledModules.includes(m.id)
        );
      },

      resetModules: () => {
        set({
          enabledModules: availableModules
            .filter((m) => m.enabled)
            .map((m) => m.id),
        });
      },
    }),
    {
      name: 'module-config',
    }
  )
);
