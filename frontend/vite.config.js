import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // Set the target to ES2015 or later
    outDir: 'frontend/build', // Output directory
  },
})
