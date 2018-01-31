import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import DataList from '@/components/DataList'
import DataDetail from '@/components/DataDetail'
import regi from '@/components/regi'
import Rebuilt from '@/components/newBuilt'
import Extend from '@/components/newExend'
import modifylist from '@/components/modifylist'
import modifyAcit from '@/components/modifyactivity'
 
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
      path:'/data-Rebuilt',
      name:'newBuilt',
      component:Rebuilt
    },
    {
      path:'/data-Exend',
      name:'newExend',
      component:Extend
    }
    ,{
      path:'/data-modify',
      name:'modifyData',
      component:modifylist,
    },
    {
      path:'/data-Detail',
      name:'DataDetail',
      component:DataDetail,
     }, 
     {
        path:'/data-modifyAci',
        name:'modifyAcit',
        component:modifyAcit
     }
  ]
})
