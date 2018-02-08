<template> 
  <div>
     <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar" >
          <div class="menu">
            <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                    </el-submenu>
                </template>
                <template>
                  <el-menu-item :default-active="$route.path" @click="getKey(item)" :index="item.index+'?productId='+pId+'&platform='+platform">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
    
              <!--  <el-menu-item :index="item.index+'?id='" >
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item> -->
                </template>
            </template>
        </el-menu>
           </div>
    </nav> 
    </div>

 </template>
<script>
import sidebar from '@/components/common/sidebar'
 
export default {
  name: 'y',
  data ( ) {
    return {
       listData: '',
       weiyi:'',
       indexx:'',
       pId: this.$route.query.productId,
       platform:this.$route.query.platform,
       fenqun:false,
       second:true,
       tuicurr:true,
       fenxicurr:false,
       ky:'',
       items: [
                      {
                        icon: 'el-icon-setting',
                        index: 'Home',
                        title: '推广活动',
                         
                    },
                    
                    {
                        icon: 'el-icon-menu',
                        index: 'NullDredge',
                        title: '分群分析'
                    },
                    {
                        icon: 'el-icon-date',
                        index: 'NullDredge',
                        title: '应用排名'
                         
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'NullDredge',
                        title: '作弊防护'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'NullDredge',
                        title: '日志导出'
                    },
                    {
                        icon: 'el-icon-view',
                        index: 'NullDredge',
                        title: 'EasyLink'
                    },
                    {
                        icon: 'el-icon-circle-check-outline',
                        index: 'NullDredge',
                        title: '产品设置'
                    } 
                ]
     }
  },
   created: function() {
      this.getUser();
      this.getActiInit();
      // var indexx = this.$route.query.id;
      // console.log(indexx)
     },
   methods:{
    getKey(path){
      var weiyi=this.$route.query.id;
      // var ky=id.substr(7);
       // alert(weiyi);
      // console.log('path'+path.path);
    },
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
    qidai:function(){
       alert('敬请期待');
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
      }
  },
    computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
}
</script>
<style>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 91px;
    bottom: 0;
    background: #EBeef3;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu-vertical-demo{
      background: #EBeef3;
      /* */
    }
    .menu,.el-menu{
       background: #EBeef3;
    }
    .el-menu-item:hover{
      background:rgb(88, 162, 252);
      color:white;

    }
    .el-menu-item.is-active {
    color: #ffffff;
    background: rgb(9, 113, 202);
}
</style>