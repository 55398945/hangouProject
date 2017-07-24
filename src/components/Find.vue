<template>
  <div class="find">
    
    <myheader :title="'发 现'" :to="'/home'"></myheader>
    
    <!--发现页轮播-->
    <div class="swiper-container">        
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="text" data-swiper-parallax="-300">
                    <p class="find-pic"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05345109604997733.jpg"/></p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="text" data-swiper-parallax="-300">
                    <p class="find-pic"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg"/></p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="text" data-swiper-parallax="-300">
                    <p class="find-pic"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05330562712030759.jpg"/></p>
                </div>
            </div>
        </div>
    </div>

		<!--发现页精选-->
		<div class="find-choose">
			<div class="find-choose-word">专题精选</div>
			<div class="find-choose-spic">
				<router-link to="/mine"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg"/></router-link>
				<router-link to="/mine"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05336599045227408.jpg"/></router-link>
				<router-link to="/mine"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314837549337028.jpg"/></router-link>
			</div>
			<div class="find-choose-bpic">
				<router-link to="/mine"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393377278294.jpg"/></router-link>
				<router-link to="/mine"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393790488027.jpg"/></router-link>
			</div>
		</div>
    
    <mydata :num='3' :change='false'></mydata>
    <mydata :num='4' :change='false'></mydata>
    <mylast></mylast>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Footer from './childComponents/FooterComponent'
import Last from './childComponents/LastComponent'
import Data from './childComponents/DataComponent'
import Header from './childComponents/HeaderComponent'
export default {
  name: 'find',
  components:{
  	'myfooter':Footer,
  	'mylast':Last,
  	'mydata':Data,
  	'myheader':Header
  },
  mounted(){
  	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 600,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



/*轮播*/
.find-pic img{
	width: 100%;
	height: 85%;
	margin-bottom: 0.5rem;
}

/*发现页精选*/
.find-choose{
	width: 100%;
	height: auto;
	background: #fff;
	margin-bottom: 0.5rem;
	display: flex;
	flex-direction: column;
}
.find-choose img{
	width: 100%;
	display: block;
}
.find-choose-word{
	  border-left: solid 0.15rem #ED5564;
    height: 0.8rem;
    margin: 0.5rem 0 0.5rem 0.3rem;
    padding-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
    text-align: left;
}
.find-choose-spic,.find-choose-bpic{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

</style>