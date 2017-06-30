import Vue from 'vue'
import VueRouter  from 'vue-router'
import routes from './config/routes'
import App from './App.vue'
import './assets/js/linkcss.js'  //引入公共的css


Vue.use(VueRouter)

const router = new VueRouter({ 
	routes
})


new Vue({
	router,
	render:h => h(App)
}).$mount('#app');
