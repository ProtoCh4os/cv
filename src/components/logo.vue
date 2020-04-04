<template>
  <svg
    version="1.1"
    id="Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 388"
    style="enable-background:new 0 0 1000 388;"
    xml:space="preserve"
  >
    <g>
      <polygon
        class="logo-color-primary"
        points="48.5,230.9 165.2,366 197.6,340 143.1,243.9 60.2,182.9 	"
      />
      <polygon class="logo-color-primary" points="839.6,28 807.2,54 861.6,150.1 956.2,163.1 	" />
      <polygon
        class="logo-color-secondary"
        points="265.3,143.7 235.5,166.4 293.5,250.1 325.2,250.1 310,209.6 	"
      />
      <polygon
        class="logo-color-secondary"
        points="344.9,35.1 63.7,178 143.1,236.9 235.5,166.4 265.3,143.7 366,66.8 	"
      />
      <path
        class="logo-color-secondary"
        d="M562,129.7l-25.3,45c-2.6,4.7-5,8.8-6.9,12.2c-2,3.5-3.7,6.6-5.2,9.5c-1.5,2.8-2.8,5.3-4,7.6
          c-1.1,2.2-2.2,4.4-3.1,6.6l14.2,39.6l22.7-41.8c4.1-7.8,7.4-14.2,9.9-19.4c2.5-5.1,4.8-9.7,6.8-14l22.1-45.4H562z"
      />
      <path
        class="logo-color-secondary"
        d="M431.6,129.7l-35.4,120.4h36.5l11.3-41.9c1.8-6.8,3.4-12.9,4.7-18.1c1.3-5.2,2.5-10.2,3.4-15l10.8-45.4H431.6z
          "
      />
      <polygon
        class="logo-color-secondary"
        points="728.2,219.1 704.6,250.1 737.1,250.1 777.7,219.1 	"
      />
      <polygon
        class="logo-color-secondary"
        points="691.8,161 716.2,129.7 677.5,129.7 630.6,185.6 651.4,211.7 669.9,188.7 	"
      />
      <polygon
        class="logo-color-secondary"
        points="861.6,155.1 777.7,219.1 737.1,250.1 638.7,325.2 663.3,359 944.6,216.1 956.2,168.1 	"
      />
      <polygon class="logo-color-primary" points="371.5,129.7 315,209.6 330.2,250.1 415.4,129.7 	" />
      <polygon
        class="logo-color-primary"
        points="468,129.7 457.2,175 496.6,250.1 526.6,250.1 512.4,210.5 	"
      />
      <polygon class="logo-color-primary" points="576.1,175 595.7,250.1 632.8,250.1 598.2,129.7 	" />
      <polygon class="logo-color-primary" points="766.5,161 791.4,129.7 722.2,129.7 696.8,161 	" />
      <polygon
        class="logo-color-primary"
        points="698.3,219.1 674.9,188.7 654.3,214.7 682.5,250.1 698.6,250.1 722.2,219.1 	"
      />
    </g>logo
  </svg>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"
.logo-color-primary
    fill: map-get($colors, primary)
.logo-color-secondary
    fill: map-get($colors, primary-light)
</style>