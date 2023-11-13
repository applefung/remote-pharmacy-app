import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pharmacy",
      filename: "pharmacy.js",
      exposes: {
        "./PharmacyDetail": "./src/pages/Pharmacies/Detail.tsx",
        "./PharmacyList": "./src/pages/Pharmacies/index.tsx",
      },
      remotes: {
        // ! localhost
        shared: "http://localhost:5001/assets/shared.js",
        // ! s3
        // shared: 'https://s3.ap-southeast-1.amazonaws.com/remote-app1.com/shared/dist/assets/shared.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@emotion/react', '@emotion/styled', '@mui/icons-material', '@mui/material'],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
