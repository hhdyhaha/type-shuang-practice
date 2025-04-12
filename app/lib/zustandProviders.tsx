'use client'

import { useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'

// 这个工具函数可以帮助在服务器组件中使用Zustand，避免hydration不匹配问题
export function createZustandProvider<S>(store: StoreApi<S>) {
  const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<StoreApi<S>>()
    
    if (!storeRef.current) {
      storeRef.current = store
    }
    
    return children
  }
  
  return StoreProvider
}

// 创建一个自定义钩子，用于在客户端组件中安全地访问store
export function useZustandStore<S, U>(
  store: StoreApi<S>,
  selector: (state: S) => U
): U {
  const value = useStore(store, selector)
  return value
} 