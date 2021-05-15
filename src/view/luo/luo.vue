<template>
  <div>
    <van-tabs v-model="active" sticky @click="onVanTab">
      <van-tab title="推荐">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in featuredVideo" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.img" @click="onPlay(item)"/>
            </van-col>
          </van-row>
        </van-list>

      </van-tab>
      <van-tab title="最新">
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in newVideo" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.img" @click="onPlay(item)"/>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="热门">
        <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in hotVideo" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.img" @click="onPlay(item)"/>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import aibizhi from "@/api/aibizhi"

export default {
  name: "luo",
  data() {
    return {
      active: 0,
      loading: false,
      finished: false,
      loading1: false,
      finished1: false,
      loading2: false,
      finished2: false,
      featuredVideo: [],
      newVideo: [],
      hotVideo: [],
      skip: 0,
      skip1: 0,
      skip2: 0
    }
  },
  mounted() {
    this.getFeaturedVideo()
  },
  methods: {
    getFeaturedVideo() {
      aibizhi.getFeaturedVideo(this.skip).then(res => {
        // 加载状态结束
        this.loading = false
        const featuredVideo = res.res.videowp
        if (this.skip > 0) {
          if (featuredVideo.length === 0) {
            console.log('没有更多')
            this.finished = true
          } else {
            this.featuredVideo = this.featuredVideo.concat(featuredVideo)
          }
        } else {
          this.featuredVideo = featuredVideo
        }
      }).catch(err => {
        // 加载状态结束
        this.loading = false
        console.log(err)
      })
    },
    getNewVideo() {
      aibizhi.getNewVideo(this.skip1).then(res => {
        // 加载状态结束
        this.loading1 = false
        const newVideo = res.res.videowp
        if (this.skip1 > 0) {
          if (newVideo.length === 0) {
            console.log('没有更多')
            this.finished1 = true
          } else {
            this.newVideo = this.newVideo.concat(newVideo)
          }
        } else {
          this.newVideo = newVideo
        }
      }).catch(err => {
        // 加载状态结束
        this.loading1 = false
        console.log(err)
      })
    },
    getHotVideo() {
      aibizhi.getHotVideo(this.skip2).then(res => {
        // 加载状态结束
        this.loading2 = false
        const hotVideo = res.res.videowp
        if (this.skip2 > 0) {
          if (hotVideo.length === 0) {
            console.log('没有更多')
            this.finished2 = true
          } else {
            this.hotVideo = this.hotVideo.concat(hotVideo)
          }
        } else {
          this.hotVideo = hotVideo
        }
      }).catch(err => {
        // 加载状态结束
        this.loading2 = false
        console.log(err)
      })
    },
    onLoad() {
      this.loading = true
      this.skip += 30
      this.getFeaturedVideo()

    },
    onLoad1() {
      this.loading1 = true
      this.skip1 += 30
      this.getNewVideo()

    },
    onLoad2() {
      this.loading2 = true
      this.skip2 += 30
      this.getHotVideo()

    },
    onPlay(item) {
      this.$router.push({
        path: '/luoPlay',
        query: {
          url: item.video
        }
      })
    },
    onVanTab(index) {
      if (index === 0) {
        if (this.featuredVideo.length === 0) {
          this.getFeaturedVideo()
        }
      } else if (index === 1) {
        if (this.newVideo.length === 0) {
          this.getNewVideo()
        }
      } else if (index === 2) {
        if (this.hotVideo.length === 0) {
          this.getHotVideo()
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
