import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // 使用 node: 协议明确导入

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
