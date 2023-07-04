export default {
  head: {
    title: 'Nuxt config title 1',
    titleTemplate: '%s | Nuxt config title 2',
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
  css: [
    'primeflex/primeflex.css'
  ],
  plugins: [
    '~/plugins/axios'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'primevue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: '/',
  },
  build: {
    transpile: ['primevue'],
  }
}
