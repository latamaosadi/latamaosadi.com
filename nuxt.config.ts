// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Robert Latamaosadi",
      meta: [
        {
          name: "description",
          content:
            "I'm a UX-oriented frontend developer specializing in building high-quality digital products. Currently a part of amazing people enabling exceptional digital financial experience at Brankas.",
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
