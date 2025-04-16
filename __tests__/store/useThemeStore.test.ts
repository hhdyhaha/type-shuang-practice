import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useThemeStore } from '@/store/useThemeStore'
import type { Theme } from '@/store/useThemeStore'

describe('useThemeStore', () => {
  beforeEach(() => {
    // 每个测试前重置状态
    const store = useThemeStore.getState()
    store.setTheme('system')
  })

  it('应该有正确的初始状态', () => {
    const state = useThemeStore.getState()
    expect(state.theme).toBe('system')
  })

  it('应该能够设置主题', () => {
    const { setTheme } = useThemeStore.getState()
    
    setTheme('dark')
    expect(useThemeStore.getState().theme).toBe('dark')
    
    setTheme('light')
    expect(useThemeStore.getState().theme).toBe('light')
  })

  it('应该能够切换主题', () => {
    const { toggleTheme, setTheme } = useThemeStore.getState()
    
    // 从 light 切换到 dark
    setTheme('light')
    toggleTheme()
    expect(useThemeStore.getState().theme).toBe('dark')
    
    // 从 dark 切换到 light
    toggleTheme()
    expect(useThemeStore.getState().theme).toBe('light')
  })

  it('应该正确应用主题到文档', () => {
    const { applyTheme, setTheme } = useThemeStore.getState()
    
    // 模拟 document.documentElement
    const htmlElement = document.createElement('html')
    vi.spyOn(document, 'documentElement', 'get').mockReturnValue(htmlElement)
    
    // 测试 light 主题
    setTheme('light')
    applyTheme()
    expect(htmlElement.className).toBe('light')
    
    // 测试 dark 主题
    setTheme('dark')
    applyTheme()
    expect(htmlElement.className).toBe('dark')
  })

  it('在系统主题下应该响应系统偏好', () => {
    const { applyTheme, setTheme } = useThemeStore.getState()
    
    // 模拟 matchMedia
    const mockMatchMedia = vi.fn((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }))
    vi.spyOn(window, 'matchMedia').mockImplementation(mockMatchMedia)
    
    setTheme('system')
    applyTheme()
    
    expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)')
  })
})