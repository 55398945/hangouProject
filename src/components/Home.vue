<template>
  <div class="home">
    <!--首页头部-->
    <div class="home-header">
    		<span><img src="../assets/home_logo.png"/></span>
    		<router-link to="/search" class="home-header-seek"><input type="text" /><i class="iconfont iconfont-router">&#xe60b;</i></router-link>
    		<router-link to="/mine"><i class="iconfont iconfont-router home-header-shop">&#xe64f;</i></router-link>
    </div>
    
    <!--首页banner图-->
    <div class="home-content">
    	<div class="home-content-banner">
    		<router-link to="/special">
    			<img src="http://www.hangowa.com/data/upload/mobile/special/s0/s0_05503492593015087.jpg">
    		</router-link>
    	</div>
    	
    <!--首页banner图里的分类 购物车 商城  签到-->
    	<div class="home-content-fenlei">
    		<router-link to="/clauses" class="home-content-fenlei-clauses">
    			<span><i class="iconfont iconfont-router home-header-shop">&#xe60a;</i></span>
    			<p>分类</p>
    		</router-link>
    		
    		<router-link to="/shopping" class="home-content-fenlei-shop">
    			<span><i class="iconfont iconfont-router home-header-shop">&#xe64f;</i></span>
    			<p>购物车</p>
    		</router-link>
    		
    		<router-link to="/mine" class="home-content-fenlei-store">
    			<span><i class="iconfont iconfont-router home-header-shop">&#xe720;</i></span>
    			<p>我的商城</p>
    		</router-link>
    		
    		<router-link to="/signin" class="home-content-fenlei-sign">
    			<span><i class="iconfont iconfont-router home-header-shop">&#xe603;</i></span>
    			<p>每日签到</p>
    		</router-link>    		
    	</div>
    	
    </div>
    <mydata :num='1' :change='true'></mydata>
    <mydata :num='2' :change='true'></mydata>
    <mydata :num='3' :change='true'></mydata>
    <mylast></mylast>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './childComponents/FooterComponent'
import Last from './childComponents/LastComponent'
import Data from './childComponents/DataComponent'
export default {
  name: 'home',
  components:{
  	'myfooter':Footer,
  	'mylast':Last,
  	'mydata':Data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*首页头部*/
.home-header{
	width: 100%;
	height: 3.5rem;
	background: #e7e7e9;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.home-header-seek{
	display: flex;
	align-items: center;
}
.home-header-seek input{
	width: 100%;
	height: 2rem;
	border-radius: 20px;
	border: 1px solid #ccc;
	background: #fff;
}
.home-header-seek i{
	margin-left: -1.5rem;
}
.home-header-shop{
	font-size: 1.5rem;
	color: #0a0a0a;
}

/*首页banner图*/
.home-content{
	display: flex;
	flex-direction: column;
}
.home-content-banner img{
	width:100%;
	display: block;
}
.home-content-fenlei{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background: #fff;
	padding: 0.5rem 0;
	margin-bottom: 0.5rem;
}
.home-content-fenlei span{
	display: block;
	border-radius: 50%;
	padding: 0.8rem;
	margin-bottom: 0.5rem;
}
.home-content-fenlei i{
	color: #fff;
	font-size: 1.5rem;
}
.home-content-fenlei p{
	color: #555;
	font-size: 0.6rem;
}
.home-content-fenlei-clauses span{
	background: #fb6e52;
}
.home-content-fenlei-shop span{
	background: #48cfae;
}
.home-content-fenlei-store span{
	background: #4fc0e8;
}
.home-content-fenlei-sign span{
	background: #ac92ed;
}



</style>