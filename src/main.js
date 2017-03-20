// 项目入口，配置全局vue
import Vue from 'vue'
import VueRouter from './router/routes.js'
import Store from './store/index.js'

import './assets/less/index.less'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
	router:VueRouter,
	store:Store,
	template:'<App/>',
	components: {App}
}).$mount('#app')

// 默认进入商品模块
VueRouter.push({ path: '/home' })
