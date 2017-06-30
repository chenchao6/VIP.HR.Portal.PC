<template>
	<div class="home">
		<headers @increment="incrementEvent"></headers>
		<contents :dataObj="obj"></contents>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
	import headers from './search_header/search_header.vue'
	import contents from './all/content.vue'

	export default{
		data(){
			return {
				obj:{},
			}
		},
		methods:{
			incrementEvent(o){
				this.obj=o;
				console.log(o);
			}
		},
		components:{
			headers,
			contents
		}
	}
</script>