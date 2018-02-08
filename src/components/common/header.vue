<template>
 <header class="navbar  navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="javascript:;"> 
         <img src="static/img/logo.png" alt="">
        </a> 
        <!-- <p style="display:none;">产品id：{{this.$route.query.productId}}//{{this.$route.query.platform}}</p> -->
        <router-link to='/data-center'>游戏列表</router-link>
       </div>
       <div class="right">
         <div class="touxinag-set"></div>
             <span class="people-set">你好<span>{{key}}</span> </span>
             <div style="color:rgb(88, 162, 252); cursor:pointer;" @click="exitSys();">退出</div>
       </div>
  </header>
</template>
<script>
 
export default {
  name: 'heyanfang',
  data ( ) {
    return {
       listData: '',
       id:'',
       platform:'',
       isA:false,
       value:'admin',
       key:''
      }
  },
  computed:{
            // name(){
            //    let key = sessionStorage.getItem("key"); 
            //    return key ? key : this.value;
            // }
  },
  methods:{
    // getUser:function(){
    //       var self = this;
    //       debugger
    //       self.value = sessionStorage.getItem("key"); 
    // },
   exitSys:function(){
          var self = this;
          var kys = sessionStorage.getItem("key"); 
          $.ajax({
              type: 'GET', 
              url: serverFront + "loginOut",
              data:{
                "registEmail": sessionStorage.getItem("key")
              },
              success:function(res) {
                 var status=JSON.parse(res);
                 if(status.success==0){
                   alert(status.msg);
                 self.$router.push({ path: '/' })
                  }
              }
          });
      }
  } }
</script>

<style scoped>
   .header[data-v-7d653020] {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
}
</style>
