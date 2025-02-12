import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': '/src'  // Ini akan memungkinkan Anda menggunakan @ sebagai alias untuk folder src
    }
  }
})
