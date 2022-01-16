<template>
  <div class="hello">
    <h1>List</h1>
    <div v-for="id in topStoriesList" :key="id"> {{ id }} </div>
  </div>
</template>

<script>
//import { ref } from 'vue';
import useStories from '../composables/useStories';

export default {
  name: 'TopStoriesList',
  setup() {
    const { topStoriesList, getList } = useStories();

    return {
      topStoriesList,
      getList,
    };
  },
  created() {
    this.getList();
  }

}
</script>

