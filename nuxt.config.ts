// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['magnifying-glass', 'bolt-lightning', 'cloud', 'dollar-sign', 'cart-shopping', 'chevron-down', 'arrow-right', 'trophy'],
      brands: ['threads', 'x-twitter', 'youtube', 'spotify', 'linkedin', 'tiktok', 'instagram', 'discord'],
    },
  },
  css: ['@/assets/style/style.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
