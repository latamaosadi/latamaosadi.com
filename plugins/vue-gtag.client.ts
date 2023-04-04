import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(
    createGtm({
      id: config.public.gtagId,
      defer: false,
      compatibility: false,
      nonce: '2726c7f26c',
      vueRouter: useRouter(),
      trackOnNextTick: false,
    })
  )
})
