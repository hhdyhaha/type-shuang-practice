import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeText } from '@/components/practice/PracticeText'

describe('PracticeText 组件', () => {
  it('应该正确渲染练习文本', () => {
    const text = "测试文本"
    render(<PracticeText text={text} currentIndex={0} typedText="" />)
    
    expect(screen.getByText('测')).toBeDefined()
    expect(screen.getByText('试文本')).toBeDefined()
  })

  it('应该正确显示当前输入位置', () => {
    const text = "测试文本"
    const currentIndex = 1
    
    render(<PracticeText text={text} currentIndex={currentIndex} typedText="测" />)
    
    // 已输入的文字应该显示为绿色
    const typedText = screen.getByText('测')
    expect(typedText.className).toContain('text-green-500')
    
    // 当前字符应该有高亮背景
    const currentChar = screen.getByText('试')
    expect(currentChar.className).toContain('bg-primary/20')
  })

  it('在完成输入时不应显示拼音提示', () => {
    const text = "测试"
    render(<PracticeText text={text} currentIndex={2} typedText="测试" />)
    
    // 当 currentIndex 等于文本长度时，不应该显示拼音提示
    const hint = screen.queryByText(/拼音：/)
    expect(hint).toBeNull()
  })
})