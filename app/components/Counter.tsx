'use client'

import React from 'react'
import useCounterStore from '../store/useCounterStore'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Counter() {
  // 使用Zustand store，分别选择需要的状态和操作方法
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)
  const decrement = useCounterStore(state => state.decrement)
  const reset = useCounterStore(state => state.reset)
  const incrementBy = useCounterStore(state => state.incrementBy)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Zustand 计数器</CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col items-center">
        <div className="text-5xl font-bold mb-6">{count}</div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <Button variant="secondary" onClick={decrement}>-1</Button>
          <Button onClick={increment}>+1</Button>
          <Button variant="outline" onClick={reset}>重置</Button>
          <Button 
            onClick={() => incrementBy(5)}
          >
            +5
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          (使用 Zustand 管理状态)
        </p>
      </CardFooter>
    </Card>
  )
} 