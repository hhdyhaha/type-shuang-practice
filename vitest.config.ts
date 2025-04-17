import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    isolate: false,
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: true,
      },
    },
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
})