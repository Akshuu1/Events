import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Generate a 200.html fallback for static hosts (Surge, Firebase, etc.)
    rollupOptions: {
      input: 'index.html',
    },
  },
})
