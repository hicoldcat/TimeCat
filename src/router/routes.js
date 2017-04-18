/*路由配置文件*/

// 引入vue及相关插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 引入自定义单文件组件
import Home from 'pages/home/Home'
import daily from 'pages/daily/Daily'
import Travels from 'pages/travels/Travels'
import Vocality from 'pages/vocality/Vocality'
import Essay from 'pages/essay/Essay'
import Personal from 'pages/personal/Personal'
import ChooseTheme from 'pages/choosetheme/ChooseTheme'
import Detail from 'pages/detail/Detail'

// 注册插件
Vue.use(VueRouter)
Vue.use(Vuex)

// 配置routes
const routes = [
  {
    path: '/home',
    name: 'home',
    component:Home
  },
  {
    path: '/daily',
    name: 'daily',
    component:daily
  },
  {
    path: '/travels',
    name: 'travels',
    component:Travels
  },
  {
    path: '/vocality',
    name: 'vocality',
    component:Vocality
  },
  {
    path: '/essay',
    name: 'essay',
    component:Essay
  },
  {
    path: '/personal',
    name: 'personal',
    component:Personal
  },
  {
    path: '/choosetheme',
    name: 'choosetheme',
    component:ChooseTheme
  },
  {
    path: '/detail',
    name: 'detail',
    component:Detail
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
