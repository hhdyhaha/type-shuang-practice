'use client'

import React, { useEffect, useRef } from 'react'
import { createZustandProvider } from '@/store/zustandProviders'
import useThemeStore from '@/store/useThemeStore'

// 创建主题Store提供者
const ThemeStoreProvider = createZustandProvider(useThemeStore)

export default function Providers({ children }: { children: React.ReactNode }) {
  // 使用ref标记主题是否已经初始化
  const themeInitialized = useRef(false)

  // 在客户端加载时应用主题
  useEffect(() => {
    // 确保在客户端执行 且 只初始化一次
    if (typeof window === 'undefined' || themeInitialized.current) return
    
    const applyTheme = useThemeStore.getState().applyTheme
    if (applyTheme) {
      applyTheme()
      themeInitialized.current = true
    }
    
    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const theme = useThemeStore.getState().theme
      const applyTheme = useThemeStore.getState().applyTheme
      if (theme === 'system' && applyTheme) {
        applyTheme()
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])
  
  return (
    <ThemeStoreProvider>
      {children}
    </ThemeStoreProvider>
  )
}