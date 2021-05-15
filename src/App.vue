<template>
  <div id="app">
    <app-Header></app-Header>
    <router-view v-bind:isMobile="isMobile"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "app-Header": Header
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    console.log(this.theUrl)
    if (performance.navigation.type == 1) {
      console.info("This page is reloaded");
      this.$router.push({name: 'homeLink'})
    } else {
      console.info("This page is not reloaded");
    }
    if (this._isMobile()) {
      this.isMobile = true;
      console.log(this.isMobile, "手机端");
    } else {
      this.isMobile = false;
      console.log(this.isMobile, "pc端");
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
