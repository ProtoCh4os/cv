<template>
  <div class="card">
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
