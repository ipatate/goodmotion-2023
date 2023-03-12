const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#e9fffe",
          100: "#c7fffd",
          200: "#96fffb",
          300: "#4dfffa",
          400: "#00f9ff",
          500: "#00dbf9",
          600: "#00acd0",
          700: "#0088a7",
          800: "#046d86",
          900: "#08556c",
        },
        secondary: {
          50: "#fefde8",
          100: "#fffcc2",
          200: "#fff689",
          300: "#ffe945",
          400: "#fcd713",
          500: "#f9c907",
          600: "#cc9402",
          700: "#a36905",
          800: "#86520d",
          900: "#724311",
        },
      },
      backgroundImage: {
        "hero-animated":
          "linear-gradient(180deg, rgba(229,240,242,1) 0%, rgba(229,240,242,1) 51%, rgba(245,247,247,1) 100%);",
        "bloc-logo":
          "linear-gradient(180deg, rgba(219,221,222,1) 0%, rgba(245,247,247,1) 100%);",
        "bloc-logo-inverse":
          "linear-gradient(0deg, rgba(219,221,222,1) 0%, rgba(245,247,247,1) 100%);",
        home: "url('/assets/home.svg')",
        "bg-home": "url('/assets/bg-hero.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
