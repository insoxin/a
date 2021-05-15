<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.category-view {
  position: relative;
}

.category {
  position: absolute;
  bottom: 4px;
  left: 2px;
  color: white;
  font-size: 4vw;
}
</style>
