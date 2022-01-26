<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
    name: 'StoryDetails',
    props: {
        title: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>

</style>
