import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { schemes, type ShuangpinScheme, updateCurrentScheme } from '@/lib/shuangpin/config'

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
        updateCurrentScheme(schemeName) // 同步更新全局配置
        set({ currentScheme: newScheme })
      },
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      initializeSettings: () => {
        set(DEFAULT_SETTINGS)
        updateCurrentScheme('xiaohe') // 初始化时同步更新全局配置
      }
    }),
    {
      name: 'typing-settings',
      partialize: (state) => ({
        currentScheme: state.currentScheme,
        soundEnabled: state.soundEnabled,
      })
    }
  )
)