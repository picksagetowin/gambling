import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'healthy-entered-necessarily-packs.trycloudflare.com' // 에러 창에 뜬 주소 추가
    ]
  }
})