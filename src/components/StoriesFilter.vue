<template>
  <div>
    List length: {{ listLength }}
  </div>
</template>

<script>
import { useStories } from '@/composables/useStories';

export default {
    name: 'StoriesFilter',
    setup() {
        const {
            listLength,
    } = useStories();

    return {
        listLength,
    };
  },
}
</script>

<style scoped>

</style>