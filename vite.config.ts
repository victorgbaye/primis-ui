import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(), // Enables React fast refresh and other React-specific optimizations
    dts({
      insertTypesEntry: true, // Automatically injects the types entry in the package.json, ensuring users of your library can easily access the types.
    }),
  ],
  build: {
    lib: {
      entry: 'src/components/index.tsx', // Specifies the entry file of your library. Ensure this file exports all components you wish to expose.
      name: 'PrimisUI', // The name for the global variable when using UMD builds. Useful for script tag imports.
      fileName: (format) => `primis-ui.${format}.js` // Defines the naming pattern for the output files across different formats (es, umd, etc.).
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Marks react and react-dom as external dependencies, preventing them from being bundled.
      output: {
        globals: {
          react: 'React', // Specifies global variables for external dependencies in UMD builds.
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true, // Generates source maps for your library, aiding in debugging.
    // Consider adding "treeshake": true to ensure unused exports are removed from the final bundle, enhancing optimization.
  },
});
