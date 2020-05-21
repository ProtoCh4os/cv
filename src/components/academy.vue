<template>
  <div>
    <h2 class="heading">Formação</h2>
    <div class="card">
      <div
        class="place"
        v-for="(place, index) in this.data"
        v-bind:key="index"
        :class="{'last' : index == data.length - 1, 'first' : index == 0}"
      >
        <div class="picture">
          <img :src="place.image" :alt="place.name" />
        </div>
        <h1 class="name">{{place.name}}</h1>
        <span class="description">{{place.description}}</span>
        <i class="start">De: {{ formatDate(place.start) }}</i>
        <i class="end">Até: {{ formatDate(place.end) }}</i>
      </div>
    </div>
  </div>
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
  },
  methods: {
    formatDate(date) {
      const meses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dec"
      ];
      const dateObj = new Date(date);
      const month = dateObj.getMonth();
      return meses[month] + "/" + dateObj.getFullYear();
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"
.card
  .place
    display: grid
    grid-template-areas: 'picture name name start' 'picture description description end'
    grid-template-columns: 120px repeat(3, auto)
    gap: 1rem
    border-bottom: 1px solid map-get($colors, primary)
    padding: 20px 0

    @include upto(smallest)
      grid-template-areas: 'picture picture' 'name name' 'description description' 'start end'
      grid-template-columns: auto auto
      text-align: center

    &.first
      padding-top: 0

    &.last
      border: 0
      padding-bottom: 0

    .picture
      grid-area: picture
      img
        width: 120px

    .name
      grid-area: name

    .description
      grid-area: description

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
