<template>
  <el-header>
    <router-link class="logo" :to="{name: 'homeLink'}">安卓壁纸</router-link>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link :to="{name: 'homeLink'}">分类</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{name: 'albumLink'}">专辑</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      activeIndex: "1"
    };
  },

};
</script>

<style scoped>
.logo {
  line-height: 60px;
}
.el-header {
  overflow: hidden;
  padding: 0 5%;
  /* border-bottom: 1px solid #ddd; */
  box-shadow: 0 0 10px #ddd;
}
.el-header h3 {
  display: inline-block;
}
.el-header ul {
  float: right;
}
.el-header ul li {
  padding: 0;
}
.el-header ul li a {
  padding: 0 20px;
  display: block;
}
</style>
