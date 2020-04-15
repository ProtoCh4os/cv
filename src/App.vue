<template>
  <div id="app">
    <el-header class="header" height="80px">
      <navbar />
    </el-header>

    <el-main class="body">
      <intro :data="this.intro" />
      <academy :data="this.academy" />
      <experience :data="this.experience" />
      <abilities :data="this.abilities" />
    </el-main>

    <el-footer class="footer">
      <page-footer />
    </el-footer>
  </div>
</template>

<script>
import {
  navbar,
  intro,
  academy,
  experience,
  abilities,
  pageFooter
} from "@/components";

import { mapState } from "vuex";

export default {
  name: "App",
  computed: mapState({
    intro: state => state.intro,
    academy: state => state.academy,
    experience: state => state.experience,
    abilities: state => state.abilities
  }),
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
@import "@/assets/sass/app.sass"
</style>
