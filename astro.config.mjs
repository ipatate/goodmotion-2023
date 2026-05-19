import { loadEnv } from "vite";
const { SITE_URL, CONTACT_URL, SITE_LOCALE, ALTERNATE_SITE_URL } = loadEnv(import.meta?.env?.MODE || "", process.cwd(), "");
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { fileURLToPath } from "url";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  experimental: {},
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  site: SITE_URL || "https://www.goodmotion.fr",
  CONTACT_URL: CONTACT_URL || "https://www.goodmotion.fr",
  SITE_LOCALE: SITE_LOCALE || "fr",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        // FR : pas de /realisations dans le sitemap pour le moment
        // CH : les singles sont déjà filtrés par pays via getStaticPaths()
        if (SITE_LOCALE === "fr" && page.includes("/realisations")) {
          return false;
        }

        return true;
      },
    }),
    icon(),
    vue(),
  ],
  manifest: {
    appName: "Goodmotion",
    appShortName: "Goodmotion",
    appDescription: "Développement de sites web rapides et durables ! Genève, Lausanne, Annecy",
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
