<template>
  <div id="app">
    <header></header>
    <div class="content">
			<div class="classify">
				<div class="auto-classify">
					<div class="classify-title">
						<span class="orange"></span>
					</div>
					<ul class="classify-coutent classify-hover">
						<li>
							<a href="#">
								<span class="check"></span>
								<div class="classify-info">
									<h3>考勤查询11</h3>
									<p>考勤假期拥有记录</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="salary"></span>
								<div class="classify-info">
									<h3>薪资查询</h3>
									<p>考勤假期拥有记录</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="personal"></span>
								<div class="classify-info">
									<h3>个人信息</h3>
									<p>考勤假期拥有记录</p>
								</div>
							</a>
						</li>				
					</ul>
				</div>
				<div class="auto-classify">
					<div class="classify-title">
						<span class="green">一键预约</span>
					</div>
					<ul class="classify-coutent">
						<li>
							<a href="#">
								<span class="massage"></span>
								<div class="classify-info">
									<h3>理疗预约</h3>
									<p>清除疲劳来约理疗</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="haircut"></span>
								<div class="classify-info">
									<h3>理发预约</h3>
									<p>变帅变美撩哥撩妹</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="dinner"></span>
								<div class="classify-info">
									<h3>健康餐预约</h3>
									<p>营业均衡健康美味</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="taxi"></span>
								<div class="classify-info">
									<h3>打车预约</h3>
									<p>深夜下班公司直付车费</p>
								</div>
							</a>
						</li>				
					</ul>
				</div>
				<div class="auto-classify">
					<div class="classify-title">
						<span class="blue">自助申请</span>
					</div>
					<ul class="classify-coutent">
						<li>
							<a href="#">
								<span class="consumption"></span>
								<div class="classify-info">
									<h3>消费贷申请</h3>
									<p>公司贷你解忧</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="housing"></span>
								<div class="classify-info">
									<h3>安居贷款申请</h3>
									<p>安居贷你排难</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="cash"></span>
								<div class="classify-info">
									<h3>礼金申请</h3>
									<p>结婚生育抚恤福利</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="certificate"></span>
								<div class="classify-info">
									<h3>证明打印</h3>
									<p>公司证明申请便利</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="timecard"></span>
								<div class="classify-info">
									<h3>工卡补办申请</h3>
									<p>遗失工卡迅速重配</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="record"></span>
								<div class="classify-info">
									<h3>档案借调申请</h3>
									<p>档案借阅按需申请</p>
								</div>
							</a>
						</li>				
					</ul>
				</div>
				
			</div>
			
		</div>
  </div>
</template>

<script>
import headers from '@common/components/header.vue'

export default {
  name: 'app',
  components: {
    headers
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.autoWrapp{
	width:1200px;
	margin:0 auto;
}
.auto-classify{
	width:1050px;
	margin:29px auto 0;
}
// .check{
// 	background:url('../images/icon_check.png') no-repeat;
// }
// .salary{
// 	background:url('../images/icon_salary.png') no-repeat;
// }
// .personal{
// 	background:url('../images/icon_personal.png') no-repeat;
// }
// .massage{
// 	background:url('../images/icon_massage.png') no-repeat;
// }
// .haircut{
// 	background:url('../images/icon_haircut.png') no-repeat;
// }
// .dinner{
// 	background:url('../images/icon_dinner.png') no-repeat;
// }
// .taxi{
// 	background:url('../images/icon_taxi.png') no-repeat;
// }
// .consumption{
// 	background:url('../images/icon_consumption_loan.png') no-repeat;
// }
// .housing{
// 	background:url('../images/icon_housing_loan.png') no-repeat;
// }
// .cash{
// 	background:url('../images/icon_cash.png') no-repeat;
// }
// .certificate{
// 	background:url('../images/icon_certificate.png') no-repeat;
// }
// .timecard{
// 	background:url('../images/icon_timecard.png') no-repeat;
// }
// .record{
// 	background:url('../images/icon_record.png') no-repeat;	
// }






// .orange{
// 	background:url('../images/label_orange.png') no-repeat;
// }
// .blue{
// 	background:url('../images/label_blue.png') no-repeat;	
// }
// .green{
// 	background:url('../images/label_green.png') no-repeat;	
// }
.classify{
	padding-top:1px;
	.classify-title{
		position:relative;
		&:after{
			position:absolute;
			content:'';
			left:111px;
			top:13px;
			right:0;
			height:0;
			border-top:1px dashed #aaa;
		}
		span{
			display:inline-block;
			width:101px;
			height:30px;
			line-height:30px;
			text-align:center;
			color:#fff;
			font-size:16px;
		}
	}
	.classify-hover{
		a{
			&:hover{
				color:#f6b751;
				border:1px solid #f5b741;
				.classify-info{
					h3{
						color:#f4a525;
					}
				}
			}
		}
	}
	.classify-coutent{
		padding-left:65px;
		overflow:hidden;
		margin-top:29px;
		li{
			float:left;
			margin-right:92px;
			a{
				display:block;
				width:234px;
				height:80px;
				border:1px solid #fff;
				border-radius:4px;
				padding:6px 0;
				color:#666;
				span{
					display:block;
					float:left;
					width:80px;
					height:80px;
				}
				.classify-info{
					float:left;
					padding:16px 0;
					margin-left:13px;
					h3{
						font-size:22px;
						color:#333;
					}
					p{
						margin-top:12px;
					}
				}
				
			}
		}
	}
}
</style>
