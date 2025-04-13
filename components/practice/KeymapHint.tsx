import React from 'react'
import { currentScheme, type ShuangpinScheme } from '@/lib/shuangpin/config'
import { cn } from '@/lib/utils'

interface KeyMapData {
  key: string
  initial?: string
  final?: string
  zero?: string
}

interface KeymapHintProps {
  keyStatus?: Record<string, 'correct' | 'incorrect'>
  nextKeys?: string[]
  currentInput?: string
  pinyinInfo?: {
    pinyin: string
    initialPart: string
    finalPart: string
    initialKey: string
    finalKey: string
  }
  scheme?: ShuangpinScheme
}

const keyboardLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

function getKeyMapping(key: string, scheme: ShuangpinScheme = currentScheme): KeyMapData {
  const lowerKey = key.toLowerCase()
  const mapping: KeyMapData = { key }

  // 查找声母映射
  Object.entries(scheme.initial).forEach(([pinyin, code]) => {
    if (code === lowerKey) {
      mapping.initial = pinyin
    }
  })

  // 查找韵母映射
  Object.entries(scheme.final).forEach(([pinyin, code]) => {
    if (code === lowerKey) {
      mapping.final = pinyin
    }
  })

  // 查找零声母映射
  Object.entries(scheme.zero).forEach(([pinyin, codes]) => {
    if (codes.includes(lowerKey)) {
      mapping.zero = pinyin
    }
  })

  return mapping
}

export function KeymapHint({ 
  keyStatus = {}, 
  nextKeys = [], 
  currentInput = "",
  pinyinInfo,
  scheme = currentScheme
}: KeymapHintProps) {
  return (
    <div className="select-none font-mono">
      {keyboardLayout.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className="flex justify-center gap-1 mb-1"
            style={{ marginLeft: `${rowIndex * 20}px` }}
          >
            {row.map((key) => {
              const mapping = getKeyMapping(key, scheme)
              const status = keyStatus[key]
              const upperKey = key.toUpperCase()
              
              const isInitialKey = pinyinInfo && upperKey === pinyinInfo.initialKey.toUpperCase()
              const isFinalKey = pinyinInfo && upperKey === pinyinInfo.finalKey.toUpperCase()
              
              const isFirstKey = nextKeys[0] === key && currentInput === ""
              const isSecondKey = nextKeys[1] === key && currentInput.length === 1
              
              return (
                <div
                  key={key}
                  className={cn(
                    "relative h-16 min-w-[3.5rem] border rounded-lg flex flex-col items-center justify-between p-1 transition-all",
                    status === 'correct' && "bg-green-500/20 border-green-500",
                    status === 'incorrect' && "bg-red-500/20 border-red-500",
                    (isFirstKey || isSecondKey) && "bg-yellow-500/20 border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]",
                    !status && !isFirstKey && !isSecondKey && "bg-background/50"
                  )}
                >
                  {/* 声母区域 */}
                  <div className="flex gap-1 justify-center w-full min-h-[1.25rem] text-[0.65rem]">
                    {mapping.initial && (
                      <span className={cn(
                        "text-blue-500",
                        isInitialKey && "font-bold"
                      )}>
                        {mapping.initial}
                      </span>
                    )}
                    {mapping.zero && (
                      <span className="text-orange-500">{mapping.zero}</span>
                    )}
                  </div>

                  {/* 按键字母 */}
                  <div
                    className={cn(
                      "text-base font-medium",
                      (isFirstKey || isSecondKey) && "text-yellow-600 scale-110"
                    )}
                  >
                    {key}
                  </div>

                  {/* 韵母区域 */}
                  <div className="min-h-[1.25rem] text-[0.65rem]">
                    {mapping.final && (
                      <span className={cn(
                        "text-green-500",
                        isFinalKey && "font-bold"
                      )}>
                        {mapping.final}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
      <div className="mt-2 text-center text-sm text-muted-foreground">
        <span className="text-blue-500 mx-2">蓝色：声母</span>
        <span className="text-green-500 mx-2">绿色：韵母</span>
        <span className="text-orange-500 mx-2">橙色：零声母</span>
      </div>
    </div>
  )
}