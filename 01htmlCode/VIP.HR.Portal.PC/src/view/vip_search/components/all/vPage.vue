<template>
	<div>
		<a v-if="num>1" @click="prev">上一页</a>
		<a v-for="i in size" :class="{'on':num==i}" @click="currChange(i)">{{i}}</a>
		<a v-if="num<totalPage" @click="next">下一页</a>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				num:1,
				size:[],
			}
		},
		created(){
		 	//	debugger;
		 	this.num=this.pageIndex;
			if(this.totalPage>this.page){  //如果总页数
				this.page_icon(this.num,this.page)
			}else{
				this.page_icon(this.num,this.totalPage)
			}
		},
		methods:{
			pageUp(pageNum,pageCount){  //上一页
				switch(pageNum){
					case 1:
					break;
					case 2:
						this.page_icon(1,this.page);
					break;
					case pageCount-1:
						this.page_icon(pageCount-4,pageCount);
					break;
					case pageCount:
						this.page_icon(pageCount-4,pageCount);
					break;
					default:
						this.page_icon(pageNum-2,pageNum+2);
					break;
				}
			},
			pageGroup(pageNum,pageCount){
				switch(pageNum){
					case 1:
						this.page_icon(1,this.page);
					break;
					case 2:
						this.page_icon(1,this.page);
					break;
					case pageCount-1:
						this.page_icon(pageCount-4,pageCount);
					break;
					case pageCount:
						this.page_icon(pageCount-4,pageCount);
					break;
					default:
						this.page_icon(pageNum-2,pageNum+2);
					break;
				}
			},
			pageDown(pageNum,pageCount){  //下一页
				switch(pageNum){
					case 1:
						this.page_icon(1,this.page);
					break;
					case 2:
						this.page_icon(1,this.page);
					break;
					case pageCount-1:
						this.page_icon(pageCount-4,pageCount);
					break;
					case pageCount:
					break;
					default:
						this.page_icon(pageNum-2,pageNum+2);
					break;
				}
			},
			page_icon(page,count){
				this.size=[];
				for(let i=page;i<=count;i++){
					this.size.push(i);
				}
			
			},
			prev(){
				this.num-=1;
				this.pageUp(this.num,this.totalPage);
				this.$emit('tipPage',this.num)
			},
			currChange(index){
				this.num=index;
				if(this.totalPage>this.page){
					this.pageGroup(index,this.totalPage);
				}
				this.$emit('tipPage',this.num)
			},
			next(){
				this.num=this.num+1;
				if(this.totalPage>this.page){  
					this.pageDown(this.num,this.totalPage);
				}
				this.$emit('tipPage',this.num)
			},
		},
		props:['pageIndex','page','pageSize','totalPage']
	}
</script>