<template>
  <div class="goods">
				商品列表
    
    
    
    <myfooter></myfooter>
  </div>
</template>


<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'goods',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>