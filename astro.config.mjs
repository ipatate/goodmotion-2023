import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  site: 'https://www.goodmotion.fr',
  integrations: [tailwind(), mdx(), sitemap()]
});