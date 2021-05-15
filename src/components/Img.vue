<template>
  <div class="img-home" v-loading="loading">
    <div class="changeClass">
      <el-switch
        @change="changeCla"
        style="display: block"
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="最新"
        inactive-text="最热"
      ></el-switch>
    </div>
    <el-tabs tab-position="right" @tab-click="handleClick" v-model="activeName">
        <!-- 右边标签页 -->
      <el-tab-pane v-for="(name,index) of listName" :key="index" :label="name" :name="name"></el-tab-pane>
      <!-- 内容 -->
      <div class="imgs">
        <el-image :src="pic.img" lazy class="pic-li" v-for="(pic,index) of imgs" :key="index"></el-image>
      </div>
    </el-tabs>
    <!-- 分页 -->
    <div class="feny">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="limit"
        layout="total,prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "img-home",
  data() {
    return {
      loading: true,
      imgs: [],
      activeName: this.$route.params.name,
      listName: [], // 分类
      //   listIndex: "", // 当前点击 id
      id: this.$route.params.id,
      count: this.$route.params.count, // 最多
      name: this.$route.params.name, // 最多
      skip: 0,
      order: "new", // 最新 最热
      limit: 20, // 每页数量，暂定20
      currentPage1: 1,
      value4: true
    };
  },
  created() {
    let skip = this.skip;
    let id = this.id;
    let order = this.order;
    // console.log(skip);
    this.getInfo(id, order, skip);
    this.getlistName();
  },

  methods: {
    getInfo(id, order, skip) {
      this.$axios
        .get(
          `${this.theUrl}v1/vertical/category/${id}/vertical?limit=${
            this.limit
          }&order=${order}&skip=${skip}`
        )
        .then(res => {
          console.log(res);
          this.loading = false;
          this.imgs = res.data.res.vertical;
        });
    },
    changeCla() {
      console.log(this.value4);
      if (this.value4) {
        this.order = "new";
      } else {
        this.order = "hot";
      }
      this.getInfo(this.id, this.order, this.skip);
    },
    getlistName() {
      this.$axios.get(`${this.theUrl}v1/wallpaper/category`).then(res => {
        let _listName = res.data.res.category;
        _listName.forEach((item, index) => {
          this.listName.push(item.name);
        });
        console.log(this.listName);
      });
    },
    handleClick(tab, event) {
      console.log(tab.index);
      this.$axios.get(`${this.theUrl}v1/wallpaper/category`).then(res => {
        let _list = res.data.res.category;
        _list.forEach((item, index) => {
          if (index == tab.index) {
            this.id = item.id;
          }
        });
        console.log(this.id);
        this.getInfo(this.id, this.order, this.skip);
        this.currentPage1 = 1;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
      let _skip = (val - 1) * 20;
      this.getInfo(this.id, this.order, _skip);
    }
  }
};
</script>

<style scoped>
.img-home {
  padding: 2% 5%;
}
.imgs {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  box-shadow: 0 0 10px #ddd;
}
.pic-li:hover {
  box-shadow: 0 0 10px rgb(241, 60, 60);
}

.feny {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
}

.changeClass {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>
