export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt config title',
    titleTemplate: '%s | Nuxt config title',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      /*
      { hid: 'title', name: 'title', content: 'NFTDeli' },
      { hid: 'description', name: 'description', content: 'Nuxt config description' },
      { hid: 'image', itemprop: 'image', content: 'https://storage.googleapis.com/nft-prod-bucket/nftdeli/nfts/BITCI/0xff693fb6829b40f1aad4759c08d86d20fd5e4893/6481.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:type', property: 'og:title', content: 'NFTDeli og' },
      { hid: 'og:type', property: 'og:description', content: 'Nuxt config description og' },
      { hid: 'og:type', property: 'og:image', content: 'https://storage.googleapis.com/nft-prod-bucket/nftdeli/nfts/BITCI/0xff693fb6829b40f1aad4759c08d86d20fd5e4893/6481.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'NFTDeli twitter' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Nuxt config description twitter' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://storage.googleapis.com/nft-prod-bucket/nftdeli/nfts/BITCI/0xff693fb6829b40f1aad4759c08d86d20fd5e4893/6481.png' },
      */
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeflex/primeflex.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  }
}
