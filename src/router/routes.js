/*路由配置文件*/

// 引入vue及相关插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 引入自定义单文件组件
import Home from 'modules/home/Home'
import daily from 'modules/daily/Daily'
import MeetYourself from 'modules/meetyourself/MeetYourself'
import HearSensation from 'modules/hearsensation/HearSensation'
import CharacterSkip from 'modules/characterskip/CharacterSkip'

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
    path: '/meetyourself',
    component:MeetYourself
  },
  {
    path: '/hearsensation',
    component:HearSensation
  },
  {
    path: '/characterskip',
    component:CharacterSkip
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
