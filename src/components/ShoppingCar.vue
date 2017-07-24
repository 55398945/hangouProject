<template>
  <div class="shopping">
				购物车
    
    
    
    <myfooter></myfooter>
  </div>
</template>


<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'shopping',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>