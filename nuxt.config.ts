// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    baseURL: "/nuxt-minimize-market/",
  },

  modules: ["@nuxt/eslint", "@nuxtjs/stylelint-module", "@pinia/nuxt"],

  css: ["normalize.css/normalize.css", "~/assets/main.scss"],

  runtimeConfig: {
    public: {
      apiKey: "",
    },
  },
});
