<template>
  <div>
    <h2 class="heading">Experiência Profissional</h2>
    <div class="card">
      <div
        class="place"
        v-for="(place, index) in this.data"
        v-bind:key="index"
        :class="{'last' : index == data.length - 1, 'first' : index == 0}"
      >
        <div class="picture">
          <img :src="place.image" :alt="place.company" />
        </div>
        <h1 class="company">{{place.company}}</h1>
        <span class="position">{{place.position}}</span>
        <i class="start">De: {{ place.start }}</i>
        <i class="end">Até: {{ place.end }}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
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
  .place
    display: grid
    grid-template-areas: 'picture company start' 'picture  position end'
    grid-template-columns: 80px repeat(2, auto)
    gap: 1rem
    border-bottom: 1px solid map-get($colors, primary)
    padding: 20px 0
    text-align: center

    @include upto(smallest)
      grid-template-areas: 'picture company' 'position position' 'start end'
      grid-template-columns: auto auto

    &.first
      padding-top: 0

    &.last
      border: 0
      padding-bottom: 0

    .picture
      grid-area: picture
      img
        width: 80px

    .company
      grid-area: company

    .position
      grid-area: position

    .start
      grid-area: start
      justify-content: flex-end

    .end
      grid-area: end
      justify-content: flex-end

    > *
      display: flex
      align-items: center

      @include upto(smallest)
        justify-content: center !important
</style>
