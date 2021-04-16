<template>
  <div id="app">
    <el-header class="header" height="80px">
      <Navbar />
    </el-header>

    <elmain class="body">
      <Intro :data="this.intro" />
      <Academy :data="this.academy" />
      <Experience :data="this.experience" />
      <Abilities :data="this.abilities" />
    </elmain>

    <el-footer class="footer">
      <PageFooter />
    </el-footer>
  </div>
</template>

<script>
import {
  navbar as Navbar,
  intro as Intro,
  academy as Academy,
  experience as Experience,
  abilities as Abilities,
  pageFooter as PageFooter
} from "@/components";
import state from "@/state";

export default {
  name: "App",
  data() {
    return {
      ...state
    };
  },
  components: {
    Navbar,
    Intro,
    Academy,
    Experience,
    Abilities,
    PageFooter
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/app.sass"
</style>
