<template>
	<div class="v-home-right">
		<div class="dl" v-for="(data,index) in  rightList"   :class="{'on':data.type}">
			<list-content :data="data"></list-content>
		</div>
		<dl class="" style="padding-top:8px;">
			<dt style="padding:14px 0;"></span>搜索历史</dt>
			<dd>安息免居</dd>
			<dd>福利政策</dd>
		</dl>	
		<div class="clear-hisy"><a>清空搜索历史</a></div>
	</div>
</template>
<script>
	import listContent from './listContent.vue'
	export default{
		data(){
			return {
				vname:'',
				rightList:[
					{
						name:'办事/FAQ',
						list:[
							'唯品会怎么入驻 入驻唯品会需要什么条件',
							'唯品会怎么入驻 入驻唯品会需要什么条件1',
							'唯品会怎么入驻 入驻唯品会需要什么条件2'
						]
					},
					{
						name:'公告',
						list:[
							'唯品会怎么入驻 入驻唯品会需要什么条件',
							'唯品会怎么入驻 入驻唯品会需要什么条件1',
							'唯品会怎么入驻 入驻唯品会需要什么条件2',
							'唯品会怎么入驻 入驻唯品会需要什么条件3'
						]
					},
					{
						name:'社团/活动',
						list:[
							'唯品会怎么入驻 入驻唯品会需要什么条件',
							'唯品会怎么入驻 入驻唯品会需要什么条件1',
							'唯品会怎么入驻 入驻唯品会需要什么条件2',
							'唯品会怎么入驻 入驻唯品会需要什么条件3'
						]
					}
				]
			}
		},
		created(){
			
		},
		methods:{
			
		},
		props:['type'],
		components:{
			listContent
		}
	}
</script>