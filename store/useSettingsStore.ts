import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { schemes, type ShuangpinScheme } from '@/lib/shuangpin/config'

interface SettingsState {
  currentScheme: ShuangpinScheme
  soundEnabled: boolean
  setScheme: (schemeName: keyof typeof schemes) => void
  setSoundEnabled: (enabled: boolean) => void
  initializeSettings: () => void
}

const DEFAULT_SETTINGS = {
  currentScheme: schemes.xiaohe,
  soundEnabled: true,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      setScheme: (schemeName) => {
        const newScheme = schemes[schemeName]
        set({ currentScheme: newScheme })
      },
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      initializeSettings: () => set(DEFAULT_SETTINGS)
    }),
    {
      name: 'typing-settings', // localStorage 的键名
      partialize: (state) => ({
        currentScheme: state.currentScheme,
        soundEnabled: state.soundEnabled,
      })
    }
  )
)