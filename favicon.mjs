/**
 * generate favicons and manifest
 */
import fs from "fs";
import { favicons } from "favicons";
import { dirname } from "path";

import config from "./astro.config.mjs";

// directory target for assets generated
const iconDir = config.iconsDir || "public";

// logo source
const source = config.source || "./public/favicon.svg";

// directory for build
const target = `./${iconDir}/`;

// tag filter to remove
const removeList = [
  "mobile-web-app-capable",
  "apple-mobile-web-app-capable",
  // 'manifest',
];

const configuration = {
  path: `/`,
  appName: config.manifest.appName,
  appShortName: config.manifest.appShortName,
  appDescription: config.manifest.appDescription,
  background: config.manifest.background,
  theme_color: config.manifest.theme_color,
  lang: config.manifest.lang,
  appleStatusBarStyle: "default", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  // scope: '/',
  start_url: "/",
  preferRelatedApplications: config.manifest.preferRelatedApplications,
  pixel_art: config.manifest.pixel_art,
  loadManifestWithCredentials: config.manifest.loadManifestWithCredentials,
  manifestMaskable: config.manifest.manifestMaskable,
  icons: {
    favicons: config.manifest.icons.favicons,
    android: config.manifest.icons.android,
    appleIcon: config.manifest.icons.appleIcon,
    appleStartup: config.manifest.icons.appleStartup,
    coast: config.manifest.icons.coast,
    yandex: config.manifest.icons.yandex,
    windows: config.manifest.icons.windows,
  },
  shortcuts: [],
  output: {
    images: true,
    files: true,
    html: true,
  },
};

try {
  const response = await favicons(source, configuration);

  // create manifest file
  if (response.files.length > 0) {
    const manifest = response.files[0].contents;
    fs.writeFileSync(`${target}manifest.webmanifest`, manifest);
  }

  // create images
  response.images.map((image) => {
    fs.writeFileSync(`${target}${image.name}`, image.contents);
  });

  // head generated
  const head = response.html;

  // remove element from removeList
  removeList.forEach((l) => {
    const index = head.findIndex((e) => e.includes(l));
    if (index) {
      head.splice(index, 1);
    }
  });

  // create head for include in page
  fs.writeFileSync("./src/components/Favicon.astro", head.join(""));
} catch (error) {
  console.log(error.message);
}
