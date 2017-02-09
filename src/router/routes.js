/*路由配置文件*/

// 引入vue及相关插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 引入自定义单文件组件
import MomentLife from 'components/momentlife/MomentLife'

// 注册插件
Vue.use(VueRouter)
Vue.use(Vuex)

// 配置routes
const routes = [
  {
    path: '/momentlife',
    component:MomentLife
  }
]

// 路由配置
 const router = new VueRouter({
	mode:"history",
	routes
})

 export default router
