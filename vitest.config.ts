import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    exclude: ['api', 'node_modules', 'dist'],
    environment: "jsdom",
  },
  root: ".", 
})