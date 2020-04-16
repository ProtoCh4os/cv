<template>
  <div>
    <h2 class="heading">Experiência Profissional</h2>
    <div class="card">
      <div class="ability" v-for="(ability, index) in this.data" v-bind:key="index" 
        :class="{'last' : index == data.length - 1, 'first' : index == 0}"
      >
        <font-awesome-icon class="icon" size="2x" :icon="ability.image" />
        <span v-html="ability.description" class="title"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "abilities",
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

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"

.card
  display: flex
  flex-direction: column

  .ability
    display: grid
    grid-template-areas: 'icon title'
    grid-template-columns: 50px auto
    padding: 20px 0
    gap: 2rem
    align-items: center

    .icon
      grid-area: icon
      width: 50px
      height: auto

    .title
      grid-area: title

    .first
      padding-top: 0;

    .last
      padding-bottom: 0;
</style>
