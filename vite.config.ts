// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project page URL: https://shy0un011-bit.github.io/helloworld/
// If you rename the repo or use a custom domain, update this value.
const BASE_PATH = "/helloworld/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Static export for GitHub Pages: produce plain HTML files instead of a worker runtime.
  // NOTE: This preset is only honored outside the Lovable sandbox build environment.
  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist/client",
      serverDir: "dist/server",
    },
    prerender: {
      routes: [
        `${BASE_PATH}`,
        `${BASE_PATH}about`,
        `${BASE_PATH}experience`,
        `${BASE_PATH}projects`,
        `${BASE_PATH}skills`,
        `${BASE_PATH}contact`,
      ],
      crawlLinks: true,
    },
  },
  vite: {
    base: BASE_PATH,
  },
});
