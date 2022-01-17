<template>
  <div class="hello">
    <h1>List</h1>
    <div v-if="loading">Loading...</div>
    <div
        v-else
        v-for="id in topStoriesList"
        :key="id"
    >
      {{ id }}
    </div>
  </div>
</template>

<script>
import useStories from '../composables/useStories';

export default {
  name: 'TopStoriesList',
  setup() {
    const {
        topStoriesList,
        loading,
        getList,
    } = useStories();

    return {
        topStoriesList,
        loading,
        getList,
    };
  },
  created() {
      this.getList();
  }

}
</script>

