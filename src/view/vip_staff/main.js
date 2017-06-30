import Vue from 'vue'
import VueRouter  from 'vue-router'
import routes from './config/routes'
import App from './App.vue'
import '@common/scss/style.scss'  //y引入公共的css
import './assets/scss/staff.scss'  //引入单独的css
Vue.use(VueRouter)
const router = new VueRouter({ 
	routes
})
new Vue({
	router,
	render:h => h(App)
}).$mount('#app');

router.push({path:'home',query:{type:'staff'}})