import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { KeymapHint } from '@/components/practice/KeymapHint'
import { currentScheme } from '@/lib/shuangpin/config'

describe('KeymapHint 组件', () => {
  it('应该正确渲染键盘布局', () => {
    render(<KeymapHint />)
    
    // 检查是否渲染了所有键盘按键
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    keys.forEach(key => {
      expect(screen.getByText(key)).toBeDefined()
    })
  })

  it('应该正确显示按键状态', () => {
    const keyStatus = {
      'A': 'correct',
      'B': 'incorrect'
    }
    
    render(<KeymapHint keyStatus={keyStatus} />)
    
    // 检查正确按键和错误按键的样式
    const correctKey = screen.getByText('A').parentElement
    const incorrectKey = screen.getByText('B').parentElement
    
    expect(correctKey?.className).toContain('bg-green-500/20')
    expect(incorrectKey?.className).toContain('bg-red-500/20')
  })

  it('应该显示拼音提示信息', () => {
    const pinyinInfo = {
      pinyin: 'zhong',
      initialPart: 'zh',
      finalPart: 'ong',
      initialKey: 'v',
      finalKey: 't'
    }
    
    render(<KeymapHint pinyinInfo={pinyinInfo} scheme={currentScheme} />)
    
    // 对应键盘上的按键应该高亮显示相应的拼音部分
    const vKey = screen.getByText('V').parentElement
    const tKey = screen.getByText('T').parentElement
    
    expect(vKey?.title).toContain('zh')
    expect(tKey?.title).toContain('ong')
  })

  it('应该高亮显示下一个可能的按键', () => {
    const nextKeys = ['A', 'O']
    
    render(<KeymapHint nextKeys={nextKeys} />)
    
    // 检查下一个可能的按键是否被高亮
    const aKey = screen.getByText('A').parentElement
    const oKey = screen.getByText('O').parentElement
    
    expect(aKey?.className).toContain('ring-2')
    expect(oKey?.className).toContain('ring-2')
  })
})