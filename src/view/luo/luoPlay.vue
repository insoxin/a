<template>
  <div class="luoplay">
    <video :src="url" loop controls autoplay height="100%" width="100%"></video>
  </div>
</template>

<script>
export default {
  name: "luoPlay",
  data(){
    return{
      url: this.$route.query.url,
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.luoplay{
  background-color: black;
  height: 100vh;
}
</style>
