<template> 
 <!-- 新建 推广页面 -->
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
      <ul class="nav-list"><li>产品中心</li>><li>推广活动</li>><li>新建推广活动</li></ul>
    </div>   
    <div class="rebulit-content">
      <div class="rebulit-lists">
        <div class="formbox clearfix">
                <label class="fl-l">选择产品</label>
                <div class="inputbox">
                 <select class="system">
                   <option>XP-test</option>
                   <option>XP-test</option>
                   <option>XP-test</option>
                </select>
                </div>
          </div>
          <div class="formbox clearfix">
                <label class="fl-l">推广活动名称</label>
                <div class="inputbox">
                    <input placeholder="头条-199992-22333" type="tel" class="checkCode"/>
                </div>
          </div>
          <div class="formbox clearfix">
                <label class="fl-l">推广渠道</label>
                <div class="inputbox">
                    <input placeholder="今日头条" type="tel" class="checkCode"/>
                </div>
            </div>
             <div class="formbox clearfix">
                <label class="fl-l">目标地址</label>
                <div class="inputbox">
                    <input placeholder="http://test.com" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">广告格式</label>
                <div class="inputbox">
                    <input placeholder="文字广告" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">推广活动组</label>
                <div class="inputbox">
                    <input placeholder="不分配推广活动组" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">渠道回调事件</label>
                <div class="inputbox">
                    <input placeholder="激活" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">点击监测链接</label>
                <div class="inputbox">
                    <input placeholder="http://test.com" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">曝光监测链接</label>
                <div class="inputbox">
                    <input placeholder="http://test.com" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">目标地址</label>
                <div class="inputbox">
                    <input placeholder="http://test.com" type="tel" class="checkCode"/>
                </div>
            </div>
              <div class="formbox clearfix">
                <label class="fl-l">成本计算</label>
                <div class="inputbox">
                    <input placeholder="添加计算方式" type="tel" class="checkCode"/>
                </div>
            </div>
            <div class="formbox">
              <input type="submit" class="submit" placeholder="保存" >
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
