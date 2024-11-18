import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({mode }) => {
  return {
    plugins: [
      react(),
      // eslint({
      //   failOnError: false,
      //   exclude: ['/virtual:/**', 'node_modules/**'],
      // })
    ],
    // define: {
    //   'process.env': {
    //     MAILERSEND_API_KEY: 'mlsn.a78347aa85ac2c0bc227f7a387b1319383a637f7942fe75d6bdcb2208fcabf7f',
    //   }
    // },
    server: { port: 3000 },
    base: './',
    build: {
      outDir: './docs'
    },
    resolve: {
      alias: {
          root: path.resolve(__dirname, './'),
          '@': path.resolve(__dirname, './src'),
          assets: path.resolve(__dirname, './public/assets'),
          common: path.resolve(__dirname, './src/common'),
          components: path.resolve(__dirname, './src/components'),
          consts: path.resolve(__dirname, './src/consts'),
          hooks: path.resolve(__dirname, './src/hooks'),
          paths: path.resolve(__dirname, './src/paths'),
          store: path.resolve(__dirname, './src/store'),
          styles: path.resolve(__dirname, './src/styles'),
          utils: path.resolve(__dirname, './src/utils'),
      },
    },
  };
});