<template>
  <div class="register">
    register
    <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './childComponents/FooterComponent'
export default {
  name: 'register',
  components:{
  	'myfooter':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>