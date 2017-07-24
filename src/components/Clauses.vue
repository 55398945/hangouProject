<template>
  <div class="clauses">
    <div class="clauses-header">
    	<router-link to="/home" class="c-h-i"><i class="iconfont">&#xe601;</i></router-link>
    	<router-link to="/search">
    		<input type="text"  class="c-h-ipt" :value="'请输入关键字'"/>
    		<i class="iconfont c-h-i-p">&#xe60b;</i>
    	</router-link>
    	
    	<i class="iconfont c-h-i">&#xe60f;</i>
    </div>
    <section class="clauses-section">
    	<div class="clauses-sidebar">
    		<ul class="clauses-ul">
    			<li class="clauses-ul-li clauses-ul-li-img" v-for="li in list" >	
    				<span><img :src="li.wap_logo"/></span>
    				<p>{{li.cat_name}}</p>
    			</li>
    		</ul>
	    </div>
	    <div class="clauses-right">
	    	<div class="clauses-change" v-for="li in list">
	    		<ul class="clauses-r-ul">
		    		<li class="clauses-r-li" v-for="(lis,index) in li.child">
		    			<h5 @click='goToGoods(lis.cat_name)'><span><i :class="'clauses-circle'+index"></i>{{lis.cat_name}}</span><i class="iconfont clauses-icon">&#xe605;</i></h5>
		    			<ul class="c-l-ul">
		    				<li class="c-l-ul-li" v-for="liss in lis.child"  @click='goToGoods(liss.cat_name)'>{{liss.cat_name}}</li>
		    			</ul>
		    		</li>
		    	</ul>
	    	</div>
	    	
	    	
	    </div>
    </section>
    
  </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  name: 'clauses',
  data(){
  	return{
  		list:[],
  		webLogo:'http://www.hangowa.com/data/upload/shop/goods_category/05266594195585198.png'
  	}
  },
  methods:{
  	goToGoods:function(goods){
  		location.hash = '/goodslist/'+goods;
  	}
  },
  mounted(){
  	var that = this;
  	var urls = 'http://www.hangowa.com/mo_bile/index.php?act=goods_class'
  	
  	jsonp(urls,null, function (err, data) {
			  if (err) {
			    console.error(err.message);
			  } else {
			    that.list = data.datas.category_list;
			  }
		});
  },
  updated(){
  	
  		var that = this;
  		$('.clauses-ul-li').eq(0).addClass('clauses-ul-li-active').removeClass('clauses-ul-li-img')
  		$('.clauses-change').eq(0).css({
  			display: 'block'
  		})
			$('.clauses-ul-li').on('click',function(){
				
				$(this).addClass('clauses-ul-li-active').siblings().removeClass('clauses-ul-li-active')
				$('.clauses-change').eq($(this).index()).css({
					display:'block'
				}).siblings().css({
					display:'none'
				})
				$('.clauses-ul li').eq($(this).index()).removeClass('clauses-ul-li-img').siblings().addClass('clauses-ul-li-img')
				
			})
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clauses-ul-li-img{
	filter: grayscale(100%);
}
.clauses-icon{
	font-size: 0.7rem;
	margin-right: 0.4rem;
	color: #ccc;
}
.c-l-ul{
	overflow: hidden;
}
.clauses-change{
	display: none;
}
.c-l-ul-li{
	float:left;
	width: 3.9rem;
	height: 1.48rem;
	padding: 0.2rem;
	font-size: 0.6rem;
	margin: 0.4rem 0;
	text-align: left;
	padding-left: 0.3rem;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap
}
.clauses-r-li h5{
	height: 1.5rem;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #FCFCFC;
	border-bottom: 1px solid #f5f5f5;
	width: 100%;
	overflow: hidden;
}
.clauses-r-li h5 span{
	font-size: 0.6rem;
}
.clauses-circle0{
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: #ED5564;
	border-radius: 50%;
	margin: 0 0.4rem;
}
.clauses-circle1{
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: #AC92ED;
	border-radius: 50%;
	margin: 0 0.4rem;
}
.clauses-circle2{
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: #4FC0E8;
	border-radius: 50%;
	margin: 0 0.4rem;
}
.clauses-circle3{
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: #A0D468;
	border-radius: 50%;
	margin: 0 0.4rem;
}
.clauses-ul{
	padding: 0 0.5rem;
}
.clauses-ul-li{
	width: 2.8rem;
	height: 2.8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 0.15rem solid #f5f5f5;
	color: #999;
}
.clauses-ul-li-active{
	border-bottom: 0.15rem solid #ED5564;
	color: #ED5564;
}
.clauses-ul-li img{
	width: 40%;
}
.clauses-ul-li p{
	font-size: 0.6rem;
	padding-top: 0.2rem;
}



.clauses-header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	height: 2rem;
	background: #f8f8f8;
}
.c-h-ipt{
	width: 8rem;
	height: 35px;
	border-radius: 20px;
	border: 1px solid #ccc;
	margin-right: 40px;
	text-align: center;
	font-size: 0.8rem;
	color : #ccc;
}
.c-h-i-p{
	position: absolute;
	left: 69%;
	top: 20%;
}
.c-h-i{
	margin: 0 10px;
	font-size: 1.5rem;
}
.clauses-section{
	display: flex;
}
.clauses-sidebar{
	width: 25%;
	background:#f5f5f5;
}
.clauses-right{
	height: 25rem;
	width: 80%;
	background: #fff;
}
</style>