<template>
  <div class="sigDiv" v-observe-visibility="signatureIsVisible">
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4493 27.7854C20.4688 39.2659 27.1689 51.0915 34.8412 62.1598C36.2407 64.1787 39.8445 70.8533 41.8168 65.5313C45.9898 54.2708 48.5087 42.1682 51.9702 30.6532C52.7369 28.1029 54.085 20.2453 53.9079 22.9025C53.743 25.3763 51.5667 27.8054 50.8464 30.1881C49.1996 35.6352 48.095 41.4455 46.9323 46.9684C46.4557 49.2322 44.9968 51.405 46.5447 53.3627C48.9808 56.4436 52.5382 62.0814 56.0006 63.9037C58.3336 65.1316 60.4168 66.0469 62.6662 67.5465C63.5428 68.1309 68.9072 71.525 65.3789 69.6004C61.5836 67.5303 57.131 63.511 54.4504 60.1833C53.5037 59.008 52.1357 58.2083 51.1176 57.083C50.1016 55.96 49.9901 54.3432 49.0249 53.2077C48.1398 52.1664 45.8074 50.805 48.4049 50.805C52.2654 50.805 55.7716 48.0657 58.4808 45.5733C62.9243 41.4852 68.8924 39.0954 73.6721 35.4586C76.4122 33.3738 77.625 31.3366 77.625 27.7854C77.625 23.3285 75.6764 15.6983 72.7033 12.1678C71.0566 10.2123 67.0309 8.75073 64.6813 7.9049C59.5364 6.05271 54.5749 3.66604 49.18 2.51817C40.0027 0.565557 30.7203 0.331733 22.1688 4.76587C14.3387 8.82592 8.37114 14.3662 4.69098 22.5925C3.79098 24.6042 3.96023 27.5535 3.37336 29.7231C2.16909 34.1753 0.974494 38.5722 0.89314 43.2093C0.814806 47.6744 0.467225 52.2231 2.28827 56.3855C5.60315 63.9624 9.17252 70.5847 17.0921 73.8245C32.7686 80.2377 51.8984 90.3971 68.4017 80.6452C69.8111 79.8123 70.7203 78.404 72.0445 77.4674C74.6521 75.623 77.8289 74.721 80.2602 72.5844C82.6013 70.5272 82.5776 65.6112 83.5155 62.6635C84.4089 59.8557 84.2688 55.9451 84.5619 53.0139C84.7149 51.4839 83.2256 50.805 81.8104 50.805"
        stroke="white"
        ref="signature"
        id="signature"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledToSignature: false
    };
  },
  methods: {
    signatureIsVisible() {
      if (!this.scrolledToSignature) {
        this.scrolledToSignature = true;
        this.$refs.signature.classList.value = "animated";
        this.$refs.signature.addEventListener("animationend", ({ target }) => {
          target.classList.value = "completed";
        });
      }
    }
  }
};
</script>

<style scoped>
.sigDiv {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 20px;
}

#signature {
  stroke-dasharray: 468.6925048828125;
  stroke-dashoffset: 468.6925048828125;
}

#signature.animated {
  animation: sign 4s ease;
}
#signature.completed {
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
}

@keyframes sign {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
