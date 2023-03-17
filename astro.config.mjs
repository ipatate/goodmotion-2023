import { loadEnv } from "vite";
const { SITE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

console.log(SITE_URL);

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  site: SITE_URL || "https://www.goodmotion.fr",
  integrations: [tailwind(), mdx(), sitemap()],
});
