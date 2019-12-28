import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/Dashboard.vue'
import profile from '../components/profile.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base : Process.env.BASE_URL,
  routes:[
    {
        path:'/dashboard',
        name:'dashboard',
        component:'Dashboard'
    },
  {
        path:'/profile',
        name:'profile',
        component:'profile'
 },
  ]
})





















