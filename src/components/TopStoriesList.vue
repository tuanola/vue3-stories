<template>
  <div class="hello">
    <h1>List</h1>
    <div v-if="loading">Loading...</div>
    <div
        v-else
        v-for="item in topStoriesList"
        :key="item.id"
    >
      {{ item.id }}
      <StoryDetails
          :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import StoryDetails from '@/components/StoryDetails';
import { useStories } from '../composables/useStories';

export default {
  name: 'TopStoriesList',
  components: {
      StoryDetails,
  },
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

