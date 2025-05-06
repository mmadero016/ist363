import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jst363/hacker-stories/',
  plugins: [react()],
});
