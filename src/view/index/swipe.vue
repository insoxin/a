<template>
  <div>
    <div class="category-view">
      <van-image width="100%" fit="cover"
                 :src="lcover"/>
      <div class="category">{{ name }}</div>
    </div>
    <div class="desc">
      {{ desc }}
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="1"
              :immediate-check="false">
      <van-row gutter="4" style="padding: 4px">
        <van-col span="8" v-for="(item, index) in wallpaper" :key="index">
          <van-image width="100%" height="33.3vw" fit="cover" lazy-load
                     :src="item.img" @click="imagePreview(item)"/>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
import aibizhi from "@/api/aibizhi"
import {ImagePreview} from "vant";

export default {
  name: "swipe",
  data() {
    return {
      loading: false,
      finished: false,
      id: this.$route.query.id,
      desc: this.$route.query.desc,
      name: this.$route.query.name,
      lcover: this.$route.query.lcover,
      skip: 0,
      wallpaper: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      aibizhi.getsubject(this.skip, this.id).then(res => {
        // 加载状态结束
        this.loading = false
        const wallpaper = res.res.wallpaper
        if (this.skip > 0) {
          if (wallpaper.length === 0) {
            console.log('没有更多')
            this.finished = true
          } else {
            this.wallpaper = this.wallpaper.concat(wallpaper)
          }
        } else {
          this.wallpaper = wallpaper
        }
      }).catch(err => {
        // 加载状态结束
        this.loading = false
        console.log(err)
      })
    },
    imagePreview(item) {
      ImagePreview([item.preview])
    },
    onLoad() {
      this.loading = true
      this.skip += 30
      this.getData()
    }
  }
}
</script>

<style scoped>
.category {
  left: 8px;
  bottom: 10px;
}

.desc {
  padding: 20px 8px 16px 8px;
  font-size: 12px;
  color: #9c9595;
}

</style>
