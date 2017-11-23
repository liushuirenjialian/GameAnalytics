import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataList from '@/components/DataList'
import DataDetail from '@/components/DataDetail'
// 设置路由  
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
    }

  ]
})
