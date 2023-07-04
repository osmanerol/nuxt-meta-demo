export default ({ $axios }) => {
  $axios.onRequest(config => {
    return config
  })
}