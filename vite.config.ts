import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Automatically injects the types entry in the package.json
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.tsx', // Entry file for your library
      name: 'PrimisUI', // Global variable for UMD module, adjust accordingly
      fileName: (format) => `primis-ui.${format}.js` // Output file naming
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclude React from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true, // Optional: Enable source maps for better debugging
  },
});
