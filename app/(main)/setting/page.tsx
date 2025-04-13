'use client'

import { useEffect } from 'react'
import { SchemeSelector } from "@/components/practice/SchemeSelector"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useSettingsStore } from "@/store/useSettingsStore"

export default function SettingPage() {
  const { 
    currentScheme, 
    soundEnabled,
    setScheme,
    setSoundEnabled,
    initializeSettings 
  } = useSettingsStore()

  // 初始化设置
  useEffect(() => {
    initializeSettings()
  }, [initializeSettings])

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">练习设置</h1>
          <p className="text-muted-foreground">
            在这里可以调整双拼练习的各项设置
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">输入方案</h2>
          <SchemeSelector 
            currentScheme={currentScheme}
            onSchemeChange={setScheme}
          />
        </Card>

        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-semibold">声音设置</h2>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="sound-toggle">错误提示音</Label>
              <p className="text-sm text-muted-foreground">
                在输入错误时播放提示音效
              </p>
            </div>
            <Switch
              id="sound-toggle"
              checked={soundEnabled}
              onCheckedChange={setSoundEnabled}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">键位提示</h2>
          <p className="text-sm text-muted-foreground mb-4">更多设置选项开发中...</p>
          <div className="text-sm text-muted-foreground">
            计划添加的功能：
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>键盘布局自定义</li>
              <li>提示显示时间调整</li>
              <li>键位配色方案</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}