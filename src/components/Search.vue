<template>
  <div class="search">
				搜索
    
    <myfooter></myfooter>
  </div>
</template>


<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'search',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>