import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  nuxtApp.vueApp.use(
    VueGtag,
    {
      pageTrackerEnabled: true,
      deferScriptLoad: true,
      config: {
        id: config.public.gtagId,
      },
    },
    useRouter()
  );
});
