import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import DataList from '@/components/DataList'
import tuiguang from '@/components/tuiguang'
import regi from '@/components/regi'
// import Rebuilt from '@/components/newBuilt'
import modifylist from '@/components/modifylist'
import modifyAcit from '@/components/modifyactivity'
import home from '@/components/common/Home'
 
Vue.use(Router)

export default new Router({ 
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
    	path:'/data-center',
    	name:'DataList',
    	component:DataList
    },
     
    {
      path:'/data-Reg',
      name:'DataRegister',
      component:regi
    },
    {
      path:'/data-modify',
      name:'modifyData',
      component:modifylist,
    },
     {
        path:'/data-modifyAci',
        name:'modifyAcit',
        component:modifyAcit
     },
     {
           path:'/Home',
           component:home,
           children:[
              {
                 path:'/', 
                 component:resolve=>require(['../components/tuiguang.vue'],resolve),
                 
              },
              {
                 path:'/NullDredge',
                 name:'NullDredge',
                 component:resolve=>require(['../components/404.vue'],resolve),
                 
              }

           ]
     }
  ]
   // mode: 'history',
})
