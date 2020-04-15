<template>
  <div class="footer-nav">
    <a href="https://github.com/ProtoCh4os/cv" target="_blank" class="item">
      <el-tooltip effect="light" content="Código fonte" placement="top">
        <font-awesome-icon size="2x" :icon="['fas', 'file-code']" />
      </el-tooltip>
    </a>
    <el-tooltip class="item" effect="light" content="Desenvolvido em VueJS" placement="top">
      <font-awesome-icon class="accent" size="2x" :icon="['fab', 'vuejs']" />
    </el-tooltip>
    <a href="https://github.com/ProtoCh4os/" target="_blank" class="item">
      <el-tooltip effect="light" content="Github" placement="top">
        <font-awesome-icon size="2x" :icon="['fab', 'github']" />
      </el-tooltip>
    </a>
  </div>
</template>

<script>
export default {
  name: "page-footer"
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"

.footer-nav
  max-width: map-get($screen, large)
  display: flex
  flex-direction: row
  margin: 0 auto;
  justify-content: space-between

  .item
    padding: 10px 20px
    height: 40px
    width: auto
    margin: auto 0
</style>
