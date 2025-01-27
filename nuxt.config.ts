// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxtjs/color-mode'],
  fontawesome: {
    icons: {
      solid: [
        'magnifying-glass',
        'bolt-lightning',
        'cloud',
        'dollar-sign',
        'cart-shopping',
        'chevron-down',
        'arrow-left',
        'arrow-right',
        'trophy',
        'film',
        'gamepad',
        'circle-play',
        'moon',
      ],
      brands: ['threads', 'x-twitter', 'youtube', 'spotify', 'linkedin', 'tiktok', 'instagram', 'discord'],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  css: ['@/assets/style/style.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },
  experimental: { appManifest: false },
})
