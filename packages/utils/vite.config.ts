import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
// https://vite.dev/config/
export default defineConfig({
  plugins: [dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'utils',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'utils',
    },
  },
})
