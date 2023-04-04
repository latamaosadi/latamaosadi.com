// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Robert Latamaosadi - Frontend Developer",
      meta: [
        {
          name: "description",
          content:
            "I'm a UX-oriented frontend developer specializing in building high-quality digital products. Currently a part of amazing people enabling exceptional digital financial experience at Brankas.",
        },
        {
          name: "og:image",
          content:
            "https://res.cloudinary.com/latamaosadi-com/image/upload/v1674896185/og-image.jpg",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
  },
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-delay-hydration",
    "nuxt-simple-sitemap",
    "@nuxtjs/robots",
    "@vueuse/motion/nuxt",
    "nuxt-gtag",
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
  motion: {
    visible: {
      transition: {
        duration: 800,
      },
    },
    directives: {
      "fade-left": {
        initial: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 800,
          },
        },
      },
    },
  },
  pwa: {
    icon: {
      source: "./assets/img/icon.png",
    },
    manifest: {
      name: "Robert Latamaosadi - Personal Website",
      short_name: "Robert Latamaosadi",
      lang: "en",
      description:
        "UX-oriented frontend developer specializing in building high-quality digital products",
      theme_color: "#0d0c1d",
      background_color: "#252422",
    },
    meta: {
      ogSiteName: "latamaosadi.com",
      ogTitle: "Robert Latamaosadi - Personal Website",
      ogDescription:
        "UX-oriented frontend developer specializing in building high-quality digital products",
      ogImage:
        "https://res.cloudinary.com/latamaosadi-com/image/upload/v1674896185/og-image.jpg",
      twitterCard: "summary_large_image",
    },
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "manual",
  },
  plugins: [
    // {
    //   src: "~/plugins/vue3-particles.ts",
    //   ssr: false,
    // },
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [
      "@heroicons/vue",
      // "vue3-particles"
    ],
  },
  sitemap: {
    hostname: "https://latamaosadi.com",
  },
  runtimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  image: {
    contentful: {},
  },
  webpack: {
    optimization: {
      splitChunks: {
        maxSize: 15000,
      },
    },
  },
});
