import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ShuangpinKeyboard } from '@/components/practice/ShuangpinKeyboard'

describe('ShuangpinKeyboard 组件', () => {
  it('应该正确渲染键盘布局', () => {
    render(<ShuangpinKeyboard keyStatus={{}} />)
    
    // 验证常见的键是否都存在
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
                 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
                 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    
    keys.forEach(key => {
      expect(screen.getByText(key)).toBeDefined()
    })
  })

  it('应该正确显示按键状态', () => {
    const keyStatus = {
      'A': 'correct',
      'B': 'incorrect'
    }
    
    render(<ShuangpinKeyboard keyStatus={keyStatus} />)
    
    // 检查正确按键的样式
    const correctKey = screen.getByText('A')
    expect(correctKey.parentElement?.className).toContain('bg-green-500/20')
    
    // 检查错误按键的样式
    const incorrectKey = screen.getByText('B')
    expect(incorrectKey.parentElement?.className).toContain('bg-red-500/20')
    
    // 检查默认按键的样式
    const defaultKey = screen.getByText('C')
    expect(defaultKey.parentElement?.className).toContain('hover:bg-accent')
  })
})