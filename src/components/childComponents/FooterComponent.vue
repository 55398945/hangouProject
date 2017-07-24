<template>
  <div class="footer">
    <router-link to="/home" class="router-footer"><i class="iconfont iconfont-router">&#xe607;</i>首页</router-link>
    <router-link to="/find" class="router-footer"><i class="iconfont iconfont-router">&#xe64f;</i>发现</router-link>
    <router-link to="/clauses" class="router-footer"><i class="iconfont iconfont-router">&#xe60a;</i>类目</router-link>
    <router-link to="/mine" class="router-footer"><i class="iconfont iconfont-router">&#xe720;</i>我的商城</router-link>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>


<style scoped>
.footer{
	width: 100%;
	height: 2.5rem;
	background: #6d6d6d;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
}
.router-footer{
	display: flex;
	flex-direction: column;
	justify-content:space-around;
	align-items: center;
	width: 4rem;
	height: 80%;
	font-size: 0.5rem;
	color: #fff;
}
.iconfont-router{
	color: #999;
}
</style>