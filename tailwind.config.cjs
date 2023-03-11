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
        primary: "#08556C",
        secondary: "#F9C907",
      },
      backgroundImage: {
        "hero-animated":
          "linear-gradient(180deg, rgba(229,240,242,1) 0%, rgba(229,240,242,1) 51%, rgba(245,247,247,1) 100%);",
        home: "url('/assets/home.svg')",
        "bg-home": "url('/assets/bg-hero.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
