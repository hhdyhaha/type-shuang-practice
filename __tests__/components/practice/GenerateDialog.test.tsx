import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { GenerateDialog } from '@/components/practice/GenerateDialog'

describe('GenerateDialog 组件', () => {
  const mockOnGenerate = vi.fn()
  const mockOnOpenChange = vi.fn()

  it('应该正确渲染对话框按钮', () => {
    render(
      <GenerateDialog
        open={false}
        onOpenChange={mockOnOpenChange}
        onGenerate={mockOnGenerate}
      />
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
    expect(button.textContent).toContain('生成练习文本')
  })

  it('点击按钮应该打开对话框', () => {
    render(
      <GenerateDialog
        open={false}
        onOpenChange={mockOnOpenChange}
        onGenerate={mockOnGenerate}
      />
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockOnOpenChange).toHaveBeenCalledWith(true)
  })

  it('应该显示输入框和提交按钮', () => {
    render(
      <GenerateDialog
        open={true}
        onOpenChange={mockOnOpenChange}
        onGenerate={mockOnGenerate}
      />
    )
    
    const input = screen.getByPlaceholderText(/输入提示词/)
    const submitButton = screen.getByText('生成')
    
    expect(input).toBeDefined()
    expect(submitButton).toBeDefined()
  })

  it('提交表单应该调用生成回调', () => {
    render(
      <GenerateDialog
        open={true}
        onOpenChange={mockOnOpenChange}
        onGenerate={mockOnGenerate}
      />
    )
    
    const input = screen.getByPlaceholderText(/输入提示词/)
    const submitButton = screen.getByText('生成')
    
    // 输入提示词
    fireEvent.change(input, { target: { value: '测试提示词' } })
    
    // 提交表单
    fireEvent.click(submitButton)
    
    expect(mockOnGenerate).toHaveBeenCalledWith('测试提示词')
  })
})