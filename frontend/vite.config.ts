import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      // Pour s'assurer que les changements sont bien surveillés
      usePolling: true,
    },
  },
})
