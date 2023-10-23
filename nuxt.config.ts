// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/ionic"],
  css: ["@/theme/variables.css"],
  ssr: false,
  ionic: {
    css: {
      core: true,
      basic: true,
      utilities: true
    }
  }
})
