// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App'
import './index.css'

import Home from './components/Home'
import Album from './components/Album'
import Img from './components/Img'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.prototype.theUrl = process.env.API_HOST;

const routes = [
  {path: '/picVue',name: 'homeLink',component: Home},
  {path: '/picVue/album',name: 'albumLink',component: Album},
  {path: '/picVue/img',name: 'imgLink',component: Img},
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
