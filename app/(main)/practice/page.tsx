'use client'

import { useState, useEffect, useRef } from 'react'
import { PracticeText } from "@/components/practice/PracticeText"
import { PracticeStats } from "@/components/practice/PracticeStats"
import { KeymapHint } from "@/components/practice/KeymapHint"
import { getCharacterShuangpin, isShuangpinCorrect } from "@/lib/shuangpin/utils"
import { useSettingsStore } from "@/store/useSettingsStore"
import { isMobile } from 'react-device-detect'
import { Card } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const sampleText = "双拼输入法是一种快速的中文输入方式"

export default function PracticePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentInput, setCurrentInput] = useState("")
  const [keyStatus, setKeyStatus] = useState<Record<string, 'correct' | 'incorrect'>>({})
  const [startTime] = useState(Date.now())
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [totalKeystrokes, setTotalKeystrokes] = useState(0)
  const [wrongKeystrokes, setWrongKeystrokes] = useState(0)
  
  // 从全局状态获取设置
  const { currentScheme, soundEnabled } = useSettingsStore()
  
  // 错误提示音效
  const errorSoundRef = useRef<HTMLAudioElement | null>(null)
  
  // 获取当前字符的双拼码和拼音信息
  const currentChar = sampleText[currentIndex]
  const pinyinInfo = currentChar ? getCharacterShuangpin(currentChar) : null
  const nextKeys = pinyinInfo ? [pinyinInfo.initialKey.toUpperCase(), pinyinInfo.finalKey.toUpperCase()] : []
  
  useEffect(() => {
    errorSoundRef.current = new Audio('/sounds/error.mp3')
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (/^[a-z]$/.test(key)) {
        const newInput = currentInput + key
        const upperKey = event.key.toUpperCase()

        // 增加总按键次数
        setTotalKeystrokes(prev => prev + 1)

        // 检查按键是否是期望的下一个键
        const isCorrectKey = nextKeys[currentInput.length] === upperKey
        
        if (isCorrectKey) {
          // 只在按对键时更新输入
          setCurrentInput(newInput)
          // 暂时标记按键为正确
          setKeyStatus(prev => ({
            ...prev,
            [upperKey]: 'correct'
          }))

          // 如果输入了两个字母，检查整个双拼码是否正确
          if (newInput.length === 2) {
            const isCorrect = isShuangpinCorrect(sampleText[currentIndex], newInput)
            if (isCorrect) {
              setCurrentIndex(prev => prev + 1)
              setTypedText(prev => prev + sampleText[currentIndex])
              setCorrectCount(prev => prev + 1)
            } else {
              // 如果整个双拼码错误，将两个按键都标记为错误，并增加错误计数
              if (soundEnabled) {
                errorSoundRef.current?.play()
              }
              setKeyStatus({
                [nextKeys[0]]: 'incorrect',
                [nextKeys[1]]: 'incorrect'
              })
              setIncorrectCount(prev => prev + 1)
              // 两个按键都算作错误
              setWrongKeystrokes(prev => prev + 2)
            }
            // 重置输入
            setTimeout(() => {
              setCurrentInput("")
            }, 500)
          }
        } else {
          // 按错键时
          if (soundEnabled) {
            errorSoundRef.current?.play()
          }
          setKeyStatus(prev => ({
            ...prev,
            [upperKey]: 'incorrect'
          }))
          // 增加错误按键计数
          setWrongKeystrokes(prev => prev + 1)
          // 不累积错误的输入
          setCurrentInput("")
        }
      }
    }

    // 500ms后重置按键状态
    const resetTimer = setInterval(() => {
      setKeyStatus({})
    }, 500)

    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      clearInterval(resetTimer)
    }
  }, [currentIndex, currentInput, nextKeys, soundEnabled])

  // 如果是移动设备，显示提示页面
  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold">请在电脑上练习</h2>
            <p className="text-muted-foreground">
              为了获得最佳的练习体验，请使用电脑访问本站。双拼打字练习需要完整的键盘支持。
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回首页
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <PracticeStats
              startTime={startTime}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              totalLength={sampleText.length}
              totalKeystrokes={totalKeystrokes}
              wrongKeystrokes={wrongKeystrokes}
            />
          </div>
          
          <div className="mb-8 p-4 bg-muted/50 rounded-lg">
            <PracticeText 
              text={sampleText}
              currentIndex={currentIndex}
              typedText={typedText}
            />
          </div>

          <div className="mt-8">
            <KeymapHint 
              keyStatus={keyStatus} 
              nextKeys={nextKeys}
              currentInput={currentInput}
              pinyinInfo={pinyinInfo || undefined}
              scheme={currentScheme}
            />
          </div>
        </div>
      </div>
    </div>
  )
}