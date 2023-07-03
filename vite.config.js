import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './build/scss/_variables.scss';
          @import './src/assets/styles/styles.scss';
        `
      }
    }
  }
})
