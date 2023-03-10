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
        home: "url('/assets/home.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
