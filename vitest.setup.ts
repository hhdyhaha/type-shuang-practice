// jsdom 环境设置已在vitest.config.ts中配置 

import { vi, beforeAll, afterEach, afterAll } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom/vitest';

// 模拟next/link组件
vi.mock('next/link', () => {
  return {
    default: function Link({ children, href, ...rest }: any) {
      return React.createElement('a', { href, ...rest }, children);
    }
  };
});

// 模拟Audio对象
class MockAudio {
  play = vi.fn();
  pause = vi.fn();
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
}

// 模拟window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // 向后兼容
    removeListener: vi.fn(), // 向后兼容
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// 应用前重置所有模拟
beforeAll(() => {
  vi.stubGlobal('Audio', MockAudio);
});

// 每个测试后重置所有模拟
afterEach(() => {
  vi.clearAllMocks();
  vi.resetModules();
});

// 所有测试结束后恢复所有模拟
afterAll(() => {
  vi.restoreAllMocks();
}); 