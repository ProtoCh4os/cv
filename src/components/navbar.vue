<template>
  <div class="nav">
    <Logo class="logo" />
    <a href="https://www.linkedin.com/in/victor-monteiro-cunha-aa6106160/" target="_blank" class="item">
      <el-tooltip effect="dark" content="LinkedIn" placement="bottom">
        <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
      </el-tooltip>
    </a>
    <a href="mailto:victor.monteiro.cunha@gmail.com" target="_blank" class="item">
      <el-tooltip effect="dark" content="Envie um E-mail" placement="bottom">
        <font-awesome-icon size="2x" :icon="['fas', 'envelope']" />
      </el-tooltip>
    </a>
    <a href="/cv/cv.pdf" target="_blank" class="item">
      <el-tooltip effect="dark" content="Baixar CV em PDF" placement="bottom">
        <font-awesome-icon size="2x" :icon="['fas', 'download']" />
      </el-tooltip>
    </a>
  </div>
</template>

<script>
import Logo from "@/components/logo";

export default {
  name: "navbar",
  components: {
    Logo
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/app.sass"

.nav
  height: 100%
  margin: 0 auto
  display: flex
  flex-direction: row
  justify-content: flex-end
  max-width: map-get($screen, large)

  .logo
    padding: 5px
    height: 70px
    margin-right: auto
    width: auto

  .item
    padding: 0 20px
    height: 30px
    width: auto
    margin: auto 0
</style>
