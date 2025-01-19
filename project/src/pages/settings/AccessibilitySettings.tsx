```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Sliders } from 'lucide-react';
import { useSettingsStore } from '../../lib/store/settingsStore';

export function AccessibilitySettings() {
  const {
    colorBlindMode,
    highContrastMode,
    setColorBlindMode,
    setHighContrastMode
  } = useSettingsStore();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center space-x-2 mb-6">
        <Sliders className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">Accessibility Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Text Size
          </label>
          <input
            type="range"
            min="12"
            max="24"
            defaultValue="16"
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Color Blind Mode</p>
            <p className="text-sm text-gray-600">Adjust colors for color blindness</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={colorBlindMode}
              onChange={(e) => setColorBlindMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">High Contrast Mode</p>
            <p className="text-sm text-gray-600">Increase contrast for better visibility</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={highContrastMode}
              onChange={(e) => setHighContrastMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </motion.section>
  );
}
```