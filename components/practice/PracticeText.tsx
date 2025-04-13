import React from 'react'
import { getShuangpinHint } from '@/lib/shuangpin/utils'

interface PracticeTextProps {
  text: string
  currentIndex: number
  typedText: string
}

export function PracticeText({ text, currentIndex }: PracticeTextProps) {
  // 获取当前字符的拼音和双拼提示
  const currentChar = text[currentIndex]
  const hint = currentChar ? getShuangpinHint(currentChar) : null

  return (
    <div className="space-y-4">
      <div className="text-xl leading-relaxed tracking-wide font-mono">
        {/* 已经输入的文字 */}
        <span className="text-green-500">
          {text.slice(0, currentIndex)}
        </span>
        
        {/* 当前要输入的字符 */}
        <span className="bg-primary/20 px-1 rounded animate-pulse">
          {currentChar || ' '}
        </span>
        
        {/* 未输入的文字 */}
        <span className="text-muted-foreground">
          {text.slice(currentIndex + 1)}
        </span>
      </div>

      {/* 拼音和双拼提示 */}
      {hint && (
        <div className="text-sm text-center space-y-1">
          <div className="text-muted-foreground">
            拼音：<span className="font-mono">{hint.pinyin}</span>
          </div>
          <div className="font-mono">
            <span className="text-yellow-500">双拼：</span>
            <span className="text-blue-500">{hint.shuangpin[0]}</span>
            <span className="text-green-500">{hint.shuangpin[1]}</span>
            <span className="text-muted-foreground ml-2">
              ({hint.shuangpin[0]}={hint.pinyin.slice(0,2)} + {hint.shuangpin[1]}={hint.pinyin.slice(2)})
            </span>
          </div>
        </div>
      )}
    </div>
  )
}