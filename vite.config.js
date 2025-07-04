import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pruebas-material-ui/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false // Ayuda a reducir errores
  }
})