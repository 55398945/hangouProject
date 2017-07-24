<template>
  <div class="mine">
    <!--头部-->
    <div class="mine-header">
    	<!--头部设置-->
    	<div class="mine-header-set">
    		<router-link to="/login"><i class="iconfont iconfont-router">&#xe6a1;</i></router-link>
    		<span><i class="iconfont iconfont-router">&#xe60f;</i></span>
    	</div>    	
    	<!--头部点击登陆-->
    	<div class="mine-header-login animated bounceInDown">
    		<router-link to="/login"><i class="iconfont iconfont-router">&#xe720;</i></router-link>
    		<router-link to="/login"><span>点击登陆</span></router-link>
    	</div>    	
    	<!--头部收藏足迹-->
    	<div class="mine-header-collect">
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe79b;</i></router-link>
    			<p>商品收藏</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe602;</i></router-link>
    			<p>店铺收藏</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe604;</i></router-link>
    			<p>我的足迹</p>
    		</div>
    	</div>
    </div>
    
    <!--订单-->
    <div class="mine-indent">
    	<div class="mine-indent-one">
    		<router-link to="/" class="mine-indent-one-left"><i class="iconfont iconfont-router">&#xe66a;</i><span>我的订单</span></router-link>
    		<router-link to="/" class="mine-indent-one-right"><span>查看全部订单</span><i class="iconfont iconfont-router">&#xe605;</i></router-link>
    	</div> 
    	
    	<div class="mine-indent-two">
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe649;</i></router-link>
    			<p>待付款</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe636;</i></router-link>
    			<p>待收货</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe63c;</i></router-link>
    			<p>待自提</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe603;</i></router-link>
    			<p>待评价</p>
    		</div>
    		<div>
    			<router-link to="/"><i class="iconfont iconfont-router">&#xe6db;</i></router-link>
    			<p>退款/退货</p>
    		</div>
    	</div>
    </div>
    
    <!--财产-->
    <div class="mine-property">
    	<div class="mine-property-one">
				<router-link to="/" class="mine-property-left"><i class="iconfont iconfont-router">&#xe608;</i><span>我的财产</span></router-link>
				<router-link to="/" class="mine-property-right"><span>查看全部财产</span><i class="iconfont iconfont-router">&#xe605;</i></router-link>
   		</div>
    </div>
    
    <!--分销管理/地址/设置-->
    <div class="mine-manage">
    	<!--分销-->
    	<div class="mine-manage-one">
    		<router-link to="/" class="mine-manage-one-left"><span class="mine-manage-one-left-xiao">销</span><span>我的分销管理</span></router-link>
    		<router-link to="/" class="mine-manage-one-right"><i class="iconfont iconfont-router">&#xe605;</i></router-link>
    	</div>
    	<!--地址-->
    	<div class="mine-manage-two">
    		<router-link to="/" class="mine-manage-two-left"><i class="iconfont iconfont-router">&#xe61c;</i><span>收货地址管理</span></router-link>
    		<router-link to="/" class="mine-manage-two-right"><i class="iconfont iconfont-router">&#xe605;</i></router-link>
    	</div>
    	<!--设置-->
    	<div class="mine-manage-three">
    		<router-link to="/" class="mine-manage-three-left"><i class="iconfont iconfont-router">&#xe6a1;</i><span>用户设置</span></router-link>
    		<router-link to="/" class="mine-manage-three-right"><i class="iconfont iconfont-router">&#xe605;</i></router-link>
    	</div>    	
    </div>
    
    <mylast></mylast>
    <myfooter></myfooter>
  </div>
</template>


<script>
import Footer from './childComponents/FooterComponent'
import Last from './childComponents/LastComponent'
export default {
  name: 'mine',
  components:{
  	'myfooter':Footer,
  	'mylast':Last
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*头部*/
.mine-header{
	width: 100%;
	height: 11rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0.8rem;
	background-image: url(../assets/mine-header2.png);
	background-repeat: no-repeat;
	background-size: cover;
	animation: changeBg 20s infinite;
	background-color: #ED5564;	
}
@keyframes changeBg{
	0% {
    background-color: #ED5564;
	}
	10% {
	    background-color: #FB6E52;
	}
	20% {
	    background-color: #FFCE55;
	}
	30% {
	    background-color: #A0D468;
	}
	40% {
	    background-color: #48CFAE;
	}
	50% {
	    background-color: #4FC0E8;
	}	
	60% {
	    background-color: #5D9CEC;
	}
	70% {
	    background-color: #AC92ED;
	}
	80% {
	    background-color: #EC87BF;
	}
	90% {
	    background-color: #ED5564;
	}
}
/*头部设置*/
.mine-header-set{
	display: flex;
	justify-content: space-between;
	width: 95%;
	padding: 0.5rem 0;
}
.mine-header-set i{
	font-size: 1rem;
	color: #fff;
}
/*头部点击登陆*/
.mine-header-login{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
}
.mine-header-login i{
	display: inline-block;
	width: 4rem;
	height: 4rem;
	line-height: 4rem;
	font-size: 3rem;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	border-radius: 50%;
	margin-bottom: 0.3rem;
}
.mine-header-login span{
	color: #fff;
	font-size: 1rem;
}
/*头部收藏足迹*/
.mine-header-collect{
	width: 100%;
	height: 4rem;
	background-color: rgba(0,0,0,0.1);
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 0.2rem;
}
.mine-header-collect i{
	font-size: 1rem;
	color: #fff;
}
.mine-header-collect p{
	font-size: 0.6rem;
	color: #fff;
}

/*订单*/
.mine-indent{
	display: flex;
	flex-direction: column;
	margin-bottom: 0.4rem;
	background: #fff;
}
/*订单-我的订单*/
.mine-indent-one{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;
	border-bottom: 1px solid #eee;	
	
}
.mine-indent-one-left{
	font-size: 0.7rem;
	color: #111;
	padding-left: 0.5rem;
}
.mine-indent-one-left i{
	font-size: 0.9rem;
	color: #3baeda;
}
.mine-indent-one-right{
	font-size: 0.6rem;
	color: #999;
	padding-right: 0.5rem;
}
.mine-indent-one-right i{
	font-size: 0.6rem;
	color: #e4e4e4;
}
/*订单-待付款*/
.mine-indent-two{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-bottom: 0.5rem;
	margin-top: 0.4rem;
}
.mine-indent-two i{
	font-size: 1rem;
	color: #858585;
}
.mine-indent-two p{
	font-size: 0.6rem;
	color: #858585;
	padding: 0.2rem 0;
}

/*财产*/
.mine-property{	
	margin-bottom: 0.4rem;
	padding-bottom: 0.5rem;
	background: #fff;
}
.mine-property-one{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-bottom: 1px solid #eee;
}
.mine-property-left i{
	color: #48cfae;
	padding-left: 0.5rem;
}
.mine-property-left span{
	font-size: 0.6rem;
	color: #111;
	padding-left: 0.5rem;
}
.mine-property-right i{
	font-size: 0.6rem;
	color: #e4e4e4;
}
.mine-property-right span{
	font-size: 0.6rem;
	color: #999;
}

/*分销管理/地址/设置*/
.mine-manage{
	display: flex;
	flex-direction: column;
	background: #fff;
}
/*分销*/
.mine-manage-one{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-bottom: 1px solid #eee;
}
.mine-manage-one-left{
	font-size: 0.7rem;
	color: #111;
	padding-left: 0.5rem;
	display: flex;
	align-items: center;
}
.mine-manage-one-left-xiao{
	display: inline-block;
	width: 1rem;
	height: 1rem;
	line-height: 1rem;
	color: #fff;
	font-size: 0.7rem;
	background: #87ccec;
	border-radius: 0.1rem;
	margin-right: 0.2rem;
}
.mine-manage-one-right i{
	font-size: 0.7rem;
	color: #e4e4e4;
}
/*地址*/
.mine-manage-two{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-bottom: 1px solid #eee;	
	margin-bottom: 0.5rem;
}
.mine-manage-two-left{
	font-size: 0.7rem;
	color: #111;
	padding-left: 0.5rem;
}
.mine-manage-two-left i{
	font-size: 0.7rem;
	color: #ac92ed;
	margin-right: 0.2rem;
}
.mine-manage-two-right i{
	font-size: 0.7rem;
	color: #e4e4e4;
}
/*设置*/
.mine-manage-three{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem 0.5rem 0.5rem;
}
.mine-manage-three-left{
	font-size: 0.7rem;
	color: #111;
	padding-left: 0.5rem;
}
.mine-manage-three-left i{
	font-size: 0.7rem;
	color: #ec87bf;
	margin-right: 0.2rem;
}
.mine-manage-three-right i{
	font-size: 0.7rem;
	color: #e4e4e4;
}

</style>