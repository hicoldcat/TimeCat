/*路由配置文件*/

// 引入vue及相关插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 引入自定义单文件组件
import Home from 'modules/home/Home'
import daily from 'modules/daily/Daily'
import Travels from 'modules/travels/Travels'
import Vocality from 'modules/vocality/Vocality'
import Essay from 'modules/essay/Essay'

// 注册插件
Vue.use(VueRouter)
Vue.use(Vuex)

// 配置routes
const routes = [
  {
    path: '/home',
    component:Home
  },
  {
    path: '/daily',
    component:daily
  },
  {
    path: '/travels',
    component:Travels
  },
  {
    path: '/vocality',
    component:Vocality
  },
  {
    path: '/essay',
    component:Essay
  },
  {
    path: '/',
    component:Home
  }
]

// 路由配置
 const router = new VueRouter({
	mode:"history",
	routes
})

 export default router
