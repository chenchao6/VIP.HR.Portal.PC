import home from '../components/home.vue'
export default [
	{
     	path: '/',  // 重定向的组件
     	redirect: '/home'
	},
	{
		path: '/home',
        component:home,
    }
 
]