import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../", "");
  return {
    plugins: [react()],
    envDir: "../",
    server: {
      port: env.VITE_CLIENT_PORT,
    },
  };
});