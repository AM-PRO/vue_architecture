import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import path from 'path';

export default defineConfig({
  plugins: [vue(), Components({
    dirs: [
      "src/components",
      "src/views/**/*",
    ]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
