<template>
  <div class="album">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in banners" :key="item">
        <el-image :src="item" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>

    <div class="picmenus">
        <div
          class="pic-li"
          v-for="(pic,index) of picMenus"
          :key="index"
          @mouseenter="pic.show = !pic.show"
          @mouseleave="pic.show = !pic.show"
        >
          <el-image :src="pic.img" :title="pic.desc"></el-image>
          <transition name="slide-fade">
            <div class="pic-info" v-show="pic.show">
              <span class="title">{{pic.name}}</span>
            </div>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "album",
  data() {
    return {
      banners: [],
      picMenus: [],
    };
  },
  created() {
    this.$axios.get(`${this.theUrl}v1/wallpaper/album`).then(data => {
      let _banners = data.data.res.banner;
      let _picMenus = data.data.res.album;
      _banners.forEach((item, index) => {
        this.banners.push(item.thumb);
      });
      _picMenus.forEach((item,index)=>{
          this.picMenus.push({
              id: item.id,
              name: item.name,
              desc: item.desc,
              img: item.cover,
              show: false
          })
      })
      console.log(this.picMenus);
    });
  }
};
</script>

<style scoped>
.album {
  padding: 2% 5%;
}
.el-carousel__container {
    height: 350px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-image {
  width: 100%;
  height: 100%;
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
  margin: 5px;
  /* 如果一行有一个则一个撑满整行，如果有两个则两个撑满整行 */
  flex-grow: 1;
  /* 给每个20%的宽 */
  flex-basis: 20%;
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
</style>
