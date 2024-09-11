import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5001', // Adjust the backend URL/port if necessary
    },
  },
  build :{
    chunkSizeWarningLimit:1000
  }
});

