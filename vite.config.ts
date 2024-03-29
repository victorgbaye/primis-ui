import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      // This is where you can add options for the plugin. For most use cases, the default options are sufficient.
      // For example, to specify the output directory for the type definitions, you can use:
      // outDir: 'dist'
    }),
  ],
  build: {
    lib: {
      entry: 'src/components/index.tsx', // Update this path to your library's entry point
      name: 'prmisUI', // The global name used when using UMD
      fileName: (format) => `primis-ui.${format}.js` // Output file name
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom'],
      output: {
        // Configure globals for UMD build; necessary for externalized imports
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // Optionally, specify sourcemap generation for better debugging
    sourcemap: true,
  }
});
