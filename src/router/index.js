import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'
import Mine from '@/components/Mine'
import Home from '@/components/Home'
import Clauses from '@/components/Clauses'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Details from '@/components/Details'
import Feedback from '@/components/Feedback'
import Search from '@/components/Search'
import ShoppingCar from '@/components/ShoppingCar'
import Special from '@/components/Special'
import Signin from '@/components/Signin'
import Goodslist from '@/components/Goodslist'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/find',name: 'find',component: Find},
    {path: '/clauses',name: 'clauses',component: Clauses},
    {path: '/mine',name: 'mine',component: Mine},
    {path: '/login',name: 'login',component: Login},
    {path: '/register',name: 'register',component: Register},
    {path: '/details/:id',name: 'details',component: Details},
    {path: '/feedback',name: 'feedback',component: Feedback},
    {path: '/search',name: 'search',component: Search},
    {path: '/shopping',name: 'shopping',component: ShoppingCar},
    {path: '/special',name: 'special',component: Special},
    {path: '/signin',name: 'signin',component: Signin},
    {path: '/goodslist/:goods',name: 'goodslist',component: Goodslist},
    {path:'/',redirect:"/home"},
    {path:'*',redirect:"/home"}
  ]
})
