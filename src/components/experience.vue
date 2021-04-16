<template>
  <div>
    <h2 class="heading">Experiência Profissional</h2>
    <div class="card">
      <div class="list">
        <div
          class="place"
          v-for="(place, index) in this.data"
          :key="index"
          :class="{ last: index == data.length - 1, first: index == 0 }"
        >
          <div class="picture">
            <img :src="place.image" :alt="place.company" />
          </div>
          <h1 class="company">{{ place.company }}</h1>
          <span class="position">{{ place.position }}</span>
          <i class="start">De: {{ formatDate(place.start) }}</i>
          <i class="end">Até: {{ formatDate(place.end, true) }}</i>
        </div>
      </div>
      <el-timeline class="timeline">
        <el-timeline-item
          class="point"
          v-for="(place, index) in getTimeline(this.data)"
          :key="index"
          :class="place.shrink"
          >{{ formatDate(place.date, index === 0) }}</el-timeline-item
        >
      </el-timeline>
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
  },
  methods: {
    getTimeline: data => {
      const result = [];
      data.forEach((current, index) => {
        result.push(
          {
            date: current.end,
            shrink: "semi"
          },
          {
            date: current.start,
            shrink: "whole"
          }
        );
        if (index < data.length - 1) {
          const prev = data[index + 1];
          const curDate = new Date(current.start);
          const prevDate = new Date(prev.end);

          if (
            curDate.getMonth() != prevDate.getMonth() ||
            curDate.getFullYear() != prevDate.getFullYear()
          ) {
            result[result.length - 1].shrink = "half";
            result.push({
              date: false,
              shrink: "half"
            });
          }
        }
      });
      console.log(result);
      return result;
    },
    formatDate(date, last) {
      if (!date) {
        if (last) return "Presente";
        return "...";
      }
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
      const dateObj = date instanceof Date ? date : new Date(date);
      const month = dateObj.getMonth();
      return meses[month] + "/" + dateObj.getFullYear();
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"
.card
  display: flex
  flex-direction: row
  justify-content: stretch

  .list
    flex: 8
    display: flex
    flex-direction: column
    @include upto(smallest)
      flex: 1

    .place
      display: grid
      grid-template-areas: 'picture company start' 'picture  position end'
      grid-template-columns: 80px repeat(2, auto)
      gap: 1rem
      border-bottom: 1px solid map-get($colors, primary)
      padding: 20px 0
      text-align: center

      @include upto(smallest)
        grid-template-areas: 'picture company company' 'picture position position' 'picture start end'
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
        @include upto(smallest)
          justify-content: left

      .position
        grid-area: position
        @include upto(smallest)
          justify-content: left

      .start, .end
        display: none
        justify-content: flex-end
        padding-right: 20px
        @include upto(smallest)
          display: block

      .start
        grid-area: start
      .end
        grid-area: end

      > *
        display: flex
        align-items: center

        @include upto(smallest)
          justify-content: center

  .timeline
    flex: 2
    display: flex
    flex-direction: column

    @include upto(smallest)
      display: none

    .point
      text-align: center
      height: 100%

      &.half
        flex: 1
      &.semi
        flex: 2
      &.whole
        flex: 3

      &:first-of-type
        flex: 3

      &:last-of-type
        padding: 0
        margin: 0
        flex: 1
</style>
