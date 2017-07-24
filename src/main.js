// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import state from './vuex/state'
import mutations from './vuex/mutations'
import actions from './vuex/actions'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Vuex)



const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions:actions
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

