<template>
  <div class="detail">
    <nuxt-link :to="{ name: 'index' }">Home Page</nuxt-link>
    <button @click="$nuxt.refresh()">Refresh</button>
    <h1>Data:</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script>
export default {
  name: 'AsyncDataPathPage',
  head() {
    return {
      title: `${this.data.albumId} - ${this.data.id}`,
      meta: [
        {
          hid: 'override-title',
          name: 'title',
          content: `${this.data.albumId} - ${this.data.id} default`
        },
        {
          hid: 'override-description',
          name: 'description',
          content: this.data.title + ' default'
        },
        {
          hid: 'override-og:title',
          property: 'og:title',
          content: `${this.data.albumId} - ${this.data.id} og`
        },
        {
          hid: 'override-og:description',
          property: 'og:description',
          content: this.data.title + ' og'
        },
        {
          hid: 'override-og:image',
          property: 'og:image',
          content: this.data.thumbnailUrl
        },
        {
          hid: 'override-twitter:title',
          property: 'twitter:title',
          content: `${this.data.albumId} - ${this.data.id} twitter`
        },
        {
          hid: 'override-twitter:description',
          property: 'twitter:description',
          content: this.data.title + ' twitter' 
        },
        {
          hid: 'override-twitter:image',
          property: 'twitter:image',
          content: this.data.thumbnailUrl
        },
      ]
    }
  },
  async asyncData(context) {
    const path = context.route.params.path
    const data = await context.$axios.$get(`https://jsonplaceholder.typicode.com/photos/${path}`).then(data => 
    data)
    return { 
      data
    }
  },
}
</script>
