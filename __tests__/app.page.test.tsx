import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../app/page';

describe('首页组件', () => {
  it('应该渲染欢迎标题', () => {
    render(<Home />);
    
    // 检查页面是否包含"欢迎使用 Next.js 框架"文本
    const headingElement = screen.getByText('欢迎使用 Next.js 框架');
    expect(headingElement).toBeDefined();
  });
}); 