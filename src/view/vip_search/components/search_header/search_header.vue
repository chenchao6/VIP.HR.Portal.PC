<template>
	<div class="search-header">
		<div class="header-auto">
			<div class="header-logo"></div>
			<div class="header-search">
				<input type="text" v-model="searchValue"/>
				<div class="button-submit" @click="submit"></div>
			</div>
		</div>

		<div class="search-menu">
			<ul  class="header-auto">
				<li>
					<a @click="menuType('all')" :class="{'router-link-active':activeClass=='all'}">全部</a> 
				</li>
				<li>
					<a @click='menuType("policy")' :class="{'router-link-active':activeClass=='policy'}">政策/制度</a> 
				</li>
				<li>
					<a @click='menuType("notice")' :class="{'router-link-active':activeClass=='notice'}">公告</a> 
				</li>
				<li>
					<a @click='menuType("activity")' :class="{'router-link-active':activeClass=='activity'}">社团/活动</a> 
				</li>
			</ul>			
		</div>
	</div>	
</template>
<script>
	import '../../assets/scss/search_header.scss'
	export default{
		data(){
			return{
				activeClass:'all',
				searchValue:this.$route.query.type,
			}
		},
		created(){
			this.menuType('all');  //初始化默认获取all的数据
		},
		methods:{
			menuType(v){
				this.activeClass=v;  //切换是否选中的class
				this.$emit('increment',{  //发广播事件
					type:v,
					data:null
				})
			},
			submit(){
				console.log(this.$route.name);
			}
		}

	}
</script>
