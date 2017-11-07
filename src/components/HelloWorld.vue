<template>
   
<!--   <div class="hello">
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


<div class="win">
      <div class="login_win">
        <div class="login_title" >
         <img src="static/img/logo1.png" alt="">
        </div>
        <form action="" method="post" class="form_win" id="form_win" style="display: block;" showOnMouseOver="false">
          <table border="0" cellspacing="0" cellpadding="0" class="IE_win">
            <tr>
              <td class="lable_name"><span>请输入手机号：</span></td>
              <td>
                <div class="tel clear">
                  <input class="validate[required,custom[mobilephone]]" type="text" name="" placeholder="请输入手机号" watermark="请输入手机号" id="username" autocomplete="off"  maxlength="20"/>
                  <div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入密码：</span></td>
              <td>
                <div class="pas clear">
                  <input class="validate[required,length[6,15]]" type="password" name="password"  placeholder="请输入密码" watermark="" id="password" autocomplete="off"  maxlength="20"/>
                  <div class="validation_info"></div>
                </div>
              </td>
            </tr>
          </table>
          <button class="login" type="button"  onclick="validateForm('#form_win');">立即登录</button>
          <div class="operation clear login_info2">
            <a href="javascript:;" class="forget">忘记密码？</a>
            <a href="javascript:;" class="register_new_user">注册新账户</a>  
          </div>
          <div class="wx_login">
            <span>微信登录</span>
            <i class="arrow"><b></b></i>
            <div id="login_container" class="login_container"></div>
          </div>
        </form>
        <form action="" method="post" class="register" id="register" showOnMouseOver="false">
          <table border="0" cellspacing="0" cellpadding="0" class="IE_win IE_win2">
            <tr>
              <td class="lable_name"><span>请输入您的昵称：</span></td>
              <td>
                <div class="company clear">
                  <input class="validate[required,custom[illegalLetter],requiredcustom[noSpecialCaracters],ajax[/uileader/check/userName.do|* 昵称已存在!]]" type="text" name="" placeholder="请输入您的昵称" watermark="请输入您的昵称" id='nickName' autocomplete="off"  maxlength="20"/>
                  <div class="validation_info"></div>
                  <div class="details">
                    <i></i>
                    <span>
                      昵称用于在答疑社区提问使用
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入公司名字：</span></td>
              <td>
                <div class="company clear">
                  <input class="validate[required]" type="text" name="" placeholder="请输入公司名称" watermark="请输入公司名称" id='CompanyName' autocomplete="off"  maxlength="20"/>
                  <div class="validation_info"></div>
                    <div class="details">
                    <i></i>
                    <span>
                      准确的公司名称有利于我们更好的提供技术支持
                    </span>
                  </div>
                </div >
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>设置密码 6~20个字符：</span></td>
              <td>
                <div class="pas clear">
                  <input class="validate[required,length[6,15]]" type="password" name="RegisterPwd"  placeholder="设置密码 6~15个字符" watermark="" id="RegisterPwd" autocomplete="off" maxlength="20"/>
                  <div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入右图中的字符：</span></td>
              <td>
                <div class="picture clear">
                  <input type="text" class="validate[required,ajax[/uileader/check/code.do|* 验证码不正确!]]" placeholder="请输入右图中的字符" watermark="请输入右图中的字符" id="code" autocomplete="off"  maxlength="4"/>
                  <div class="img_num clear">
                    <i><img src="authImage.captcha" id="CreateCheckCode" align="middle"></i>
                    <span onclick="myReload()">刷新</span>
                  </div><div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入您的手机号：</span></td>
              <td>
                <div class="tel clear">
                  <input class="validate[required,custom[mobilephone],ajax[/uileader/check/unTel.do|* 手机号已注册!]]" type="text" name="" placeholder="请输入您的手机号" watermark="请输入手机号" id="RegisterTel" autocomplete="off" maxlength="11"/>
                  <div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>请输入您的手机号：</span></td>
              <td>
                <div class="sms_code clear">
                  <input type="text" class="validate[required]" placeholder="短信验证码" watermark="短信验证码" id="RegisterSms" autocomplete="off"  maxlength="6"/>
                  <!--<span class="get_sms_code" onclick="addSms('Register')" >获取短信验证码</span>-->
                  <span class="get_sms_code">获取短信验证码</span><div class="validation_info"></div>
                </div>
              </td>
            </tr>
          </table>
          <div class="agree_service clear">
            <input type="checkbox" name="agree" for_agree="0" id="agree" value="" />
            <label for="agree" id="for_agree" >我已阅读并同意</label>
            <a href="javascript:;">《UILeader 用户服务协议》</a>
          </div>
          
          <button class="register_immediately" type="button"  onclick="validateForm('#register');"  disabled="disabled">立即注册</button>
          <div class="operation clear">
            <a href="javascript:;" class="text">离注册成功还差一步</a>
            <a href="javascript:;" class="sign_in">已注册？点我登录</a>
          </div>
        </form>
        
        <form action="" method="post" class="retrieval_password" id="retrieval_password" style="" showOnMouseOver="false">
          <table border="0" cellspacing="0" cellpadding="0" class="IE_win IE_win2">
            <tr>
              <td class="lable_name"><span>请输入您的手机号：</span></td>
              <td>
                <div class="tel clear">
                  <input class="validate[required,custom[mobilephone],ajax[/uileader/check/tel.do|* 手机号不存在!]]" type="text" name="" placeholder="请输入您的手机号" watermark="请输入手机号" id="UpdatePwdTel" autocomplete="off" maxlength="11"/>
                  <div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>短信验证码：</span></td>
              <td>
                <div class="sms_code clear">
                  <input type="text" name="" placeholder="短信验证码" watermark="请输入手机号" id="UpdatePwdNum" autocomplete="off"  maxlength="6"/>
                  <!--<span class="get_sms_code"  onclick="addSms('UpdatePwd')">获取短信验证码</span>-->
                  <span class="get_sms_code">获取短信验证码</span><div class="validation_info"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="lable_name"><span>设置新密码 6~20个字符：</span></td>
              <td>
                <div class="tel clear">
                  <input class="validate[required,length[6,15]]" type="text"  placeholder="设置新密码 6~20个字符" watermark="请输入手机号" id="UpdatePwdPwd" autocomplete="off" maxlength="20"/>
                  <div class="validation_info"></div>
                </div> 
              </td>
            </tr>
          </table> 
          <button class="retrieval_ok" type="button" onclick="validateForm('#retrieval_password');">确定</button>
          <div class="operation clear" style="padding: 15px 0;">
            <a href="javascript:;" class="sign_in">点我登录</a>
          </div>
        </form>
        <div class="login_info" style="display:none;"></div> 
      </div>
      <!--背景图-->
      <div class="bg_img">
        <!-- <img src="http://static.uileader.com/uileader/views/login/@media5/login_register.jpg"/> -->
      </div> 
      <div class="bg_img2" >
          <!-- <img src="http://static.uileader.com/uileader/views/login/@media5/bg_img02.png"/>   -->
      </div>
     <!--  <div class="bg_img3">
        <img src="http://static.uileader.com/uileader/views/login/@media5/bg_img03.png"/>
      </div> -->
      <!--备案号-->
      <div class="record_number">
        &copy; 2017  北京天神互动科技 Copyright © 2010–2014 tianshenhudong.com. All Rights Reserved.
      </div>
    </div>
</template>

<script>
export default {
  name: 'heyanfang',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!heyanfang'
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
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
