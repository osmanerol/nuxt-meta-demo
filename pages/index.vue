<template>
  <div class="home">
    <nuxt-link :to="{ name: 'asyncdata-path', params: { path: 1 } }">Async Data</nuxt-link>
    <nuxt-link :to="{ name: 'fetch-path', params: { path: 2 } }">Fetch</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
