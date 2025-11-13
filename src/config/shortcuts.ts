export const shortcuts = {
  // Global
  'cmd+k': { description: 'Open command palette', category: 'Global' },
  'cmd+/': { description: 'Show keyboard shortcuts', category: 'Global' },
  'cmd+b': { description: 'Toggle sidebar', category: 'Global' },
  '/': { description: 'Focus search', category: 'Global' },
  'esc': { description: 'Close modal/dialog', category: 'Global' },

  // Navigation
  'g h': { description: 'Go to home (dashboard)', category: 'Navigation' },
  'g u': { description: 'Go to users', category: 'Navigation' },
  'g p': { description: 'Go to products', category: 'Navigation' },
  'g o': { description: 'Go to orders', category: 'Navigation' },
  'g c': { description: 'Go to content', category: 'Navigation' },
  'g s': { description: 'Go to settings', category: 'Navigation' },

  // Actions
  'cmd+n': { description: 'Create new item', category: 'Actions' },
  'cmd+e': { description: 'Edit current item', category: 'Actions' },
  'cmd+s': { description: 'Save', category: 'Actions' },
  'cmd+enter': { description: 'Submit form', category: 'Actions' },
  'cmd+shift+d': { description: 'Delete', category: 'Actions' },

  // Table
  'j': { description: 'Move down in table', category: 'Table' },
  'k': { description: 'Move up in table', category: 'Table' },
  'x': { description: 'Select/deselect row', category: 'Table' },
  'shift+x': { description: 'Select all/none', category: 'Table' },

  // Theme
  'cmd+shift+l': { description: 'Toggle light/dark theme', category: 'Theme' },
} as const;

export const shortcutCategories = ['Global', 'Navigation', 'Actions', 'Table', 'Theme'] as const;
