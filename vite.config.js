import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pruebas-material-ui/' // Corrección: añade / al inicio y final
})