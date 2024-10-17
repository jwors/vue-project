import { defineConfig } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": join(__dirname, "src")
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3397/",
        rewrite: (path) => path.replace(/^\/api/, 'http://localhost:3397/')
      }
    }
  }
})
