const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#CF81FF",
          secondary: "#0C192E",
          white: "#CCD6F6",
          gray: "#8892B0",
        },
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "cursive"],
        sans: ["Oswald", ...defaultTheme.fontFamily.sans],
        mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          backgroundPrimary: "#0d0c1d",
        },
      },
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          backgroundPrimary: "#f5f3f4",
        },
      },
    ],
  },
};
