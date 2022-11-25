import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 软连接
  resolve: {
     alias: {
      "@": join(__dirname, "/src")
     } 
  },
  // 配置代理
  server: {
    proxy: {
      // 代理所有 /api 的请求 
      "/api": {
        // 代理请求之前的请求地址
        target: "http://127.0.0.1:8050/go-micro",
        // 跨域
        changeOrigin: true
      }
      
    }
  }
})
