<template>
  <div>
    <van-tabs v-model="active" sticky @click="onVanTab">
      <van-tab title="推荐">
        <van-swipe :autoplay="3000" style="padding-top: 4px">
          <van-swipe-item v-for="(item, index) in homepage" :key="index" @click="onChange(item)">
            <van-image width="100%" fit="cover" :src="item.thumb"/>
          </van-swipe-item>
        </van-swipe>
        <van-divider contentPosition="center"
                     :style="{ color: '#FC5C7D', borderColor: '#FC5C7D', padding: '0 16px','font-size': '15px' }">
          热门
        </van-divider>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in vertical" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.thumb" @click="imagePreview(item)"/>
            </van-col>
          </van-row>
        </van-list>

      </van-tab>
      <van-tab title="最新">
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1" offset="1"
                  :immediate-check="false">
          <van-row gutter="4" style="padding: 4px">
            <van-col span="8" v-for="(item, index) in newVertical" :key="index">
              <van-image width="100%" fit="cover" lazy-load
                         :src="item.thumb" @click="imagePreview(item)"/>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="分类">
        <van-row gutter="4" style="padding: 4px">
          <van-col span="8" v-for="(item, index) in category" :key="index">
            <div class="category-view">
              <van-image width="100%" height="33.3vw" fit="cover" lazy-load
                         :src="item.cover" @click="onCategory(item)"/>
              <div class="category">{{ item.name }}</div>
            </div>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {ImagePreview} from "vant";
import aibizhi from "@/api/aibizhi"

export default {
  name: "index",
  data() {
    return {
      active: 0,
      loading: false,
      finished: false,
      loading1: false,
      finished1: false,
      skip: 0,
      skip1: 0,
      homepage: [],
      vertical: [],
      newVertical: [],
      category: []
    }
  },
  mounted() {
    this.getVerticalData()
  },
  methods: {
    getVerticalData() {
      aibizhi.getHomepage(this.skip).then(res => {
        // 加载状态结束
        this.loading = false
        const data = res.res
        const vertical = data.vertical
        if (this.skip === 0) {
          const homepage = data.homepage[0].items
          for (let index = 0; index < homepage.length; index++) {
            const element = homepage[index];
            if (element.value.cover === undefined) {
              homepage.splice(index, 1)
            }
          }
          this.homepage = homepage
          this.vertical = vertical
        } else {
          if (vertical.length === 0) {
            console.log('没有更多')
            this.finished = true
          } else {
            this.vertical = this.vertical.concat(vertical)
          }
        }

      }).catch(err => {
        // 加载状态结束
        this.loading = false
        console.log(err)
      })
    },
    getNewVerticalData() {
      aibizhi.getVertical(this.skip1).then(res => {
        // 加载状态结束
        this.loading1 = false
        const newVertical = res.res.vertical
        if (this.skip1 > 0) {
          if (newVertical.length === 0) {
            console.log('没有更多')
            this.finished1 = true
          } else {
            this.newVertical = this.newVertical.concat(newVertical)
          }
        } else {
          this.newVertical = newVertical
        }
      }).catch(err => {
        // 加载状态结束
        this.loading1 = false
        console.log(err)
      })
    },
    getCategoryData() {
      aibizhi.getCategory().then(res => {
        this.category = res.res.category
      }).catch(err => {
        console.log(err)
      })
    },
    onLoad() {
      this.loading = true
      this.skip += 30
      this.getVerticalData()
    },
    onLoad1() {
      this.loading1 = true
      this.skip1 += 30
      this.getNewVerticalData()

    },
    imagePreview(item) {
      ImagePreview([item.preview]);
    },
    onChange(data) {
      this.$router.push({
        path: '/swipe',
        query: {
          id: data.value.id,
          desc: data.value.desc,
          name: data.value.name,
          lcover: data.value.lcover
        }
      })
    },
    onCategory(item) {
      this.$router.push({
        path: '/category',
        query: {
          id: item.id
        }
      })
    },
    onVanTab(index) {
      if (index === 0) {
        if (this.vertical.length === 0) {
          this.getVerticalData()
        }
      } else if (index === 1) {
        if (this.newVertical.length === 0) {
          this.getNewVerticalData()
        }
      } else if (index === 2) {
        if (this.category.length === 0) {
          this.getCategoryData()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
