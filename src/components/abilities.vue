<template>
  <div>
    <h2 class="heading">Habilidades</h2>
    <div class="card">
      <div
        class="ability"
        v-for="(ability, index) in this.data"
        v-bind:key="index"
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
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))

  .ability
    filter: sepia(0%)
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)
    min-width: 100px
    border: 1px #000 solid
    border-radius: 2px
    padding: 10px
    margin: 10px 20px
    display: grid
    grid-template-areas: 'icon title'
    grid-template-columns: 50px auto
    padding: 20px 0
    gap: 2rem
    align-items: center
    transition: ease-in-out all 0.5s;

    &:hover
      filter: sepia(100%)
      transform: scale(1.05)

    .icon
      grid-area: icon
      width: 50px
      margin: 0 20px
      height: auto

    .title
      grid-area: title
      line-height: 22px
      margin: 0 20px;

    .first
      padding-top: 0

    .last
      padding-bottom: 0
</style>
