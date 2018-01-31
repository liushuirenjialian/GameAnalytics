<template> 
 <!-- 活动 推广页面 -->
<div class="bg-sets">
    <header class="navbar navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="/"> 
         <img src="static/img/logo.png" alt="">
        </a>
       </div>
    </header>
    <div class="nav-title">
      <!-- 加上id  -->
      <ul class="nav-list"><li><router-link :to="{path: '/data-Detail?productId=' + this.pId+'&platform='+this.platform}" >活动中心</router-link></li>><li>修改推广活动</li></ul>
    </div>   
    <div class="rebulit-content">
      <div class="rebulit-lists">
        <div class="formbox clearfix">
                <label class="fl-l">选择产品</label>
                <div class="inputbox">
                  <div id="prid" class="pub"></div>
                </div>
          </div>
          <div class="formbox clearfix">
                <label class="fl-l">推广活动名称</label>
                <div class="inputbox">
                    <input placeholder="头条-199992-22333" type="tel" class="checkCode"  id="prid1" />
                </div>
          </div>
          <div class="formbox clearfix"> 
                <label class="fl-l">推广渠道</label>
                <div class="inputbox">
                  <div id="channel" class="pub"></div>
                </div>
            </div>
            <div class="formbox clearfix">
                <label class="fl-l">目标地址</label>
                <div class="inputbox">
                  <div class="pub" id="adres"></div>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">广告格式</label>
                <div class="inputbox">
                 <div class="pub" id="ad"></div>           
                 </div>
            </div>
              <div class="formbox clearfix"> 
                <label class="fl-l">推广活动组</label>
                <div class="inputbox">
                  <div class="pub" id="tui"></div>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">渠道回调事件</label>
                <div class="inputbox">
                  <div class="pub" id="qudao"></div>
               </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">点击监测链接</label>
                <div class="inputbox">
                  <div class="pub1" id="jaincejianji"></div>
                </div>
            </div>
           <div class="formbox clearfix">
                <label class="fl-l">曝光监测链接</label>
                <div class="inputbox">
                  <div class="pub1" id="jaincebuguang"></div>
                </div>
            </div>
           <div class="formbox clearfix">
                <label class="fl-l">加密密钥</label>
                <div class="inputbox">
                    <input placeholder="请输入加密密钥" type="tel" class="checkCode"  id="miyao" />
                </div>
          </div>
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
      this.getActData();
    },
    methods:{
      getActData:function(){
        var vm = this;
        var id=vm.$route.query.actId;
        console.log('act'+id)
       $.ajax({
              type: 'GET', 
              url: serverFront + "activiteQueryDetail", 
              data:{"activiteId":id},
              success:function(res) {
                var status= JSON.parse(res);
                if(status.success==0){
                console.log(status.data[0]);
                $('#prid').text(status.data[0].productName);
                $('#prid1').val(status.data[0].activiteName);
                $('#channel').text(status.data[0].channelName);
                $('#adres').text(status.data[0].targetUrl);
                $('#ad').text(status.data[0].posterPecks);
                $('#tui').text(status.data[0].activiteGroupName);
                $('#qudao').text(status.data[0].event);
                $('#jaincejianji').text(status.data[0].clickMonitorUrl);
                $('#jaincebuguang').text(status.data[0].showMonitorUrl);
                $('#miyao').val(status.data[0].md5key);
                }
                else{
                  console.log(status.msg);
                }
               }
            });
      },
       acTsave:function () {
         var  _self = this;
         // 详情需要字段
         var ProductIdd=_self.$route.query.productId;
         var platform=_self.$route.query.platform;

         var  pubData  = {};
         var  actId=_self.$route.query.actId;
          //新增密钥
          pubData.md5key=$('#miyao').val();
          pubData.activiteName =$('#prid1').val();
          pubData.activiteId =actId;
          $.ajax({
          type: 'POST', 
          url: serverFront + "activiteUpdate", 
          data:pubData,
          success:function(res) {
             var status= JSON.parse(res);
             if(status.success !=0){
              alert(status.msg);
             }else if(status.success==0){
               alert('您已经成功修改活动！');
                _self.$router.push({ path: 'data-Detail',query:{productId:ProductIdd,platform:platform}})
              // this.$router.push({name:'DataDetail',params:{name:'xy',age:22}});
             // this.$router.push({name:'DataDetail',query:{name:'xy',age:22}});

             }
            }
        });
        },
       
    }
}
</script>

<style scoped>


li a {
  color:#000;
}
li a:hover{
  color:#0784fb;
  text-decoration: none;
}
 .pub{
  height: 40px;
    border: 1.4px solid #e2e3e6;
    width: 55%;
    margin-left: 34px;
    border-radius: 6px;
    line-height: 40px;
    padding-left: 12px;
 }
 .pub1{
  min-height: 40px;
    border: 1.4px solid #e2e3e6;
    min-width: 55%;
    margin-left: 34px;
    border-radius: 6px;
    line-height: 40px;
    padding-left: 12px;
 }
li a {
  color:#0b62b5;
}
li a:hover{
  color:#0c86fb;
  text-decoration: none;
}
</style>
