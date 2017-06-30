<template>
	<div class="home-wrapp">
		<div class="v-home-left">
			<div class="search-info">
				<div class="search-num">您输入的关键词为“唯品会”共有 3126 条记录</div>
				<p class="info-title">"唯品会"最新相关消息</p>
				<ul class="info-ul">
					<li>
						<em>2017-07-25</em>
						<a href="#">免息安居贷款50万 ! 唯品会最受欢迎福利留人有效再加码</a>
					</li>
					<li>
						<em>2017-04-26</em>
						<a href="#">唯品会推出安居免息贷款计划 给员工发放一亿元无息贷款</a>
					</li>
					<li>
						<em>2017-04-25</em>
						<a href="#">员工享30万元免息贷款 , 唯品会升职攻略</a>
					</li>
					<li>
						<em>2017-02-21</em>
						<a href="#">唯品会无息贷款 员工安居乐业不是梦-房金所</a>
					</li>
					<li>
						<em>2017-02-21</em>
						<a href="#">连续18个季度盈利 唯品会2017年第一季度净营收近160...</a>
					</li>
				</ul>
			</div>
			<ul class="search-ul">
				<li v-for="(list,index) in obj.lists">
					<h1><a href="#" v-html="list.title"></a></h1>
					<div class="v-all-count">
						<h2>{{list.subTitle}}  {{list.time}}</h2>
						<p>{{list.pcontent}}</p>
					</div>
				</li>
			</ul>
			<div class="page">
				<pages  v-on:tipPage="pageChange" :pageIndex='page.pageIndex'  :totalPage="page.totalPage" :page="size"   :pageSize="size"></pages>
			</div>
		</div>
		<allHomeRight  type='all'></allHomeRight>
	</div>
</template>

<script>
	import allHomeRight from './allHomeRight.vue'
	import pages from './vPage.vue'
	export default{
		data(){
			return {
				size:5,
				page:{
					pageIndex:1,
					pageSize:5,
					totalPage:10
				},
				obj:{
					lists:[
						{
							title:'标题标题<span class="red">唯品会</span>标题标题标题标题标题标题标题标题',
							subTitle:'政策／制度',
							time:'2017-5-5',
							pcontent:'唯品会vip购物网以1-7折超低折扣对全球各大品牌进行限时特卖,商品囊括服装、化妆品、家居、奢侈品等上千品牌。100%正品、低价、货到付款、7天无理由退货。'
						},
						{
							title:'标题标题<span class="red">唯品会</span>标题标题标题标题标题标题标题标题',
							subTitle:'政策／制度',
							time:'2017-5-5',
							pcontent:'唯品会vip购物网以1-7折超低折扣对全球各大品牌进行限时特卖,商品囊括服装、化妆品、家居、奢侈品等上千品牌。100%正品、低价、货到付款、7天无理由退货。'
						},
						{
							title:'标题标题<span class="red">唯品会</span>标题标题标题标题标题标题标题标题',
							subTitle:'政策／制度',
							time:'2017-5-5',
							pcontent:'唯品会vip购物网以1-7折超低折扣对全球各大品牌进行限时特卖,商品囊括服装、化妆品、家居、奢侈品等上千品牌。100%正品、低价、货到付款、7天无理由退货。'
						}
					]
				}
			}
		},
		created(){
			
		},
		methods:{
			pageChange(index){  
				console.log(index);
			},
		},
		components:{
			allHomeRight,
			pages
		}
	}
</script> 