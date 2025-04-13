import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  applyTheme: () => void
}

// 辅助函数：检查是否在客户端环境
const isClient = typeof window !== 'undefined'

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      
      setTheme: (theme) => {
        if (!isClient) return // 服务端不执行
        set({ theme })
        get().applyTheme()
      },
      
      toggleTheme: () => {
        if (!isClient) return // 服务端不执行
        set((state) => ({ 
          theme: state.theme === 'light' ? 'dark' : 
                 state.theme === 'dark' ? 'system' : 'light' 
        }))
        get().applyTheme()
      },

      // 将主题应用到DOM的方法
      applyTheme: () => {
        // 只在客户端执行
        if (!isClient) return

        const { theme } = get()
        const root = window.document.documentElement
        
        // 移除所有主题类
        root.classList.remove('light', 'dark')
        
        // 应用新主题
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          root.classList.add(systemTheme)
          // 设置data-theme属性，确保一些样式可以通过属性选择器生效
          root.setAttribute('data-theme', systemTheme)
        } else {
          root.classList.add(theme)
          // 设置data-theme属性
          root.setAttribute('data-theme', theme)
        }
      }
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => {
        // 确保只在客户端访问localStorage
        if (isClient) {
          return localStorage
        }
        // 在服务器端提供一个空的存储实现
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {}
        }
      }),
      // 仅持久化主题值，不保存方法
      partialize: (state) => ({ theme: state.theme }),
      // 使用skipHydration选项避免SSR期间的水合问题
      skipHydration: true
    }
  )
)

// 用于客户端组件的钩子，包含客户端水合保护
export function useTheme() {
  // 客户端挂载状态跟踪
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // 从store中获取状态和方法
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const applyTheme = useThemeStore((state) => state.applyTheme)
  
  // 如果在服务端或未挂载，返回默认值和空函数
  if (!mounted) {
    return {
      theme: 'system' as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
      applyTheme: () => {}
    }
  }
  
  return { theme, setTheme, toggleTheme, applyTheme }
}

export default useThemeStore 