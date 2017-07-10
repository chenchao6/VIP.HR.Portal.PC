<template>
	<header class="header-main">
		<div class="header-center">
            <h1 class="hr-portal-logo">HR Portal - 唯品会人力资源服务平台</h1> 
            <nav>
				<a class="nav-item" :class="{ active: type === 'staff' }" href="/staff.html">员工</a>
				<a class="nav-item" :class="{ active: type === 'admin' }" href="/admin.html">管理员</a>
				<a class="nav-item" :class="{ active: type === 'hrbp' }" href="/hrbp.html">HRBP</a>
				<search-bar></search-bar>
			</nav>
			<ul class="header-ul">
				<li>
					<a :class="{active:defaultClass=='staff'}" href="/vip_staff.html#/home?type=staff">{{lange.staff}}</a>
				</li>
				<li>
					<a :class="{active:defaultClass=='admin'}" href="/vip_admin.html#/home?type=admin">{{lange.controller}}</a>
				</li>
				<li>
					<a  :class="{active:defaultClass=='hrbp'}" href="#">{{lange.HRBP}}</a>
				</li>
			</ul>
			<ul class="header-message">
				<li>
					<a href="#" class="messinfo">
						<img>
						<span>消息中心</span>
						<i>3</i>
					</a>
				</li>
				<li>
					<a><span @click="changes('zh-CN')">中文</span></a><a><span @click="changes('en-US')">英文</span></a>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	import searchBar from './searchBar'
	import badge from './badge'
	export default {
		name: 'header',
		data() {
			return {
				defaultClass:this.$route.query.type,
				search:'',
				lange:{}
			}
		},
		components: {
			searchBar
		},
		created() {
			//this.funcName();
			console.log(this);
			this.lange=common.init(lange);
			//console.log(this.$route.query.type);
		},
		methods: {
			changes(lang){
				localStorage.setItem('hrlang',lang); ///语言切换 存储本地
				location.reload(false);  //刷新页面
			},
		},
		filters: {
			strSplit(v){
				let s=v.replace(/_/g,' ');
				return s;
				console.log(v);
			}
		}
	}	
</script>
<style lang="scss">
	// @import '../../scss/public';
	.header{
		height:66px;
		background:#f3f3f3;
		.header-auto{
			// @include autoWidth();
			overflow:hidden;
		}
	}
	.header-logo{
		float:left;
		width:198px;
		height:66px;
		// background:url("../images/logo.png") no-repeat 0 50%;
	}
	.header-ul{
		overflow:hidden;
		margin-left:90px;
		float:left;
		li{
			float:left;
			// @include height(66px);
			width:100px;
			float:left;
			position:relative;
			text-align:center;
			a{
				display:block;
				position:relative;
				font-size:18px;
				&.active{
					color:#e00a75;
					&:after{
						content:'';
						position:absolute;
						bottom:0;
						width:100%;
						height:10px;
						left:0;
						// background:url("../images/v_h_active.png") no-repeat 0 0;
					}
				}
			}
		}
	}
	.header-search{
		width:356px;
		margin-top:14px;
		float:left;
		border:1px solid #e0e0e0;
		height:38px;
		position:relative;
		padding-right:47px;
		border-radius:5px;
		input{
			width:100%;
			height:38px;
			padding:10px;
			box-sizing:border-box;
			border-radius:5px 0 0 5px;
		}
		.button-submit{
			position:absolute;
			right:0;
			top:-1px;
			height:40px;
			background:#7f7f7f;
			width:47px;
			border-radius:0 5px 5px 0;
		}
	}
	.header-message{
		float:right;
		padding:10px 0;
		li{
			float:left;
			a{
				display:block;
				position:relative;
				height:47px;
				img{
					width:43px;
					height:43px;
					border-radius:50%;
					padding:2px;
					background:#cbcbcb;
					float:left;
				}
				span{
					display:inline-block;
					float:left;
					height:47px;
					line-height:47px;
					margin-left:10px;
				}
				i{
					position:absolute;
					width:22px;
					height:22px;
					line-height:22px;
					border-radius:50%;
					background:#d5007f;
					color:#fff;
					top:0;
					right:0;
					text-align:center;
				}
				&.messinfo{
					padding-right:22px;
				}
			}
		}
	}
</style>