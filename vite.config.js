import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src/client',
  publicDir: 'public',
  // base: "web",
  build: {
    outDir: '../server/web'
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Hooks: path.resolve(__dirname, './src/hooks')
    }
  },
  server: {
    // specify server port
    port: 9002,
    // set true so app will exit if port 9002 is already in used
    strictPort: true,
    hmr: {
      // allowing to serve the websocket on a different port than the client code looks for it on.
      // https://vitejs.dev/config/server-options.html#server-hmr
      clientPort: 9002
    }
  }
});
