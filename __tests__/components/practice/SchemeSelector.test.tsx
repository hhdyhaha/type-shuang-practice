import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SchemeSelector } from '@/components/practice/SchemeSelector'
import { schemes } from '@/lib/shuangpin/config'

describe('SchemeSelector 组件', () => {
  it('应该显示当前选择的方案', () => {
    const currentScheme = schemes.xiaohe
    render(
      <SchemeSelector
        currentScheme={currentScheme}
        onSchemeChange={() => {}}
      />
    )
    
    expect(screen.getByText('小鹤双拼')).toBeDefined()
  })

  it('点击时应该显示所有可用的方案', () => {
    const currentScheme = schemes.xiaohe
    render(
      <SchemeSelector
        currentScheme={currentScheme}
        onSchemeChange={() => {}}
      />
    )
    
    // 点击下拉菜单
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    // 验证是否显示了所有方案
    Object.values(schemes).forEach(scheme => {
      expect(screen.getByText(scheme.name)).toBeDefined()
    })
  })

  it('选择方案时应该调用回调函数', () => {
    const onSchemeChange = vi.fn()
    render(
      <SchemeSelector
        currentScheme={schemes.xiaohe}
        onSchemeChange={onSchemeChange}
      />
    )
    
    // 点击下拉菜单
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    // 选择智能ABC方案
    const msOption = screen.getByText('智能ABC')
    fireEvent.click(msOption)
    
    expect(onSchemeChange).toHaveBeenCalledWith('ms')
  })
})