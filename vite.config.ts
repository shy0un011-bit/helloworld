import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { writeFileSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages serves the project at https://<user>.github.io/helloworld/,
// so the production build needs that sub-path as its asset base.
// Locally (and in the Lovable preview) the app is served from the root.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH ?? "/";

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
      {
        // GitHub Pages has no SPA fallback: 404.html mirrors index.html so
        // deep links like /helloworld/projects still boot the app.
        // .nojekyll stops Pages from ignoring files/folders starting with "_".
        name: "github-pages-spa-fallback",
        apply: "build",
        closeBundle() {
          const outDir = resolve(process.cwd(), "dist");
          copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
          writeFileSync(resolve(outDir, ".nojekyll"), "");
        },
      },
    ],
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
