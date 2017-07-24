<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
		
  },
  mounted(){
//	this.$store.dispatch('increment')
//	console.log(this.$store.state.a)
//	console.log(this.$store.state.b)
//	console.log(this.$store.state.count)
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
@font-face {
  font-family: 'iconfont';  /* project id 361404 */
  src: url('//at.alicdn.com/t/font_q7ecvjd3ak3p7gb9.eot');
  src: url('//at.alicdn.com/t/font_q7ecvjd3ak3p7gb9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_q7ecvjd3ak3p7gb9.woff') format('woff'),
  url('//at.alicdn.com/t/font_q7ecvjd3ak3p7gb9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_q7ecvjd3ak3p7gb9.svg#iconfont') format('svg');
}
.iconfont{
	font-family:"iconfont";
	font-size:1.1rem;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale; 
}
html{
	font-size: 20px;
	height: 100%;
}
body{
	font-size: 16px;
	height: 100%;
	background: #f0f0f0;
}
html,body,ul,li,ol,dl,dd,dt,th,td,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,textarea,select{ 
	margin: 0;
	padding: 0; 
	box-sizing: border-box;
}
ul,ol,li{ 
	list-style:none;
}
a{ 
	text-decoration:none;
}

</style>
