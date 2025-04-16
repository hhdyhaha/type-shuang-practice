import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import * as themeStore from '@/store/useThemeStore'

describe('ThemeToggle 组件', () => {
  it('应该正确渲染主题切换按钮', async () => {
    vi.spyOn(themeStore, 'useTheme').mockImplementation(() => ({
      theme: 'light',
      setTheme: vi.fn(),
      toggleTheme: vi.fn(),
      applyTheme: vi.fn()
    }))

    render(<ThemeToggle />)
    
    // 等待组件加载完成
    await new Promise(resolve => setTimeout(resolve, 0))
    
    // 检查是否渲染了主题切换按钮
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })

  it('点击按钮应该显示主题选项', async () => {
    const setTheme = vi.fn()
    vi.spyOn(themeStore, 'useTheme').mockImplementation(() => ({
      theme: 'light',
      setTheme,
      toggleTheme: vi.fn(),
      applyTheme: vi.fn()
    }))

    render(<ThemeToggle />)
    
    // 等待组件加载完成
    await new Promise(resolve => setTimeout(resolve, 0))
    
    // 点击主题切换按钮
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    // 检查是否显示了主题选项
    expect(screen.getByText('亮色')).toBeDefined()
    expect(screen.getByText('暗色')).toBeDefined()
    expect(screen.getByText('系统')).toBeDefined()
  })
})