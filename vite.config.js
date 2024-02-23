import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "http://localhost:3000/",
  server: {
    port: 3000,
    headers: {
      ".js": "text/javascript",
    },
  },
});
