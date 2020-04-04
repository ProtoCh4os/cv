<template>
  <div id="app">
    <el-header class="header" height="80px">
      <navbar />
    </el-header>

    <el-main>
      <intro />
      <academy />
      <experience />
      <abilities />
    </el-main>

    <el-footer>
      <page-footer />
    </el-footer>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import intro from "@/components/intro";
import academy from "@/components/academy";
import experience from "@/components/experience";
import abilities from "@/components/abilities";
import pageFooter from "@/components/pageFooter";

export default {
  name: "App",
  components: {
    navbar,
    intro,
    academy,
    experience,
    abilities,
    pageFooter
  }
};
</script>

<style lang="sass">
@import "./assets/sass/app.sass"

.header
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)
  background: map-get($colors, default)
</style>
