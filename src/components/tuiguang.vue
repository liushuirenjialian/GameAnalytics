<template>
    <div>
    <!-- <p style="display:block;">产品id：{{this.$route.query.productId}}//{{this.$route.query.platform}}</p> -->
        <!-- 推广活动 -->
        <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3" id="act">
          <div class="tuiguang-title" style="color: rgb(24, 80, 134);font-size: 19px;margin-bottom: 10px;">推广活动</div>
          <div class="lines"></div> 
          <div class="tuiguang" @click="tuiguangCli()"><button type="button" class="btn btn-primary bt-md">+  新建推广活动</button></div>
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
                <tr v-for="list in listDatas">
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
        <!-- 新建模块 -->
     <div id="newbuilt" v-show="newbuilt">
     <div class="nav-title">
       <ul class="nav-list"><li><a @click="closeTui()">推广活动</a></li>><li>新建推广活动</li></ul>
    </div>   
    <div class="rebulit-content">
      <div class="rebulit-lists">
        <div class="formbox clearfix">
                <label class="fl-l">选择产品</label>
                <div class="inputbox">
                 <select class="system" v-model="product">
                   <option disabled value="">请选择产品</option>
                   <option v-for="item in listData" v-bind:value="item.id">{{item.name}}</option>
                </select>
                </div>
          </div>
          <div class="formbox clearfix">
                <label class="fl-l">推广活动名称</label>
                <div class="inputbox">
                    <input placeholder="头条-199992-22333" type="tel" class="checkCode" v-model="tuiguang"/>
                </div>
          </div>
          <div class="formbox clearfix"> 
                <label class="fl-l">推广渠道</label>
                <div class="inputbox">
                <select class="system" v-model="channel"  @change="change(channel)">
                   <option disabled value="">请选择推广渠道</option>
                   <option v-for="channel in channelList" v-bind:value="channel.id">{{channel.name}}</option>
                </select>
                </div>
            </div>
            <div class="formbox clearfix">
                <label class="fl-l">目标地址</label>
                <div class="inputbox">
                    <input placeholder="http://test.com" type="tel" class="checkCode" v-model="mubiao"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">广告格式</label>
                <div class="inputbox">
                 <select class="system" v-model="geshi">
                  <option disabled value="">请选择广告格式</option>
                  <option value="1">文字广告</option>
                  <option value="2">横幅广告</option>
                </select>               
                 </div>
            </div>
              <div class="formbox clearfix"> 
                <label class="fl-l">推广活动组</label>
                <div class="inputbox">
                 <select class="system" v-model="activity">
                   <option disabled value="">请选择推广活动组</option>
                   <option v-for="act in activiteGroupLIst" v-bind:value="act.id">{{act.name}}</option>
                </select>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">渠道回调事件</label>
                <div class="inputbox">
                <select class="system" v-model="huidiao">
                    <option disabled value="">请选择渠道回调事件</option>
                     <option value="1">付费</option>
                     <option value="2">激活</option>
                     <option value="3">注册</option>
                </select>  
               </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">点击监测链接</label>
                <div class="inputbox">

                  <div class="text-area" v-model="jiance">{{dianji}}</div>
                    <!-- <input placeholder="http://test.com" type="tel" class="checkCode" v-model="jiance" v-bind:text="dianji"/>  -->
                </div>
            </div>
           <div class="formbox clearfix">
                <label class="fl-l">曝光监测链接</label>
                <div class="inputbox">
                   <div class="text-area" v-model="baoguang">{{baoguang}}</div>
                </div>
            </div>
           <div class="formbox clearfix">
                <label class="fl-l">加密密钥</label>
                <div class="inputbox">
                    <input placeholder="请输入加密密钥" type="tel" class="checkCode" v-model="md5key"/>
                </div>
          </div>
           <!--  <div class="frombox clearfix">
              <label for="f1-1">加密密钥</label>
            </div>-->
            <div class="formbox">
              <input type="submit" class="submit" placeholder="请输入加密密钥" @click="acTsave()" >
            </div> 
      </div>
    </div>  
    </div>
        </div>
 </template>
<script>
 
export default {
  // name: 'heyanfang',
  data ( ) {
    return {
       listDatas: '',
       id:'',
       platform:'',
       pId: this.$route.query.productId,
       platform:this.$route.query.platform,
       act:true,
       listData:'',
       productList:'',
       product:'',
       channelList:'',
       channel:'',
       activiteGroupLIst:'',
       activity:'',
       news:'',
       huidiao:'',
       geshi:'',
       jiance:'',
       buugang:'',
       tuiguang:'',
       mubiao:'',
       pubData:{},
       dianji:'',
       baoguang:'',
       pathform:'',
       ProductIdd:'',
       id:'',
       md5key:'',
       pId: this.$route.query.productId,
       platform:this.$route.query.platform,
       newbuilt:false
    
     }
  },
   created: function() {
      this.getUser();
      this.getActiInit();
      this.getActData();
      // this.initData();
      //  var pub = this.$route.query.id;
      // console.log(pub)
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
                   _self.listDatas=data.rows;
                   
                }
            });
    },
    
     fenxi:function(){
        console.log('success');
     },
     qidai:function(){
       alert('敬请期待')
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
       getActData:function(){
        var vm = this;
        debugger
        var id=vm.$route.query.platform;
        console.log(id)
       $.ajax({
              type: 'GET', 
              url: serverFront + "queryDateForActiviteAdd", 
              data:{"platform":id},
              success:function(res) {
                 var status= JSON.parse(res);
                  vm.listData=status.productList;
                  vm.channelList =status.channelList;
                  vm.activiteGroupLIst =status.activiteGroupLIst;
                 // vm.getChannelId(status.channelList);
                 }
    
                
            });
      },
       acTsave:function () {
         var _self = this;
         var  pubData  = {};
         var ProductIdd=_self.$route.query.productId;
         var platform=_self.$route.query.platform;
         console.log('platform'+platform)
          console.log('P'+ProductIdd)
         // 推广活动名称
          pubData.activiteName =_self.tuiguang;
          pubData.productId = _self.product;
          // 推广渠道
          pubData.channelId =_self.channel;
          pubData.targetUrl =_self.mubiao;
          pubData.posterPecks =_self.geshi;
          pubData.activiteGroup = _self.activity;
          pubData.eventId =_self.huidiao;
          pubData.clickMonitorUrl =_self.dianji;
          pubData.showMonitorUrl =_self.baoguang;
          //新增密钥
          pubData.md5key=_self.md5key;
          // if(data.channelId) 
              $.ajax({
              type: 'GET', 
              url: serverFront + "activiteAdd", 
              data:pubData,
              success:function(res) {
                 var status= JSON.parse(res);
                 if(status.success !=0){
                  alert(status.msg);
                 }else if(status.success==0){
                   alert('新建活动成功！');
                   _self.newbuilt=false;
                    // detail页面传到新建在传到detail
                   // _self.$router.push({ path: 'tuiguang',query:{id:ProductIdd,platform:platform}})
                  // this.$router.push({name:'DataDetail',params:{name:'xy',age:22}});
                 // this.$router.push({name:'DataDetail',query:{name:'xy',age:22}});

                 }
                }
            });
        },
        change:function(o){
        // alert(o);  
        var _self=this;
        // this.channelList;
        for(var i=0; i<_self.channelList.length; i++){
            if(_self.channelList[i].id==o){
            // 读到对应的监测数据即可 
            // alert('ok');
            _self.dianji=_self.channelList[i].clickMonitorUrl;
            _self.baoguang=_self.channelList[i].showMonitorUrl;
            console.log(_self.channelList[i].clickMonitorUrl);
            console.log(_self.channelList[i].showMonitorUrl);
          }
        }
        },
        tuiguangCli:function(){
          this.newbuilt=true;
        },
        closeTui:function(){
          this.newbuilt=false;
        }
        
    }

  }

</script>
<style>
  span a{
    color:#808080;
  }
  .red{
        color: #3ea2f7;
  }
  li a{
        cursor: pointer;
         color:#0c86fb;
  }
  li a:hover{
  color:#0c86fb;
  text-decoration: none;
}
 #newbuilt {
   position: absolute;
    top: 31px;
    width: 96%;
    left: 20px;

}
#newbuilt .nav-title{
  background-color: #f6f8fb;
    height: 74px;
    text-align: center;
    line-height: 60px;
    color: #4a3939;
}
.nav-list a{
  color:#4a3939;
}
</style>