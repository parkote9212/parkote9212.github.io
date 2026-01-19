import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages base path

  // 성능 최적화
  build: {
    // 코드 스플리팅
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리
          'react-vendor': ['react', 'react-dom'],
          // Framer Motion
          'framer-motion': ['framer-motion'],
          // React Icons
          'react-icons': ['react-icons'],
        },
      },
    },
    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,
    // 소스맵 비활성화 (프로덕션)
    sourcemap: false,
  },

  // 개발 서버 최적화
  server: {
    port: 3000,
    open: true,
  },

  // 이미지 최적화
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
})
