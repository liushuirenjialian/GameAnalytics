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
    </header>
    <div class="nav-title">
      <ul class="nav-list"><li><router-link to='/data-center' style="color:black">数据中心</router-link></li>><li>新建应用</li>><li>新建</li></ul>
    </div>   
    <div class="rebulit-content">
      <div class="rebulit-lists">
        <div class="formbox clearfix">
                <label class="fl-l">应用名称</label>
                <div class="inputbox">
                    <input placeholder="输入应用名称" type="tel" class="checkCode" v-model="yinyong"/>
                </div>
         </div>
         <div class="formbox clearfix">
            <label class="fl-l">应用平台</label>
            <label><input name="Fruit" type="radio" value="1" checked="true" />ios </label>
            <label><input name="Fruit" type="radio" value="0" />Android </label>
            <label><input name="Fruit" type="radio" value="2" />网页 </label>
         </div>
             <div class="formbox clearfix">
                <label class="fl-l">下载地址</label>
                <div class="inputbox">
                    <input placeholder="输入下载地址" type="tel" class="checkCode" v-model="xiazai"/>
                </div>
            </div>
            <div class="formbox">
              <input type="submit" class="submit" placeholder="提交" @click="add()">
            </div>
  
      </div>
    </div>  
    </div>
</template>

<script>
 // var urlfront="http://192.168.15.101:8080/dataservice/";
 // var serverFront="http://188.188.0.116:8080/dataservice/";

export default {
  name: 'heyanfang',
  data () {  
    return {
       person: {jack: false, bob: false, alice: false}  ,
       yinyong:'',
       xiazai:''
    }
  },
    methods:{
      add:function(){
        var _self = this;
        var data = {};
        data.productName = _self.yinyong;
        data.downloadUrl = _self.xiazai;
        data.platform = $('input[type="radio"]:checked').val();
        console.log(data.platform);
         if(data.productName!=''||data.downloadUrl!=''){
              $.ajax({
                      type: 'POST',
                      // url:allURL,  
                      url: serverFront + "prodctAdd",
                      data:data,
                      success:function(res) {
                        var status=JSON.parse(res);
                       if(status.success != 0){
                        // error
                          alert(status.msg);
                         }
                       if(status.success == 0){
                          // success
                          alert('您已成功添加！');
                           _self.$router.push({ path: 'data-center' })

                          // location.href="/#/data-center";
                            // _self.$router.go({ name: 'DataList' });
 
                         } 
                          }
                      });
              }else{
                    alert('请将表单输入完整后提交')
                 }
      },
    
        
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
