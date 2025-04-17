import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeText } from '@/components/practice/PracticeText'
import * as shuangpinUtils from '@/lib/shuangpin/utils'

// 模拟getShuangpinHint函数
vi.mock('@/lib/shuangpin/utils', () => ({
  getShuangpinHint: vi.fn((char) => {
    if (char === '中') {
      return {
        pinyin: 'zhong',
        shuangpin: 'vs',
        initialPart: 'zh',
        finalPart: 'ong',
        initialKey: 'v',
        finalKey: 's'
      }
    }
    if (char === '文') {
      return {
        pinyin: 'wen',
        shuangpin: 'wf',
        initialPart: 'w',
        finalPart: 'en',
        initialKey: 'w',
        finalKey: 'f'
      }
    }
    return null
  })
}))

describe('PracticeText组件', () => {
  it('应该正确渲染未输入的文本', () => {
    render(<PracticeText text="中文" currentIndex={0} typedText="" />)
    
    // 检查当前字符（高亮显示）
    expect(screen.getByText('中')).toBeInTheDocument()
    
    // 检查未输入的文本
    expect(screen.getByText('文')).toBeInTheDocument()
  })
  
  it('应该正确渲染已输入的文本', () => {
    render(<PracticeText text="中文" currentIndex={1} typedText="vs" />)
    
    // 检查已输入的文本（应该是绿色）
    const textElements = screen.getAllByText('中')
    expect(textElements.length).toBeGreaterThan(0)
    
    // 检查当前字符
    expect(screen.getByText('文')).toBeInTheDocument()
  })
  
  it('应该显示当前字符的拼音和双拼提示', () => {
    render(<PracticeText text="中文" currentIndex={0} typedText="" />)
    
    // 检查是否显示了拼音提示
    expect(screen.getByText(/拼音：/)).toBeInTheDocument()
    expect(screen.getByText(/zhong/)).toBeInTheDocument()
    
    // 检查是否显示了双拼提示
    expect(screen.getByText(/双拼：/)).toBeInTheDocument()
    expect(screen.getByText('v')).toBeInTheDocument()
    expect(screen.getByText('s')).toBeInTheDocument()
  })
  
  it('完成输入后应该不显示提示', () => {
    render(<PracticeText text="中" currentIndex={1} typedText="vs" />)
    
    // 文本已完成输入，不应显示提示
    expect(screen.queryByText(/拼音：/)).not.toBeInTheDocument()
    expect(screen.queryByText(/双拼：/)).not.toBeInTheDocument()
  })
  
  it('应该调用getShuangpinHint获取当前字符的提示', () => {
    render(<PracticeText text="中文" currentIndex={0} typedText="" />)
    
    // 验证getShuangpinHint被调用
    expect(shuangpinUtils.getShuangpinHint).toHaveBeenCalledWith('中')
  })
}) 