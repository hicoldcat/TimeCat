import Vue from 'vue'
import VueRouter from './router/routes.js'

import './assets/less/index.less'
import App from './App.vue'


new Vue({
	router:VueRouter,
	template:'<App/>',
	components: {App}
}).$mount('#app')

// 默认进入商品模块
VueRouter.push({ path: '/home' })
