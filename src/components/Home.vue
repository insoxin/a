<template>
  <div id="Home">
    <div class="app-cont">
      <div class="picmenus">
        <div
          class="pic-li"
          v-for="(pic,index) in picMenus"
          :key="index"
          @mouseenter="pic.show = !pic.show"
          @mouseleave="pic.show = !pic.show" @click="clickPic(pic.id,pic.count,pic.name)">
          <el-image :src="pic.cover"></el-image>
          <transition name="slide-fade">
            <div class="pic-info" v-show="pic.show">
              <span class="title">{{pic.name}}</span>
              <span class="num">{{pic.count}}</span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      picMenus: []
    };
  },
  mounted() {
    this.$axios.get(`${this.theUrl}v1/wallpaper/category`).then(res => {
      let _picMenus = res.data.res.category;
      _picMenus.forEach((item, index) => {
        item.show = false;
      });
      console.log(_picMenus);
      this.picMenus = _picMenus;
    });
  },
  methods: {
    clickPic(id, num, name) {
      this.$router.push({
        name: "imgLink",
        params: { id: id, count: num, name: name }
      });
    }
  }
};
</script>

<style scoped>
#Home {
  width: 100%;
  height: calc(100% - 60px);
}
.app-cont {
  width: 100%;
  height: 100%;
  padding: 2% 5%;
}
.picmenus {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
}
.pic-li {
  position: relative;
  height: auto;
  width: 15%;
  margin: 5px;
  /* 如果一行有一个则一个撑满整行，如果有两个则两个撑满整行 */
  /* flex-grow: 1; */
  /* 给每个20%的宽 */
  flex-basis: 15%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}
.pic-li:hover {
  box-shadow: 0 0 10px #ddd;
}
.pic-info {
  position: absolute;
  left: 0;
  bottom: 5px;
  color: #fff;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0); */
  transition: all 0.8s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .pic-li {
    flex-basis: 25%;
  }
}
</style>
