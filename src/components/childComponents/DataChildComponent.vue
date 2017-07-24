<template>
	  <li class="datachildcomponent" @click="toDetalis">
	   	<img :src="src" alt="" />
	   	<h5>{{name}}</h5>
	   	<p>￥<span>{{price}}</span></p>
	  </li>
</template>

<script>
export default {
  name: 'datachildcomponent',
  props:['src','name','price','id'],
  methods:{
  	toDetalis:function(){
  		var hash = '/details/'+this.id;
  		location.hash = hash;
  	}
  }
}
</script>


<style scoped>
.datachildcomponent{
	width: 45%;
	border-radius: 0.2rem;
	margin: 0.5rem 2% 0 2%;
	display: inline-block;
	overflow: hidden;
}
.datachildcomponent img{
	width: 100%;
}
.datachildcomponent h5{
	padding: 0.2rem;
	font-size: 0.65rem;
}
.datachildcomponent p{
	margin-top: 0.4rem;
	padding-top: 0.4rem;
	border-top: 1px solid #eee;
	text-align: left;
	color: #DB4453;
	font-size: 0.7rem;
	font-weight: bold;
}
</style>