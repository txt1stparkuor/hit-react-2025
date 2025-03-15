import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hit-react-2025/", //  <-- ADD or CORRECT this line. Use YOUR repository name.
});
