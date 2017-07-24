<template>  
			<div class="special-c-img" @click="toChangePage">
    			<img :src="src" alt=""/> 	
    	</div>
</template>

<script>
export default {
  name: 'specialchildcomponent',
  props:['src','data'],
  methods:{
  	toChangePage:function(){
  		var path = '';
  		if(this.data){
  			path = '/details/'+this.data;
  		}else{
  			path = '/special'
  		}
  		location.hash=path;
  	}
  }
  
}
</script>


<style scoped>
.special-c-img {
	width: 100%;
}
.special-c-img img{
	width: 100%;
	display: block;
}
</style>