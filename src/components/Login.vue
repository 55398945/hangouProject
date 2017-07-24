<template>
  <div class="login">
    
    <!--登录页头部-->
    <div class="login-header">
    		<router-link to="/mine" class="login-header-mine"><i class="iconfont iconfont-router">&#xe607;</i></router-link>
    		<span class="login-header-login">登 录</span>
    		<router-link to="/register" class="login-header-register">注册</router-link>
    </div>
    
    <!--账户密码-->
    <div class="login-num" >
    	<p>账 户 <input type="text" placeholder="请输入用户名/已验证手机"/><i class="iconfont iconfont-router">&#xe654;</i></p>
    	<p>密 码 <input type="text" placeholder="请输入登录密码" /><i class="iconfont iconfont-router">&#xe654;</i></p>
    </div>
    
    
    <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'login',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*登录头部*/
.login-header{
	height: 3rem;
	background: #f8f8f8;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.login-header i{
	color: #737373;
	font-size: 1rem;
	padding-left: 1rem;
}
.login-header-login{
	font-size: 0.8rem;
	color: #111;
}
.login-header-register{
	color: #ed5564;
	font-size: 0.7rem;
	padding-right: 1rem;
}

/*账户密码*/
.login-num{
	font-size: 0.6rem;
	color: #444;
	background: #fff;
}
.login-num p{
	height: 1.95rem;
	border-bottom: 0.05rem solid #eee;
	margin-left: 1rem;
  line-height: 1.95rem;
}
.login-num p input{
	border: none;
	width: 70%;
	margin-left: 1rem;
}
.login-num p i{
	font-size: 0.2rem;
	color: #969971;
}
</style>