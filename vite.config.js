import { defineConfig } from 'vite'

// privacy.html is its own page so it can share src/style.css with the home page
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html'
      }
    }
  }
})
