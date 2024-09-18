import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: "./",
  // base: "https://github.com/cd-Shrey13/Flood-Prediction-Tool/"
})
