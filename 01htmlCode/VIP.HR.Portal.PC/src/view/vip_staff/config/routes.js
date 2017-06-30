import home from '../components/home/home.vue'
export default [
	{
		path: '/home',
        component:home 
    },
    {
     	path: '/',  // 重定向的组件
     	redirect: '/home'
	},
]