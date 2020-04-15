<template>
  <div></div>
</template>

<script>
export default {
  name: "academy",
  props: {
    data: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style>
</style>
