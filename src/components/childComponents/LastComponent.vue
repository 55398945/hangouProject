<template>
  <div class="lastcomponent">
    <div class="last-top">
    	<ul class="last-ul">
    		<li class="last-ul-li"><router-link to="/login">登录</router-link></li>
    		<li class="last-ul-li"><router-link to="/register">注册</router-link></li>
    		<li class="last-ul-li"><router-link to="/feedback">反馈</router-link></li>
    		<li class="last-ul-li"><span @click="turnTotop">返回顶部</span></li>
    	</ul>
    </div>
    <div class="last-center">
    	<a href="http://www.hangowa.com/shop/index.php?act=mb_app" class="last-c-link"><i class="iconfont ic-link">&#xe6ab;</i>客户端</a>
    	<router-link to="/home" class="last-c-link"><i class="iconfont ic-link">&#xe600;</i>触屏版</router-link>
    	<a href="http://www.hangowa.com/shop" class="last-c-link"><i class="iconfont ic-link">&#xe640;</i>电脑版</a>
    </div>
    <div class="last-bottom">
    	<p>Copyright © 2014-2016 汉购网<span>hangowa.com</span>版权所有</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lastcomponent',
  methods:{
  	turnTotop:function(){
  		document.documentElement.scrollTop = 0;
  		document.body.scrollTop = 0;
  		
  	}
  }
}
</script>


<style scoped>
.lastcomponent{
	background: #fff;
	margin-top: 1rem;
}
.last-top{
	padding: 0.6rem 0;
	border-bottom: 1px solid #eee;
}
.last-ul{
	display: flex;
}
.last-ul-li{
	flex: 1;
	text-align: center;
	font-size: 0.6rem;
	border-right: 1px solid #eee;
}
.last-ul-li:nth-last-child(1){
	border: 0 none;
}
.last-ul-li a{
	color: #555;
}
.iconfont-router{
	color: #999;
}
.last-center{
	padding: 0.3rem 2rem;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #eee;
}
.last-c-link{
	color: #999;
	font-size: 0.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.ic-link{
	display: inline-block;
	height: 1.2rem;
	width: 1.2rem;
	text-align: center;
	line-height: 1.2rem;
	border: 1px solid #999;
	border-radius: 50%;
	font-size: 0.6rem;
}
.last-bottom{
	font-size: 0.6rem;
	height: 1.6rem;
	line-height: 1.6rem;
	margin-bottom: 2.5rem;
}
.last-bottom span{
	color: #000;
	font-weight: bold;
}
</style>