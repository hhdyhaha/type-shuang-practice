import { create } from 'zustand'

// 定义状态类型
interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  incrementBy: (value: number) => void
}

// 创建store
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  incrementBy: (value) => set((state) => ({ count: state.count + value })),
}))

export default useCounterStore 