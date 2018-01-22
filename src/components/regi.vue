<template>
	<div class="bg-set">
		<div class="win">
			<div class="login_win">
				  <div class="login_title" >
			         <img src="static/img/logo1.png" alt="">
			      </div>
				<form action="" method="post" class="register" id="register" style="display: block;">
					<table border="0" cellspacing="0" cellpadding="0" class="IE_win IE_win2">
						<tr>
							<td>
								<div class="company clear">
									<input v-model="email" class="validate[required,custom[illegalLetter],requiredcustom[noSpecialCaracters],ajax[/uileader/check/userName.do|* 昵称已存在!]]" type="text" name="email" placeholder="请输入您的邮箱"  id='nickName' autocomplete=""  maxlength="50"/>
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
							<td class="lable_name"><span>设置密码 6~20个字符：</span></td>
							<td>
								<div class="pas clear">
									<input v-model="pass" class="validate[required,length[6,15]]" type="password" name="RegisterPwd"  placeholder="设置密码 6~15个字符" watermark="" id="RegisterPwd" autocomplete="off" maxlength="30"/>
									<div class="validation_info"></div>
								</div>
							</td>
						</tr>
						<tr>
							<td class="lable_name"><span>重新输入密码：</span></td>
							<td>
								<div class="pas clear">
									<input  v-model="againPass" class="validate[required,length[6,15]]" type="password" name="RegisterPwd"  placeholder="再次输入设置的密码" watermark="" id="RegisterPwd" autocomplete="off" maxlength="20"/>
									<div class="validation_info"></div>
								</div>
							</td>
						</tr>
					</table>
			 
					
					<button class="register_immediately" type="button" @click="regiS();">立即注册</button>
					<div class="operation clear">
						<a href="javascript:;" class="text">离注册成功还差一步</a>
						<a href="javascript:;" class="sign_in" ><router-link to='/'>点我登录?</router-link></a>
					</div>
					 <div class="alert alert-success" role="alert" style="display:none;">
		            <strong>邮箱或密码为空!</strong> 
		            </div>
		            <div class="alert alert-danger" role="alert" style="display:none;">
		            <strong>邮箱或密码为空!</strong> 
		            </div>
				</form>
			 
			<div class="login_info" style="display:block;"></div> 
			</div>
			<!--背景图-->
			 
			<!--备案号-->
			<div class="record_number">
				&copy;北京天神互动科技 Copyright All Rights Reserved.
			</div>
		</div>
	</div>
</template>
<script>
 
 // var urlfront="http://192.168.15.101:8080/";
 // var newFront="http://192.168.15.101:8080/dataservice/";
 // var serverFront="http://188.188.0.116:8080/dataservice/";
export default {
  name: 'heyanfang',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!heyanfang',
      email:'',
      pass:'',
      againPass:'',
      couldSubm:false,
      
    }
  },
    methods:{
          regiS:function(){
            var _self = this;
             var data = {};
              data.email = _self.email;
              data.pass = _self.pass;
              data.passTwo = _self.againPass;
               
              if(data.pass!=''||data.email!=''||data.passTwo!=''){
              	if(!this.validateEmail(data.email)){
              		return;
              	}
              	// 使用sessionstorage存储email 
              	if(data.pass!=''||data.passTwo!=''){
              		if(data.pass == data.passTwo){
                      $.ajax({
                      type: 'POST',
                      // url:allURL,
                      url: serverFront + "userAdd",
                      // set 跨域
                      // dataType: 'jsonp',
                      data:{
	                    "registEmail": data.email,
	                    "password":data.pass
                        },
                      success:function(res) {
                        // debugger  
                       var status=JSON.parse(res);
                       if(status.success == 3){
                       	  alert(status.msg);
                         }else if(status.success == 1){
                         $('.alert-success').text('邮箱或密码为空!').fadeToggle(400).delay(3000).fadeToggle(400);

                         }else if(status.success == 0){
                        	alert('注册成功');

                         }else if(status.success == 2){
                         	alert(status.msg)
                         }
                         else if(status.success == 4){
                         alert(status.msg)
                         }else if(status.success == 5){
                         	$('.alert-success').text(status.msg).fadeToggle(400).delay(3000).fadeToggle(400);

                         }
                       }
                      });
                    }else{
                          $('.alert-success').text('两次密码输入不一致!').fadeToggle(400).delay(3000).fadeToggle(400);
                      } 
              	}
              	else{
              		$('.alert-success').text('请输入您的密码：').fadeToggle(400).delay(3000).fadeToggle(400);
              	}
              	
          }else{
          	  $('.alert-danger').text('请将表单填写完整  !').fadeToggle(400).delay(3000).fadeToggle(400);
          }
     }, 
     // email 正则
     validateEmail:function(obj){
     	 var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;  
         if(!reg.test(obj)){  
          $('.alert-danger').text('邮箱格式不正确 !').fadeToggle(400).delay(3000).fadeToggle(400);
            return false;
          }  
           return true;
 
     }
   
    }
}
</script>