<template>
  <div class="special">
    <myheader :title="title" :to="'/home'"></myheader>
		<template v-for="imgsrc in list">
			<myspecial :src="imgsrc.home1.image" :data="imgsrc.home1.data"></myspecial>
		</template>
    
    <mylast></mylast>
    <myfooter></myfooter>
  </div>
</template>


<script>
import Footer from './childComponents/FooterComponent'
import Last from './childComponents/LastComponent'
import SpecialChild from './childComponents/SpecialChildComponent'
import Header from './childComponents/HeaderComponent'
import jsonp from 'jsonp'
export default {
  name: 'special',
  data(){
  	return {
  		list:[],
  		title:''
  	}
  },
  components:{
  	'myfooter':Footer,
  	'mylast':Last,
  	'myspecial':SpecialChild,
  	'myheader':Header
  },
	mounted(){
  	var that = this;
  	var urls = 'http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=28'
  	
  	jsonp(urls,null, function (err, data) {
			  if (err) {
			    console.error(err.message);
			  } else {
			    that.list = data.datas.list;
			    that.title = data.datas.special_desc;
			  }
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>