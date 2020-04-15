<template>
  <div class="card">
    <h1>cu</h1>
  </div>
</template>

<script>
export default {
  name: "intro",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
