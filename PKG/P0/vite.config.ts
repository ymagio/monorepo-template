/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    test: {
      exclude: ['./lib/**/*']
    },
    plugins: [tsconfigPaths()]
  }
})
