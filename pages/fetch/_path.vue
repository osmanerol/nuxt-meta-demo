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
  name: 'FetchPathPage',
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `${this.data.albumId} - ${this.data.id}`
        },
        {
          hid: 'description',
          name: 'title',
          content: this.data.title
        },
        {
          hid: 'image',
          name: 'image',
          content: this.data.thumbnailUrl
        }
      ]
    }
  },
  data() {
    return {
      data: []
    }
  },
  async fetch() {
    const path = this.$route.params.path
    this.$axios.$get(`https://jsonplaceholder.typicode.com/photos/${path}`).then(data => 
    this.data = data)
  }
}
</script>
