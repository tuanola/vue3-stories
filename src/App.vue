<template>
  <div>
      <h1> Top Stories App </h1>
      <TopStoriesList/>
  </div>
</template>

<script>
import TopStoriesList from './components/TopStoriesList.vue'

export default {
  name: 'App',
  components: {
    TopStoriesList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
