import Vue from 'vue'
import router from './routes.js'

import App from './components/App.vue'

new Vue({
	router,
	template:'<App/>',
	components: {App }
}).$mount('#app')
