import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  esbuild: { target: "es2019" },
  optimizeDeps: { esbuildOptions: { target: "es2019" } },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/pdf-proxy": {
        target: "https://arxiv.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pdf-proxy/, "/pdf"),
        configure: (proxy, options) => {
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["access-control-allow-origin"] = "*";
          });
        },
      },
    },
  },
});
