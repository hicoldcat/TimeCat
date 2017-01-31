import Vue from 'vue'
import router from './router/routes.js'

import './assets/less/index.less'
import App from './App.vue'


new Vue({
	router,
	template:'<App/>',
	components: {App}
}).$mount('#app')
