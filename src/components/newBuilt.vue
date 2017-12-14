<template> 
 <!-- 新建 应用页面 -->
<div class="bg-sets">
       <!-- header   -->
    <header class="navbar navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="/"> 
         <img src="static/img/logo.png" alt="">
        </a>
       </div>
       <div class="right">
         <div class="touxinag-set"></div>
          <span class="people-set"><span>heyanfang@qq.com</span> </span>
          <div style="color:rgb(88, 162, 252); cursor:pointer;">退出</div>
       </div>
    </header>
    <div class="nav-title">
      <ul class="nav-list"><li>产品中心</li>><li>新建应用</li>><li>新建应用</li></ul>
    </div>   
    <div class="rebulit-content">
      <div class="rebulit-lists">
        <div class="formbox clearfix">
                <label class="fl-l">应用名称</label>
                <div class="inputbox">
                    <input placeholder="输入短信验证码" type="tel" class="checkCode"/>
                </div>
            </div>
             <div class="formbox clearfix">
                <label class="fl-l">应用平台</label>
                <div class="inputbox">
                    <input placeholder="输入  ios /  android / 网页测试版" type="tel" class="checkCode"/>
                </div>
            </div>
             <div class="formbox clearfix">
                <label class="fl-l">AppStore状态</label>
                <div class="inputbox">
                    <input placeholder="输入  已上架应用商店  /  开发中" type="tel" class="checkCode"/>
                </div>
            </div>
             <div class="formbox clearfix">
                <label class="fl-l">下载地址</label>
                <div class="inputbox">
                    <input placeholder="输入下载地址" type="tel" class="checkCode"/>
                </div>
            </div>
            <div class="formbox">
              <input type="submit" class="submit" placeholder="提交" >
            </div>
      </div>
    </div>  
    </div>
</template>

<script>
 var basePath = 'https://account.talkingdata.com:443';
 var urlfront="http://192.168.15.101:8080/dataservice/";
 
export default {
  name: 'heyanfang',
  data () {  
    return {
     
    }
  },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*import 'static/styles/auth-e6a436ad15.css'*/
#app{
    /*width: 100%;*/
}
 
</style>
