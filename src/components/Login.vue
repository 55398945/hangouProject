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
    	<input type="text" placeholder="请输入用户名/已验证手机"/>
    	<input type="text" placeholder="请输入登录密码" />
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
	font-size: 1.2rem;
	padding-left: 1rem;
}
.login-header-login{
	font-size: 1rem;
	color: #111;
}
.login-header-register{
	color: #ed5564;
	font-size: 0.8rem;
	padding-right: 1rem;
}
</style>