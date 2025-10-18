// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://epflxplore.github.io/Website/", // ✅ optional but helps Astro generate correct URLs
  base: "/Website",                              // ✅ this is the crucial part
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});