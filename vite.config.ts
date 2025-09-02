import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(), // React support
  ],
  resolve: {
    alias: {
      "@": path.resolve('./client/src'),
      "@shared": path.resolve('./shared'),
      "@assets": path.resolve('./attached_assets'),
    },
  },
  root: path.resolve('./client'),
  build: {
    outDir: path.resolve('./dist/public'), // frontend build output
    emptyOutDir: true,
  },
  server: {
    port: 3000, // only for local development
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
