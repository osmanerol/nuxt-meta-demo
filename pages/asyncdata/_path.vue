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
          name: 'title',
          content: `${this.data.albumId} - ${this.data.id} default`
        },
        {
          name: 'description',
          content: this.data.title + ' default'
        },
        {
          property: 'og:title',
          content: `${this.data.albumId} - ${this.data.id} og`
        },
        {
          property: 'og:description',
          content: this.data.title + ' og'
        },
        {
          property: 'og:image',
          content: this.data.thumbnailUrl
        },
        {
          property: 'twitter:title',
          content: `${this.data.albumId} - ${this.data.id} twitter`
        },
        {
          property: 'twitter:description',
          content: this.data.title + ' twitter' 
        },
        {
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
