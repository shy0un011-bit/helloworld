import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

const BASE_PATH = "/helloworld/";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_PATH ?? BASE_PATH,
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
