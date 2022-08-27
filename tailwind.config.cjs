/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
	require("@tailwindcss/typography"),
    function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: "40rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          "@screen md": { maxWidth: "50rem" },
          "@screen lg": { maxWidth: "62rem" },
          "@screen xl": { maxWidth: "80rem" },
          "@screen 2xl": { maxWidth: "90rem" },
        },
      });
    },
  ],
};
