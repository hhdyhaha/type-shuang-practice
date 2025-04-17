import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { SchemeSelector } from '@/components/practice/SchemeSelector'
import { schemes } from '@/lib/shuangpin/config'
import React from 'react'

describe('SchemeSelector组件', () => {
  const mockOnSchemeChange = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('应该正确渲染方案选择器', () => {
    render(
      <SchemeSelector 
        currentScheme={schemes.xiaohe} 
        onSchemeChange={mockOnSchemeChange} 
      />
    );
    
    // 检查按钮中的方案名称
    const button = screen.getByRole('button');
    expect(within(button).getByText('小鹤双拼')).toBeInTheDocument();
    
    // 检查信息区域
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('小鹤双拼');
  });
  
  it('应该显示当前选择的方案', () => {
    render(
      <SchemeSelector 
        currentScheme={schemes.ms} 
        onSchemeChange={mockOnSchemeChange} 
      />
    );
    
    // 检查按钮中的方案名称
    const button = screen.getByRole('button');
    expect(within(button).getByText('微软双拼')).toBeInTheDocument();
    
    // 检查信息区域
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('微软双拼');
  });
}) 