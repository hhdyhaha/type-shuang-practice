import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeStats } from '@/components/practice/PracticeStats'

describe('PracticeStats 组件', () => {
  it('应该正确计算并显示速度', () => {
    const startTime = Date.now() - 10000 // 10秒前
    render(
      <PracticeStats
        startTime={startTime}
        correctCount={10}
        totalLength={20}
        totalKeystrokes={20}
        wrongKeystrokes={0}
      />
    )
    
    // 10秒内输入10个字，速度应该是60字/分
    const speedElement = screen.getByText('60 字/分')
    expect(speedElement).toBeDefined()
  })

  it('应该正确计算准确率', () => {
    render(
      <PracticeStats
        startTime={Date.now()}
        correctCount={5}
        totalLength={10}
        totalKeystrokes={20}
        wrongKeystrokes={4}
      />
    )
    
    // 20次按键中有4次错误，准确率应该是80%
    const accuracyElement = screen.getByText('80%')
    expect(accuracyElement).toBeDefined()
  })

  it('应该正确计算进度', () => {
    render(
      <PracticeStats
        startTime={Date.now()}
        correctCount={5}
        totalLength={10}
        totalKeystrokes={10}
        wrongKeystrokes={0}
      />
    )
    
    // 总长度10，已完成5个字符，进度应该是50%
    const progressElement = screen.getByText('50%')
    expect(progressElement).toBeDefined()
  })

  it('在开始练习时应该显示初始状态', () => {
    render(
      <PracticeStats
        startTime={Date.now()}
        correctCount={0}
        totalLength={10}
        totalKeystrokes={0}
        wrongKeystrokes={0}
      />
    )
    
    // 刚开始时速度应该是0
    expect(screen.getByText('0 字/分')).toBeDefined()
    // 还没有输入时准确率应该是100%
    expect(screen.getByText('100%')).toBeDefined()
    // 进度应该是0%
    expect(screen.getByText('0%')).toBeDefined()
  })
})