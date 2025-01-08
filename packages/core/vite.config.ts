import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'wander-web-wizard',
      formats: ['es', 'umd'],
      // the proper extensions will be added
      fileName: 'wander-web-wizard',
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
})
