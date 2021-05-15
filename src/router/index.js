import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: resolve => {
                require(['@/view/layout'], resolve)
            },
            meta: {title: "暮雨红雪"},
            children: [
                {
                    path: '/',
                    component: resolve => {
                        require(['@/view/index/index'], resolve)
                    },
                    meta: {title: "壁纸"}
                },
                {
                    path: '/luo',
                    component: resolve => {
                        require(['@/view/luo/luo'], resolve)
                    },
                    meta: {title: "落"}
                }
            ]
        },
        {
            path: '/swipe',
            component: (resolve) => require(['@/view/index/swipe'], resolve),
            meta: {title: "暮雨红雪"}
        },
        {
            path: '/category',
            component: (resolve) => require(['@/view/index/category'], resolve),
            meta: {title: "暮雨红雪"}
        },
        {
            path: '/luoPlay',
            component: (resolve) => require(['@/view/luo/luoPlay'], resolve),
            meta: {title: "暮雨红雪"}
        },
        {
            path: '/404',
            component: (resolve) => require(['@/view/error/error'], resolve),
            meta: {title: "错误"}
        }
    ]
})
