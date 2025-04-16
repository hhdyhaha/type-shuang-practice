import { describe, it, expect, beforeEach } from 'vitest'
import { useSettingsStore } from '@/store/useSettingsStore'
import { schemes } from '@/lib/shuangpin/config'

describe('useSettingsStore', () => {
  beforeEach(() => {
    // 每个测试前重置 store 状态
    useSettingsStore.getState().initializeSettings()
  })

  it('应该有正确的初始状态', () => {
    const state = useSettingsStore.getState()
    
    expect(state.currentScheme).toBe(schemes.xiaohe)
    expect(state.soundEnabled).toBe(true)
  })

  it('应该能够更改输入方案', () => {
    const { setScheme } = useSettingsStore.getState()
    
    setScheme('ms')
    
    const newState = useSettingsStore.getState()
    expect(newState.currentScheme).toBe(schemes.ms)
  })

  it('应该能够切换声音设置', () => {
    const { setSoundEnabled } = useSettingsStore.getState()
    
    setSoundEnabled(false)
    
    const newState = useSettingsStore.getState()
    expect(newState.soundEnabled).toBe(false)
  })

  it('应该能够重置为初始设置', () => {
    const { setScheme, setSoundEnabled, initializeSettings } = useSettingsStore.getState()
    
    // 先改变一些设置
    setScheme('ms')
    setSoundEnabled(false)
    
    // 然后初始化
    initializeSettings()
    
    const state = useSettingsStore.getState()
    expect(state.currentScheme).toBe(schemes.xiaohe)
    expect(state.soundEnabled).toBe(true)
  })
})