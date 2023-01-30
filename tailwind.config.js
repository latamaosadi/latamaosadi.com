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
      animation: {
        tilt: "tilt 10s infinite linear",
        blob: "blob 7s infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
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
          // backgroundPrimary: "#0d0c1d",
          backgroundPrimary: "#252422",
        },
      },
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          // backgroundPrimary: "#f5f3f4",
          backgroundPrimary: "#f0ebd8",
        },
      },
    ],
  },
};
