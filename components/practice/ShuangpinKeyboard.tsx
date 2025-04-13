'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type KeyStatus = 'default' | 'correct' | 'incorrect'

interface KeyProps {
  letter: string
  status?: KeyStatus
  className?: string
}

interface ShuangpinKeyboardProps {
  keyStatus: Record<string, 'correct' | 'incorrect'>
}

const Key = ({ letter, status = 'default', className }: KeyProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'correct':
        return 'bg-green-500/20 border-green-500'
      case 'incorrect':
        return 'bg-red-500/20 border-red-500'
      default:
        return 'hover:bg-accent'
    }
  }

  return (
    <div
      className={cn(
        'h-12 min-w-[2.5rem] border rounded-lg flex items-center justify-center transition-colors',
        getStatusColor(),
        className
      )}
    >
      {letter}
    </div>
  )
}

const keyboardLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

export function ShuangpinKeyboard({ keyStatus }: ShuangpinKeyboardProps) {
  return (
    <div className="select-none">
      {keyboardLayout.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-1 mb-1"
          style={{ marginLeft: `${rowIndex * 20}px` }}
        >
          {row.map(key => (
            <Key
              key={key}
              letter={key}
              status={keyStatus[key] || 'default'}
            />
          ))}
        </div>
      ))}
    </div>
  )
}