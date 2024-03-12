import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //target: 'es2015',
  },
  plugins: [
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
