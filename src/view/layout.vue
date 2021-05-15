<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active" route active-color="#FC5C7D" inactive-color="#8a8a8a">
      <van-tabbar-item replace to="/">
        <span>壁纸</span>
        <template #icon="props">
          <img :src="props.active ? icon.tab_1 : icon.tab_01"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/luo">
        <span>落</span>
        <template #icon="props">
          <img :src="props.active ? icon.tab_2 : icon.tab_02"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
      icon: {
        tab_1: '/img/tab_1.png',
        tab_01: '/img/tab_01.png',
        tab_2: '/img/tab_2.png',
        tab_02: '/img/tab_02.png'
      },
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
