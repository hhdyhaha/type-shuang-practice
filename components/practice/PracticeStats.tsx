import React from 'react'

interface PracticeStatsProps {
  startTime: number
  correctCount: number
  incorrectCount: number
  totalLength: number
  totalKeystrokes: number // 总按键次数
  wrongKeystrokes: number // 错误按键次数
}

export function PracticeStats({ 
  startTime, 
  correctCount,
  totalLength,
  totalKeystrokes,
  wrongKeystrokes
}: PracticeStatsProps) {
  // 计算经过的时间（秒）
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000)
  
  // 计算速度（字/分钟）
  const speed = elapsedSeconds > 0 
    ? Math.round((correctCount / elapsedSeconds) * 60) 
    : 0
  
  // 计算准确率 - 使用按键级别的统计
  const accuracy = totalKeystrokes > 0
    ? Math.round(((totalKeystrokes - wrongKeystrokes) / totalKeystrokes) * 100)
    : 100

  // 计算完成度
  const progress = Math.round((correctCount / totalLength) * 100)

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-muted rounded-lg text-center">
      <div>
        <div className="text-sm text-muted-foreground">速度</div>
        <div className="text-xl font-medium">{speed} 字/分</div>
      </div>
      <div>
        <div className="text-sm text-muted-foreground">准确率</div>
        <div className="text-xl font-medium">{accuracy}%</div>
      </div>
      <div>
        <div className="text-sm text-muted-foreground">用时</div>
        <div className="text-xl font-medium">{elapsedSeconds}s</div>
      </div>
      <div>
        <div className="text-sm text-muted-foreground">进度</div>
        <div className="text-xl font-medium">{progress}%</div>
      </div>
    </div>
  )
}