import { createClient } from "contentful";
import contentful from "contentful";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const createClientFunc =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;

  const client = createClientFunc({
    space: config.public.CONTENTFUL_SPACE_ID,
    accessToken: config.public.CONTENTFUL_ACCESS_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };

  // nuxtApp.provide("contentfulClient", client);
});
