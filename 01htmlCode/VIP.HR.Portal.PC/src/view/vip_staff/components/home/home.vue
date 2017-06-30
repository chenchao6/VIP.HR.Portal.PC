<template>
	<div class="home">
		<headers></headers>
		<div class="content">
			<div class="classify">
				<div class="auto-classify">
					<div class="classify-title">
						<span class="orange">{{lange.onekeyquery}}</span>
					</div>
					<ul class="classify-coutent classify-hover">
						<li>
							<a href="#">
								<span class="check"></span>
								<div class="classify-info">
									<h3>考勤查询</h3>
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
	import headers from '@common/header/components/header.vue'
	import common from '@common/common.js'
	import lange from './home_CN.json'
	export default{
		data(){
			return {
				lange:{}	
			}
		},
		created(){
			this.lange=common.init(lange);
		},
		components:{
			headers,
		}
	}
</script>