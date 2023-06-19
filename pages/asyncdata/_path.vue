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
