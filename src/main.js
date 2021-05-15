import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueWechatTitle from 'vue-wechat-title';
import router from './router'
import {Lazyload} from 'vant';


Vue.use(Lazyload);
Vue.use(VueWechatTitle)
Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
