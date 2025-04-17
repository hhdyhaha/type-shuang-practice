import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import useThemeStore, { useTheme } from '@/store/useThemeStore'
import { renderHook, act } from '@testing-library/react'

// 模拟window.matchMedia
const mockMatchMedia = vi.fn().mockImplementation((query) => ({
  matches: false, // 默认返回light模式
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

describe('useThemeStore', () => {
  // 在每个测试前重置store状态
  beforeEach(() => {
    // 重置store状态
    useThemeStore.setState({ theme: 'system' })
    
    // 模拟DOM操作
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.removeAttribute('data-theme')
    
    // 替换matchMedia实现
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    })
  })

  it('应该有默认的system主题', () => {
    expect(useThemeStore.getState().theme).toBe('system')
  })

  it('应该能够设置主题', () => {
    act(() => {
      useThemeStore.getState().setTheme('dark')
    })
    expect(useThemeStore.getState().theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('应该能够切换主题', () => {
    // 确保window.matchMedia已定义
    if (typeof window.matchMedia === 'undefined') {
      window.matchMedia = mockMatchMedia
    }
    
    // 初始为system
    expect(useThemeStore.getState().theme).toBe('system')
    
    // 切换一次应该变为light
    act(() => {
      useThemeStore.getState().toggleTheme()
    })
    expect(useThemeStore.getState().theme).toBe('light')
    
    // 再切换应该变为dark
    act(() => {
      useThemeStore.getState().toggleTheme()
    })
    expect(useThemeStore.getState().theme).toBe('dark')
    
    // 再切换应该回到system
    act(() => {
      useThemeStore.getState().toggleTheme()
    })
    expect(useThemeStore.getState().theme).toBe('system')
  })
  
  it('应该正确应用system主题基于系统偏好', () => {
    // 模拟系统暗色主题
    mockMatchMedia.mockImplementationOnce((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    
    act(() => {
      useThemeStore.getState().applyTheme()
    })
    
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})

describe('useTheme hook', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  
  afterEach(() => {
    vi.useRealTimers()
  })
  
  it('在客户端挂载后应返回正确的主题状态', () => {
    const { result } = renderHook(() => useTheme())
    
    // 初始挂载状态应返回默认值
    expect(result.current.theme).toBe('system')
    
    // 触发setMounted(true)的效果
    act(() => {
      vi.runAllTimers() // 触发useEffect
    })
    
    // 确保能够调用设置主题方法
    act(() => {
      result.current.setTheme('dark')
    })
    
    expect(useThemeStore.getState().theme).toBe('dark')
  })
}) 