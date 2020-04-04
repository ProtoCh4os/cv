<template>
  <div class="nav">
    <Logo class="logo" />
    <el-tooltip effect="light" content="Github" placement="bottom">
      <font-awesome-icon class="item" size="2x" :icon="['fab', 'github']" />
    </el-tooltip>
    <el-tooltip effect="light" content="LinkedIn" placement="bottom">
      <font-awesome-icon class="item" size="2x" :icon="['fab', 'linkedin']" />
    </el-tooltip>
    <el-tooltip effect="light" content="Envie um E-mail" placement="bottom">
      <font-awesome-icon class="item" size="2x" :icon="['fas', 'envelope']" />
    </el-tooltip>
    <el-tooltip effect="light" content="Baixar CV em PDF" placement="bottom">
      <font-awesome-icon class="item" size="2x" :icon="['fas', 'download']" />
    </el-tooltip>
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

<style lang="sass">
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
    padding: 10px
    height: 40px
    width: auto
    margin: auto 0
</style>
