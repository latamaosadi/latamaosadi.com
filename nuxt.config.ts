// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Robert Latamaosadi",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      meta: [
        {
          name: "description",
          content: "A Personal Portfolio",
        },
      ],
    },
  },
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    [
      "@nuxtjs/color-mode",
      {
        fallback: "dark",
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        preconnect: true,
        families: {
          Roboto: [100, 200, 300, 400, 500, 600, 700],
          Lato: [100, 200, 300, 400, 500, 600, 700],
          "Press Start 2P": true,
          "Roboto Mono": true,
          "Roboto Condensed": true,
          Oswald: true,
        },
      },
    ],
  ],
  plugins: [
    {
      src: "~/plugins/vue3-particles.ts",
      ssr: false,
    },
  ],
  css: ["~/assets/css/main.css", "aos/dist/aos.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@heroicons/vue", "vue3-particles"],
  },
  runtimeConfig: {
    public: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      GTAG_ID: process.env.GTAG_ID,
    },
  },
  image: {
    contentful: {},
  },
});
