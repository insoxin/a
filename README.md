# vuepic

> 安卓壁纸

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#### 安卓壁纸 的接口
```shell
let picUrl = http://service.picasso.adesk.com
```
1、获取分类：  
```shell
${picUrl}/v1/vertical/category
```
2、分类中根据类型id获取数据：  
```shell
${picUrl}/v1/vertical/category/${id}
```
3、壁纸大的分类为：new 和 hot：
```shell
${picUrl}/v1/vertical/category/${id}/vertical?order=new
```
4、壁纸中每页数量数量：limit 一般为 30 个：
```shell
${picUrl}/v1/vertical/category/${id}/vertical?limit=10
```
5、skip 为省略前多少张壁纸，逻辑：在分类中获取的每个分类中壁纸总数量 / 每页壁纸数量 = 需要多少页：
```shell
${picUrl}/v1/vertical/category/${id}/vertical?limit=10&order=new&skip=1
```
