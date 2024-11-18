import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

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
  };
});