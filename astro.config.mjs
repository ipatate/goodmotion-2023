import { loadEnv } from "vite";
const { SITE_URL, CONTACT_URL } = loadEnv(
  import.meta?.env?.MODE || "",
  process.cwd(),
  "",
);
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  experimental: {
  },
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  site: SITE_URL || "https://www.goodmotion.fr",
  CONTACT_URL: CONTACT_URL || "https://www.goodmotion.fr",
  integrations: [mdx(), sitemap(), icon(), vue()],
  manifest: {
    appName: "Goodmotion",
    appShortName: "Goodmotion",
    appDescription:
      "Développement de sites web rapides et durables ! Genève, Lausanne, Annecy",
    background: "#f8f8f8",
    theme_color: "#08556c",
    lang: "fr",
    preferRelatedApplications: false,
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestMaskable: false,
    icons: {
      favicons: true,
      android: true,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      yandex: false,
      windows: false,
    },
  },
});
