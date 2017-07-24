<template>
  <div class="datacomponent">
   <h3>{{title}}</h3>
   <span class="data-p">小编向您推荐以下商品</span>
   <ul>
   		<template v-for="li in forlist">
   			<mydatachild :src="li.goods_image" :name="li.goods_name" :price="li.goods_promotion_price" :id="li.goods_id" ></mydatachild>
   		</template>
   </ul>
   
  </div>
</template>

<script>
import jsonp from 'jsonp'
import Datachild from './DataChildComponent'
export default {
  name: 'datacomponent',
  data(){
  	return {
  		list:[],
  		title:'',
  		forlist:[]
  	}
  },
  components:{
  	'mydatachild':Datachild
  },
  props:['num','change'],
  methods:{
  	toChange:function(list){
			this.title = list[this.num].goods.title;
			this.forlist = list[this.num].goods.item;
  	}
  },
mounted(){//http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1
  	var that = this;
  	var urls = ''
  	if(this.change){
  		urls = 'http://www.hangowa.com/mo_bile/index.php?act=index'
  	}else{
  		urls = 'http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1'
  	}
  	jsonp(urls,null, function (err, data) {
			  if (err) {
			    console.error(err.message);
			  } else {
			    that.list = data.datas.list;
			  }
		});
  },
 	watch:{
		list:{
	      handler: function (val, oldVal) {
	      	this.toChange(val)
	      },
	      deep: true
	    }
	}

}
</script>


<style scoped>
.datacomponent{
	background: #fff;
}
.datacomponent h3{
	font-size: 0.7rem;
	font-weight: normal;
	margin: 0.5rem 0;
	padding-top: 0.5rem;
}
.data-p{
	position: relative;
	font-size: 0.6rem;
	color: #999;
}
.data-p:before{
	  content: '';
    display: block;
    width: 0.8rem;
    height: 0.05rem;
    background: #ddd;
    position: absolute;
    top: 0.3rem;
    left: -1.25rem;
}
.data-p:after{
	  content: '';
    display: block;
    width: 0.8rem;
    height: 0.05rem;
    background: #ddd;
    position: absolute;
    top: 0.3rem;
    right: -1.25rem;
}



</style>