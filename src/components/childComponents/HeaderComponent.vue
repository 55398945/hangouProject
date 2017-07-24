<template>
  <div class="header">
    		<router-link :to='to' class="header-back"><i class="iconfont iconfont-router">&#xe601;</i></router-link>
    		<span>{{title}}</span>
    		<router-link :to='to'><i class="iconfont iconfont-router header-menu">&#xe60f;</i></router-link>
    </div>
</template>

<script>
export default {
  name: 'header',
  props:['title','to']
}
</script>


<style scoped>
.header{
	width: 100%;
	height: 3.5rem;
	background: #e7e7e9;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.header-back{
	display: flex;
	align-items: center;
}
.header-back i{
	margin-left: -1.5rem;
}
.header-menu{
	font-size: 1.5rem;
	color: #0a0a0a;
}
</style>