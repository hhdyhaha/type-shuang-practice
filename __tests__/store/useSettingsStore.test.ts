import { describe, expect, it, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useSettingsStore } from '@/store/useSettingsStore'
import { schemes } from '@/lib/shuangpin/config'

describe('useSettingsStore', () => {
  beforeEach(() => {
    // 在每次测试前重置store状态
    useSettingsStore.setState({
      currentScheme: schemes.xiaohe,
      soundEnabled: true,
    })
  })

  it('应该有正确的默认值', () => {
    const state = useSettingsStore.getState()
    expect(state.currentScheme.name).toBe('小鹤双拼')
    expect(state.soundEnabled).toBe(true)
  })

  it('应该能够设置双拼方案', () => {
    act(() => {
      useSettingsStore.getState().setScheme('ms')
    })
    expect(useSettingsStore.getState().currentScheme.name).toBe('微软双拼')
  })

  it('应该能够启用/禁用声音', () => {
    // 初始为 true
    expect(useSettingsStore.getState().soundEnabled).toBe(true)
    
    // 设置为 false
    act(() => {
      useSettingsStore.getState().setSoundEnabled(false)
    })
    expect(useSettingsStore.getState().soundEnabled).toBe(false)
    
    // 设置回 true
    act(() => {
      useSettingsStore.getState().setSoundEnabled(true)
    })
    expect(useSettingsStore.getState().soundEnabled).toBe(true)
  })

  it('应该能够重置为默认设置', () => {
    // 先改变设置
    act(() => {
      useSettingsStore.getState().setScheme('ms')
      useSettingsStore.getState().setSoundEnabled(false)
    })
    
    // 然后初始化
    act(() => {
      useSettingsStore.getState().initializeSettings()
    })
    
    // 检查是否恢复默认值
    const state = useSettingsStore.getState()
    expect(state.currentScheme.name).toBe('小鹤双拼')
    expect(state.soundEnabled).toBe(true)
  })
}) 