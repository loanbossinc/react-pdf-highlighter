import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
  },
  plugins: [reactRefresh()],
  server: {
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
