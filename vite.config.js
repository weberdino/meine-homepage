// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/meine-homepage/', // z.B. '/meine-homepage/'
  plugins: [react(), tailwindcss(),],
  
})
