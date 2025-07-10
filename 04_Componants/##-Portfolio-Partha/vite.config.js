import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/React-Learning/",
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173,
  },
});
