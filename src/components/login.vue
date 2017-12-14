<template> 
<!--<div class="hello">
  <div class="tuth-logo" style="flex-direction: row; display: flex; width: 100%;justify-content: center; padding-top: 330px;"><img src="../assets/logo.png" alt=""></div>
   <main class="auth-main" >
      <div class="auth-block">
          <form class="form-horizontal">
              <div class="form-group">
                  <label for="inputEmail3" class="col-sm-1 control-label"> </label>
                  <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder=" 用户名">
                  </div>
              </div>
              <div class="form-group">
                  <label for="inputPassword3" class="col-sm-1 control-label"> </label>
                  <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="密码 ">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-1">
                      <button type="submit" class="btn btn-default btn-auth">登录</button>
                      
                  </div>
              </div>
              <a href="dashboard" class="forgot-pass">忘记密码？请联系管理员</a>
          </form>
          <div class="auth-sep"><span><span>天神娱乐</span></span></div>
          <div class="al-share-auth">
              <ul class="al-share clearfix">
                  <li> <img src="http://www.tianshenyule.com/templets/ts/images/logo.png" alt=""></li>
                  <li><i class="socicon socicon-twitter" title="Share on Twitter"></i></li>
                <li><i class="socicon socicon-google" title="Share on Google Plus"></i></li>
              </ul>
          </div>
      </div>
  </main>
</div>   -->
<div class="win bg-set">
      <div class="login_win">
        <div class="login_title" >
         <img src="static/img/logo1.png" alt="">
        </div>
        <form action="" method="post" class="form_win" id="form_win" style="display: block;" showOnMouseOver="false">
          <table border="0" cellspacing="0" cellpadding="0" class="IE_win">
            <tr>
              <td class="lable_name"><span>请输入注册邮箱</span></td>
              <td>
                <div class="tel clear">
                  <input  v-model="telephone"  type="text" name="" placeholder="请输入注册邮箱"  id="username" autocomplete="value" maxlength="20"/>
                  <!-- <div class="validation_info"></div> -->
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入密码：</span></td>
              <td>
                <div class="pas clear">
                  <input  v-model="password"   type="password" name="password"  placeholder="请输入密码" watermark="" id="password" autocomplete="off"  maxlength="20"/>
                  <!-- <div class="validation_info"></div>  -->
                </div>
              </td>
            </tr>
          </table>
          <div class="agree_service clear">
            <input type="checkbox" name="agree" for_agree="1" id="agree" value="" checked="true">
            <label for="agree" id="for_agree" style="color:grey;">我已了解并同意七天免登录</label>
            <!-- <a href="javascript:;">《UILeader 用户服务协议》</a> -->
          </div>
          <button class="login" type="button" @click="login()">立即登录</button>
          <div class="operation clear login_info2">
            <a href="javascript:;" class="forget" >忘记密码？</a>
            <a href="javascript:;" class="register_new_user"><router-link to='/data-Reg'>注册新账户</router-link></a>
          </div>
           <div class="alert alert-success" role="alert" style="display:none;">
            <strong>邮箱或密码为空!</strong> 
            </div>
          <!-- <div class="wx_login">
            路由进入datalist
            <span>微信登录<router-link to='/data-center'>主页</router-link></span>
            <i class="arrow"><b></b></i>
            <div id="login_container" class="login_container"></div>
          </div> -->
        </form>
              
      </div>
      <!--背景图 -->
      <div class="bg_img">
       </div> 
      <div class="bg_img2" >
       </div>
     <!--  <div class="bg_img3">
        <img src="http://static.uileader.com/uileader/views/login/@media5/bg_img03.png"/>
      </div> --> 
      <!--备案号-->
      <div class="record_number">
      &copy;北京天神互动科技 Copyright All Rights Reserved.
      </div>
    </div>
</template>

<script>
 var basePath = 'https://account.talkingdata.com:443';
 var urlfront="http://192.168.15.101:8080/dataservice/";
 var serverFront="http://188.188.0.116:8080/dataservice/";

export default {
  name: 'heyanfang',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!heyanfang',
      telephone:'',
      password:'',
      y:'',
      n:''
    }
  },
    methods:{
          login:function(){
            var _self = this;
            var data = {};
              data.registEmail = _self.telephone;
              data.password = _self.password;
              data.autologin=$("input[name='agree']").is(':checked') ? true : false;
              if(data.mobile!=''||data.pass!=''){
              $.ajax({
                      type: 'POST',
                      // url:allURL,  
                      url: serverFront + "login",
                      data:data,
                      success:function(res) {
                        var status=JSON.parse(res);
                       if(status.success == 3){
                          alert(status.msg);
                         }else if(status.success == 1){
                         $('.alert-success').text('邮箱或密码为空!').fadeToggle(400).delay(3000).fadeToggle(400);

                         }else if(status.success == 0){
                          $('.alert-success').text(status.msg).fadeToggle(400).delay(3000).fadeToggle(400);
                          sessionStorage.setItem("key", data.registEmail); 
                          location.href="/#/data-center";
                            // _self.$router.go({ name: 'DataList' });

                         }else if(status.success == 2){
                           $('.alert-success').text(status.msg).fadeToggle(400).delay(3000).fadeToggle(400);
                         } 
                          }
                      });
              }else{
                $('.alert-success').text('邮箱或密码为空!').fadeToggle(400).delay(3000).fadeToggle(400);
              }
     }
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
