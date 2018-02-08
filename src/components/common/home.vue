<template>
	<div class="bg-set">
	      <!-- <v-head></v-head> -->
       <header class="navbar  navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="javascript:;"> 
         <img src="static/img/logo.png" alt="">
        </a>
        <router-link to='/data-center'>游戏列表</router-link>

       </div>
       <div class="right">
         <div class="touxinag-set"></div>
             <span class="people-set"><span>{{value}}</span> </span>
             <div style="color:rgb(88, 162, 252); cursor:pointer;" @click="exitSys();">退出</div>
       </div>
      </header>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view> </router-view></transition>
        </div>
    </div>
</template>
<script>
    // import vHead from './header.vue';
    import vSidebar from './sidebar.vue';
    export default {
        components:{
             vSidebar
        },
        data(){
          return{
             pub:'',
             hu:'test',
             msg:'我是从父组件传到子组件的数据',
             currentPath:''
        }  
        },
          watch: {
          '$route': 'fetchData'
         },
        created:function () {
          this.initData();
          this.getUser();
          var pub = this.$route.params.value;  
          console.log(pub); 
          },
          methods:{
            fetchData(){
              this.initData();
            },
            initData:function(){
              console.log('success')
            },
            getUser:function(){
              var self = this;
              self.value = sessionStorage.getItem("key"); 
           },
           exitSys:function(){
           var _self = this;
           var kys = sessionStorage.getItem("key"); 
            $.ajax({
                type: 'GET', 
                url: serverFront + "loginOut",
                data:{
                  "registEmail": sessionStorage.getItem("key")
                },
                success:function(res) {
                  debugger
                    var status=JSON.parse(res);
                   if(status.success==0){
                     // var status=JSON.parse(res);
                     // sessionStorage.removeItem("key"); 
                   alert(status.msg);
                   _self.$router.push({ path: '/' })

                     }
                }
            });
        },
          }
          

    }
</script>
<style>
	 .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 230px;
    right: 0;
    top: 58px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
}
</style>