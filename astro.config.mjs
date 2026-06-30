// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://epfl-xplore.ch", // canonical root domain (Cloudflare Pages)
  base: "",                       // served at site root; code does `BASE_URL + "/path"`, so empty avoids a `/Website` prefix and double slashes
  integrations: [react()],
  vite: {
    assetsInclude: ['**/*.pdf'],
    plugins: [tailwindcss()],
  },
});
