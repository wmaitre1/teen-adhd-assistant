```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Moon, Volume2, Eye } from 'lucide-react';
import { useSettingsStore } from '../../lib/store/settingsStore';

export function GeneralSettings() {
  const {
    theme,
    soundEnabled,
    distractionFreeMode,
    setTheme,
    setSoundEnabled,
    setDistractionFreeMode
  } = useSettingsStore();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center space-x-2 mb-6">
        <SettingsIcon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">General Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Theme Selection */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Moon className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">Theme</p>
              <p className="text-sm text-gray-600">Choose your preferred theme</p>
            </div>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
            className="rounded-lg border-gray-300 text-gray-900 focus:border-primary focus:ring focus:ring-primary/20"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        {/* Sound Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Volume2 className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">Sound</p>
              <p className="text-sm text-gray-600">Enable sound effects</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={(e) => setSoundEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        {/* Distraction-Free Mode */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">Distraction-Free Mode</p>
              <p className="text-sm text-gray-600">Simplified interface with reduced animations</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={distractionFreeMode}
              onChange={(e) => setDistractionFreeMode(e.target.checked)}
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