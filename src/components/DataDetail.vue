<template>
	<div class="bg-set">
         <header class="navbar  navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="javascript:;"> 
         <img src="static/img/logo.png" alt="">
        </a> 
        <p style="display:none;">产品id：{{this.$route.query.productId}}//{{this.$route.query.platform}}</p>
        <router-link to='/data-center'>数据中心</router-link>
       </div>
       <div class="right">
         <div class="touxinag-set"></div>
             <span class="people-set"><span>{{value}}</span> </span>
            <!-- <a href="" onclick="javascript:location.replace('data-Reg');   event.returnValue=false;"  @click="exitSys();">安全退出</a> -->
             <div style="color:rgb(88, 162, 252); cursor:pointer;" @click="exitSys();">退出</div>
       </div>
        </header>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar" >
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
               <span class="icon-fen"></span>
               推广概览
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen1"></span>推广活动</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen2"></span>分群分析</a>
            </li>
          </ul>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen3"></span>应用排名</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen4"></span>作弊防护</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen5"></span>日志导出</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen6"></span>EasyLink</a>
            </li>
          </ul>
 
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="icon-fen7"></span>产品设置</a>
            </li>
          </ul>
        </nav>  
        <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3" >
          <div class="tuiguang-title" style="color: rgb(24, 80, 134);font-size: 19px;margin-bottom: 10px;">推广活动</div>
          <div class="lines"></div> 
          <div class="tuiguang"><button type="button" class="btn btn-primary bt-md"><router-link :to="{path: '/data-Exend?productId=' + this.$route.query.productId+'&platform='+this.$route.query.platform}">+  新建推广活动</router-link> </button></div>
          <div class="tuiguang-search"><input type="text" placeholder="输入关键字进行检索" class="search"></div>
          <section class="row text-center placeholders">
          </section>
           <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>展示</th>
                  <th>点击</th>
                  <th>点击率</th>
                  <th>排重点击</th>
                  <th>激活</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="list in listData">
                  <td><span class="star"><img src="static/img/star.png"alt=""> <router-link :to="{path: '/data-modifyAci?actId=' + list.activiteId+'&productId='+ pId+'&platform='+platform}">{{list.activiteName}}</router-link></span></td>
                  <td>{{list.showCountValue}}</td>
                  <td>{{list.clickCount}}</td>
                  <td>{{list.clickRate}}</td>
                  <td>{{list.clickCountNoRepeat}}</td>
                  <td>{{list.activateCount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div> 
	</div>
</template>
<script>
// var serverFront="http://188.188.0.116:8080/dataservice/";  
//  
export default {
  name: 'heyanfang',
  data ( ) {
    return {
       listData: '',
       id:'',
       platform:'',
       pId: this.$route.query.productId,
       platform:this.$route.query.platform
     }
  },
   created: function() {
      this.getUser();
      this.getActiInit();
      // this.initData();
      var platform= this.$route.query.platform;
      console.log('当前platform:'+platform)
     },
  methods:{
    sidebarC:function() {
      $('.d-none').show();
     },
     sidebarR:function() {
      $('.d-none').hide();
     },
    getActiInit:function(){
     var _self = this;
     var id=_self.$route.query.productId;
            $.ajax({
                type: 'GET', 
                url: serverFront + "activiteQuery",
                data:{
                  // "activiteGroupIds":10,
                  // "ChannelIds":1
                  //  "platform":'ios', 
                   "productId":id
                },
                success:function(res) {
                   var data= JSON.parse(res);
                   _self.listData=data.rows;
                   
                }
            });
    },
    getUser:function(){
          var self = this;
          self.value = sessionStorage.getItem("key"); 
    },
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
      },
  }
}
</script>
<style>
  span a{
    color:#808080;
  }
</style>