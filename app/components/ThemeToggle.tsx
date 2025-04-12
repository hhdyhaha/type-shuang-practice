'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '../store/useThemeStore'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Laptop } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme, setTheme, applyTheme } = useTheme()
  // 客户端渲染标记
  const [mounted, setMounted] = useState(false)

  // 在组件挂载时应用主题，不依赖theme避免循环渲染
  useEffect(() => {
    // 确保在客户端执行
    if (typeof window === 'undefined') return

    // 应用当前主题状态
    applyTheme()
    setMounted(true)
  }, [applyTheme]) // 移除theme依赖，避免循环更新

  // 如果未挂载，返回一个占位符以避免水合错误
  if (!mounted) {
    return <div className="flex items-center space-x-2 opacity-0">占位</div>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          {theme === 'light' && (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem]" />
              <span>亮色</span>
            </>
          )}
          {theme === 'dark' && (
            <>
              <Moon className="h-[1.2rem] w-[1.2rem]" />
              <span>暗色</span>
            </>
          )}
          {theme === 'system' && (
            <>
              <Laptop className="h-[1.2rem] w-[1.2rem]" />
              <span>系统</span>
            </>
          )}
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>亮色模式</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>暗色模式</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>系统模式</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}