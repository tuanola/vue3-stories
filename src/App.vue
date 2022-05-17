<template>
  <StoriesFilter />
  <TopStoriesList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StoriesFilter from '@/components/StoriesFilter.vue';
import TopStoriesList from '@/components/TopStoriesList.vue';

export default defineComponent({
  name: 'App',
  components: {
    StoriesFilter,
    TopStoriesList,
  }
});
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
