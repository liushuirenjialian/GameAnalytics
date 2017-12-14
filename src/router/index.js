import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/login'
import DataList from '@/components/DataList'
import DataDetail from '@/components/DataDetail'
import regi from '@/components/regi'
import Rebuilt from '@/components/newBuilt'
import Extend from '@/components/newExend'
 
Vue.use(Router)

export default new Router({ 
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path:'/data-center',
    	name:'DataList',
    	component:DataList
    },
     {
      path:'/data-Detail',
      name:'DataDetail',
      component:DataDetail
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

  ]
})
