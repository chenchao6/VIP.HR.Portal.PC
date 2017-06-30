<template>
	<dl :class="{'on':type}">
		<dt><span v-if="data.list.length>3"  @click="show()">{{text}}<i></i></span>{{data.name}}</dt>
		<dd v-for="(list,index) in data.list"><a>{{list}}</a></dd>
	</dl>
</template>

<script>
	export default{
		data(){
			return {
				type:false,
				text:'展开'
			}
		},
		methods:{
			show(){
				if(this.text=='展开'){
					this.text='收回'
				}else{
					this.text='展开'
				}
				this.type=!this.type;
			}
		},
		props:['data']
	}
</script>