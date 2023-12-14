import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config = defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});

export default config;
