import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path"; // 使用 node: 协议明确导入

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["vue"], // 明确包含 Vue 优化
  },
});
