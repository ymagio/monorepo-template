import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    root: 'src',
    plugins: [
      tsconfigPaths({
        projects: ['..', '../../P0']
      })
    ]
  }
})
