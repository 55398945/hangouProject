<template>
  <div class="feedback">
    feedback
     <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'feedback',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>