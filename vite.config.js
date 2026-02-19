import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio',
  server: {
    hmr: {
      allowedHosts: ['0e82-106-221-216-201.ngrok-free.app'],
      overlay: false, // Disable error overlay
    },
  },
})

