<template>
  <div>
    <van-tabs v-model="active" sticky @click="onVanTab">
      <van-tab title="最新">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in newVertical" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.thumb" @click="imagePreview(item)"/>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="热门">
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in vertical" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.thumb" @click="imagePreview(item)"/>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import aibizhi from "@/api/aibizhi"
import {ImagePreview} from "vant";

export default {
  name: "category",
  data() {
    return {
      active: 0,
      id: this.$route.query.id,
      loading: false,
      finished: false,
      loading1: false,
      finished1: false,
      skip: 0,
      skip1: 0,
      newVertical: [],
      vertical: [],
    }
  },
  mounted() {
    this.getNewVerticalByIdData()
  },
  methods: {
    getNewVerticalByIdData() {
      aibizhi.getNewCategorybyid(this.id, this.skip).then(res => {
        // 加载状态结束
        this.loading = false
        const newVertical = res.res.vertical
        if (this.skip > 0) {
          if (newVertical.length === 0) {
            console.log('没有更多')
            this.finished = true;
          } else {
            this.newVertical = this.newVertical.concat(newVertical)
          }
        } else {
          this.newVertical = newVertical
        }
      }).catch(err => {
        // 加载状态结束
        this.loading = false
        console.log(err)
      })
    },
    getVerticalByIdData() {
      aibizhi.getCategorybyid(this.id, this.skip1).then(res => {
        // 加载状态结束
        this.loading1 = false
        const vertical = res.res.vertical
        if (this.skip1 > 0) {
          if (vertical.length === 0) {
            console.log('没有更多')
            this.finished1 = true;
          } else {
            this.vertical = this.vertical.concat(vertical)
          }
        } else {
          this.vertical = vertical
        }
      }).catch(err => {
        // 加载状态结束
        this.loading1 = false
        console.log(err)
      })
    },
    onLoad() {
      this.loading = true
      this.skip += 30
      this.getNewVerticalByIdData()

    },
    onLoad1() {
      this.loading1 = true
      this.skip1 += 30
      this.getVerticalByIdData()

    },
    imagePreview(item) {
      ImagePreview([item.preview]);
    },
    onVanTab(index) {
      if (index === 0) {
        if (this.newVertical.length === 0) {
          this.getNewVerticalByIdData()
        }
      } else if (index === 1) {
        if (this.vertical.length === 0) {
          this.getVerticalByIdData()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
