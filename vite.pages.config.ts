import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "github-pages",
  base: "/",
  plugins: [react()],
  publicDir: "../public",
  resolve: {
    alias: {
      "next/image": path.resolve(projectRoot, "github-pages/next-image.tsx"),
    },
  },
  build: {
    outDir: "../pages-dist",
    emptyOutDir: true,
  },
});
