import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
})

