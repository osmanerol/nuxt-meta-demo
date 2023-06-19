<template>
  <div class="home">
    <nuxt-link :to="{ name: 'asyncdata-path', params: { path: 1 } }">Async Data</nuxt-link>
    <nuxt-link :to="{ name: 'fetch-path', params: { path: 2 } }">Fetch</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'title',
          content: `title default`
        },
        {
          name: 'description',
          content: 'description default'
        },
        {
          property: 'og:title',
          content: 'title og'
        },
        {
          property: 'og:description',
          content: 'description og'
        },
        {
          property: 'og:image',
          content: 'https://storage.googleapis.com/nft-prod-bucket/nftdeli/nfts/BITCI/0xff693fb6829b40f1aad4759c08d86d20fd5e4893/6481.png'
        },
        {
          property: 'twitter:title',
          content: 'title twitter'
        },
        {
          property: 'twitter:description',
          content: 'description twitter' 
        },
        {
          property: 'twitter:image',
          content: 'https://storage.googleapis.com/nft-prod-bucket/nftdeli/nfts/BITCI/0xff693fb6829b40f1aad4759c08d86d20fd5e4893/6481.png'
        }
      ]
    }
  }
}
</script>
