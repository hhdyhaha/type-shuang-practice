import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn 工具函数', () => {
  it('应该合并并去重类名', () => {
    expect(cn('test')).toBe('test')
    expect(cn('test', 'another')).toBe('test another')
    expect(cn('test', 'test')).toBe('test')
  })

  it('应该支持条件类名', () => {
    expect(cn('base', { 'conditional': true })).toBe('base conditional')
    expect(cn('base', { 'conditional': false })).toBe('base')
  })

  it('应该支持数组参数', () => {
    expect(cn('base', ['one', 'two'])).toBe('base one two')
  })

  it('应该正确处理复杂情况', () => {
    const result = cn(
      'base-class',
      { 'is-active': true, 'is-disabled': false },
      ['extra-class', { 'another-condition': true }]
    )
    expect(result).toBe('base-class is-active extra-class another-condition')
  })

  it('应该处理Tailwind工具类并正确合并', () => {
    const result = cn(
      'p-4 text-center',
      'bg-blue-500',
      'text-white',
      'hover:bg-blue-700'
    )
    expect(result).toBe('p-4 text-center bg-blue-500 text-white hover:bg-blue-700')
  })

  it('应该处理冲突的Tailwind类名', () => {
    // twMerge应该处理冲突的类，保留后面的
    const result = cn(
      'p-2 text-sm',
      'p-4 text-lg'
    )
    // p-4和text-lg应该覆盖p-2和text-sm
    expect(result).toBe('p-4 text-lg')
  })
}) 