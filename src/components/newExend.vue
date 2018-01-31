<template> 
 <!-- 新建 推广页面 -->
<div class="bg-sets">
       <!-- header   -->
    <header class="navbar navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="/"> 
         <img src="static/img/logo.png" alt="">
        </a>
        <!-- <router-link to='/data-detail'>活动中心</router-link></li> -->
       </div>
    </header>
    <div class="nav-title">
      <!-- 加上id  -->
      <ul class="nav-list"><li><router-link :to="{path: '/data-Detail?productId=' + this.pId+'&platform='+this.platform}" >活动中心</router-link></li>><li>新建推广活动</li></ul>
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
</template>
<script>
export default {
  name: 'heyanfang',
  data () {  
    return {
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
     platform:this.$route.query.platform
    }
  },
    created: function() {
      // this.getUser();
      this.getActData();

    },

    methods:{
      getActData:function(){
        var vm = this;
        var id=vm.$route.query.platform;
               // var id=vm.$route.query.productId;
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
                      // detail页面传到新建在传到detail
                   _self.$router.push({ path: 'data-Detail',query:{productId:ProductIdd,platform:platform}})
                  // this.$router.push({name:'DataDetail',params:{name:'xy',age:22}});
                 // this.$router.push({name:'DataDetail',query:{name:'xy',age:22}});

                 }
                }
            });
        },
        change:function(o){
        // alert(o); 
        debugger 
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
        }
        // for (var i = _self.channelList.length - 1; i >= 0; i--) {
        //   if(_self.channelList[i].id==o){
        //     // 读到对应的监测数据即可 
        //     // alert('ok');
        //     _self.dianji=_self.channelList[i].clickMonitorUrl;
        //     _self.baoguang=_self.channelList[i].showMonitorUrl;
        //     console.log(_self.channelList[i].clickMonitorUrl);
        //     console.log(_self.channelList[i].showMonitorUrl);
        //   }
        // }
        // }
       //  getChannelId:function(channel){
       //    debugger
       //      var _self = this;
       //      // console.log(channel);
       //      var id= _self.pubData.channelId;
       //      console.log(id)
       // }
    }
}
</script>

<style scoped>


li a {
  color:#0b62b5;
}
li a:hover{
  color:#0c86fb;
  text-decoration: none;
}
 
</style>
