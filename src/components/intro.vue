<template>
  <div>
    <div class="card">
      <img class="picture" :src="data.image" alt="Image" />
      <h2 class="heading">{{ data.name }}</h2>
      <div class="info-email subdata">
        <font-awesome-icon class="icon" size="2x" :icon="['fas', 'envelope']" />
        <span class="text">{{ data.email }}</span>
      </div>
      <div class="info-phone subdata">
        <font-awesome-icon class="icon" size="2x" :icon="['fas', 'phone']" />
        <span class="text">{{ data.phone }}</span>
      </div>
      <div class="info-address subdata">
        <font-awesome-icon class="icon" size="2x" :icon="['fas', 'map-pin']" />
        <span class="text">{{ data.address }}</span>
      </div>
      <div class="info-birthday subdata">
        <font-awesome-icon class="icon" size="2x" :icon="['fas', 'calendar']" />
        <span class="text">{{ this.getBirthday() }} ({{ this.getAge() }} anos)</span>
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
  grid-template-areas: 'picture heading heading heading' 'picture info-email info-email info-phone' 'picture info-address info-address info-birthday'

  @include upto(small)
    grid-template-areas: 'picture heading heading heading' 'picture info-email info-email info-email' 'picture info-address info-address info-address' 'picture info-phone info-birthday info-birthday'

  @include upto(mobile)
    grid-template-areas: 'heading' 'info-email' 'info-address' 'info-phone' 'info-birthday'
    justify-content: center

  .picture
    grid-area: picture
    @include upto(mobile)
      display: none

  .heading
    grid-area: heading
    font-size: 30px
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
    margin: auto auto

  svg
    height: auto
    margin: 0 15px

  .icon
    text-align: center
    width: 32px
    max-height: 32px
    @include upto(smallest)
      width: 0.9rem

  .subdata
      justify-content: left
</style>
