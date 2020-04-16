<template>
  <div>
    <div class="card">
      <img class="picture" :src="data.image" alt="Image" />
      <h2 class="heading">{{ data.name }}</h2>
      <div class="info-email">
        <font-awesome-icon size="1x" :icon="['fas', 'envelope']" />
        {{ data.email }}
      </div>
      <div class="info-phone">
        <font-awesome-icon size="1x" :icon="['fas', 'phone']" />
        {{ data.phone }}
      </div>
      <div class="info-address">
        <font-awesome-icon size="1x" :icon="['fas', 'map-marked-alt']" />
        {{ data.address }}
      </div>
      <div class="info-birthday">
        <font-awesome-icon size="1x" :icon="['fas', 'calendar']" />
        {{ this.getBirthday() }} ({{ this.getAge() }} anos)
      </div>
    </div>
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
  },
  methods: {
    getBirthday() {
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        this.data.birthday
      );
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
        this.data.birthday
      );
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
        this.data.birthday
      );
      return `${da} / ${mo} / ${ye}`;
    },
    getAge() {
      var ageDifMs = Date.now() - this.data.birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"

.card
  display: grid
  gap: 1rem
  grid-template-areas: 'picture heading heading' 'picture info-email info-address' 'picture info-phone info-birthday'

  @include upto(mobile)
    grid-template-areas: 'heading heading' 'info-email info-address' 'info-phone info-birthday'

  @include upto(smallest)
    grid-template-areas: 'heading' 'info-email' 'info-address' 'info-phone' 'info-birthday'
    justify-content: center

  .picture
    grid-area: picture
    @include upto(mobile)
      display: none

  .heading
    grid-area: heading
  .info-email
    grid-area: info-email
  .info-phone
    grid-area: info-phone
  .info-address
    grid-area: info-address
  .info-birthday
    grid-area: info-birthday

  > *
    display: flex
    align-items: center

  img
    height: 200px
    width: 200px

  svg
    height: auto
    margin: 0 10px
</style>
