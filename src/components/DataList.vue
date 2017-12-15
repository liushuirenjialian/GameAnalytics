<template>
	 <div class="bg-set">

	<!-- header -->
	  <header class="navbar   navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="javascript:;"> 
         <img src="static/img/logo.png" alt="">
        </a>
       </div>
       <div class="right">
         <div class="touxinag-set"></div>
             <span class="people-set"><span>{{value}}</span> </span>
             <div style="color:rgb(88, 162, 252); cursor:pointer;" @click="exitSys();">退出</div>
       </div>
       <!-- <form class="forminline mt-2 mt-md-0" style="margin-right: 4rem;">
            <div class="touxinag-set"></div>
            <span class="people-set">hi heyanfang</span>
             <div>退出</div>
           </form> -->
       <!--  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <!--   <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <a class="nav-link" href="#">数据监测 <span class="sr-only">(current)</span></a>
         </li>
     
           </ul>
          <form class="form-inline mt-2 mt-md-0" style="margin-right: 4rem;">
            <div class="touxinag-set"></div>
            <span class="people-set">hi heyanfang</span>
             <div>退出</div>
           </form>
          <!<form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
         <!--</div>  
         -->  
        </header>
    <!-- content   -->
     <div class="container-fluid">
     	<main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <!-- title -->
        <div class="title">
          <h3 class="c-data">
            <span class="data-bg"></span><span style="padding-right: 9px;">数据中心</span> 
          </h3>
          <div class="right-ope">
            <button class="xinjian"><router-link to='/data-Rebuilt' style="color:#707787;">新建应用</router-link></button>
            <input type="text" placeholder="输关键字进行检索" class="search">
            <!-- <input name="" type="text" placeholder="输入关键字进行检索" ng-model="applySearch" class="ng-pristine ng-valid"> -->
               <!-- <button type="button" class="newbuilt">新建应用</button>   -->
               <!-- <button type="button" class="btn btn-default">查找</button>   -->
            </div> 
        </div>
         <!-- <h3 class="c-data"><span class="data-bg"></span><span style="padding-right: 9px;">数据中心</span>  -->
            <!--    <span style="padding-right: 9px;">|</span><span>所有游戏</span> -->
           <!--  <div class="right-ope">
               <button type="button" class="newbuilt">+新建应用</button>  
               <button type="button" class="btn btn-default">查找</button>  
            </div> -->
          <!-- </h3> -->
          
        <!-- 不自适应 用栅格系统 -->
        <!--   <h3 class="c-data"><span class="data-bg"></span><span style="padding-right: 9px;">数据中心</span> 
            <span style="padding-right: 9px;">|</span><span>所有游戏</span>
            <div class="right-ope">
               <button type="button" class="newbuilt">+新建应用</button>  
               <button type="button" class="btn btn-default">查找</button>  
            </div>
          </h3> -->

          <!-- <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <div class="text-muted">Something else</div>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </section> -->
          <!-- <h2>Section title</h2>    -->
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>游戏名称</th>
                  <th>应用平台</th>
                  <th>应用类别</th>
                  <th>排重点击</th>
                  <th>激活率</th>
                  <th>自然激活</th>
                  <th>激活总量</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
               <!--  <tr>
                  <td>
                    <router-link to="/data-Detail" style="color:#707787;"><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p"></router-link>
                    <span class="game-name">
                     </span>
                    <a href="javascript:;" class="game-and"> </a>
                    <a href="javascript:;" class="game-ios"></a>
                  </td>
                  <td> 111 </td>
                  <td>222 </td>
                  <td>33</td>
                  <td> 44</td>
                  <td> 
                   <button type="button" class="btn btn-default bt-md">修改</button>  
                   <button type="button" class="btn btn-default bt-md">删除</button>
                 </td>
                </tr> -->
                
                <tr v-for="item in listData">
                  <td><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p">
                  	<span class="game-name"><router-link to="/data-Detail" style="color:#707787;"> {{item.productName}} </router-link>  </span>
                  	<!-- <a href="javascript:;" class="game-and"> </a>
                  	<a href="javascript:;" class="game-ios"></a> -->
                  </td>
                  <td  v-bind:class="{ 'class-a': isA, 'class-b': isB,'class-c':isC }"> <!-- {{item.platform}}  --></td>
                  <td>{{item.type}} </td>
                  <td>{{item.clickNoRepetition}}</td>
                  <td>{{item.activeRate}}</td>
                  <td> {{item.natureActive}}</td>
                  <td>{{item.amountActive}}</td>
                  <td><button type="button" class="btn btn-default bt-md">修改</button>  
                   <button type="button" class="btn btn-default bt-md">删除</button></td> 
                </tr> 
              </tbody>
            </table>
          </div>
        </main>
     </div>
       
      <!-- 2  -->
 <!--      <form class="form-horizontal">表单中的栅格系统不用row  而是用form-horizontal：水平排列的表单 加到form元素中  
   <div class="form-group">  form-group代表分组的意思  把label与input分成一组  
       <label class="col-md-2 control-label" for="username">应用名称:</label>  control-label控制label与input之间的距离  for的作用是将username与input中的username绑定在一起，你正在点击用户名的时候，input输入框获得焦点  
       <div class="col-md-4">加div进行设置input的栅格  
           <input type="text"  id="username" class="form-control" placeholder="请输入应用名称" maxlength="30">  form-control  控制input输入框的显示  
       </div>  
   </div>  
   <div class="form-group">  
       <label class="col-md-2 control-label" for="password">AppStore状态:</label>  
       <div class="col-md-4">  
            <label class="checkbox-inline"><input type="checkbox" value="画画">画画</label>checkbox-inline分组显示  
           <label class="checkbox-inline"><input type="checkbox" value="玩游戏">玩游戏</label>  
           <label class="checkbox-inline"><input type="checkbox" value="听歌">听歌</label>              </div>  
   </div>  
   
   <div class="form-group">  
       <label class="col-md-2 control-label">下载地址:</label>  
       <div class="col-md-10">  class="checkbox"把一组的复选框放在一起  
           <input type="text"  id="username" class="form-control" placeholder="请输入下载地址" maxlength="30">  form-control  控制input输入框的显示  
 
       </div>  
   </div>  
   
  <div class="form-group">  
      <label class="col-md-2 control-label">学历：</label>  
      <div class="col-md-10">  class="radio" checkbox把一组的复选框放在一起  
          <label class="radio-inline"><input type="radio" value="画画">本科</label>checkbox-inline分组显示  
          <label class="radio-inline"><input type="radio" value="玩游戏">研究生</label>  
          <label class="radio-inline"><input type="radio" value="听歌">博士</label>  
      </div>  
  </div>  
    
  <div class="form-group">  
      <label class="col-md-2 control-label" for="resume">个人简历:</label>  
      <div class="col-md-4">  
           <input type="password" id="password" class="form-control" placeholder="请输入密码">  
      </div>  
  </div>
   
   <div class="form-group">  
       <div class="col-md-2 col-md-offset-2 ">  
           <button class=" btn btn-success btn-block">确定</button>  
        </div>  
       <div class="col-md-2  col-md-offset-1 ">  
           <button class=" btn btn-success btn-block"  >取消</button>
       </div>  
   </div>  
   <div class="col-md-offset-2 col-md-2">  
       <button class=" btn btn-success ">提交表单</button>  
   </div>  
   
     </form>   -->

    <!-- 1 -->
    <!--   <div class="container-fluid">
         <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>产品中心   /   新建应用</th>
              <th>设备激活</th>
                <th>新增账号</th>
                <th>活跃账户</th>
                <th>收入</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p">
                  <span class="game-name">
                  <router-link to="/data-Detail" style="color:#707787;"></router-link></span>
                  <a href="javascript:;" class="game-and"> </a>
                  <a href="javascript:;" class="game-ios"></a>
                </td>
                <td> 111 </td>
                <td>222 </td>
                <td>33</td>
                <td> 44</td>
                <td> 
                 <button type="button" class="btn btn-default bt-md">修改</button>  
                 <button type="button" class="btn btn-default bt-md">删除</button>
               </td>
              </tr>
              
              <tr v-for="item in listData">
                <td><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p">
                  <span class="game-name"><router-link to="/data-Detail" style="color:#707787;"> {{item.gameName}} </router-link>  </span>
                  <a href="javascript:;" class="game-and"> </a>
                  <a href="javascript:;" class="game-ios"></a>
                </td>
                <td> 111 </td>
                <td>222 </td>
                <td>33</td>
                <td> 44</td>
                <td><button>5</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div> -->
    <!-- 测试结束 -->
</div>
</template> 
<script>
var urlfront="http://192.168.15.101:8080/";
var allURL="http://games.hoolai.com/cms/?json=get_category_posts&cat=245&include=title,content,categories,custom_fields&count=10000";
 var serverFront="http://188.188.0.116:8080/dataservice/";

	export default{
		data(){
			return{
             listData: '',
             value:0,
             isB:0,
             isA:0,
             isC:0
			}
		},
    created: function() {
      this.getUser();
     this.initData();

    },
		methods:{
          initData:function(){
          	var _self = this;
            $.ajax({
                type: 'GET', 
                url: serverFront + "productQuery",
                headers:{

                },
                data:{
                  "pageSize":10,
                  "pageNo":1
                   // "productName":'ios',
                },
                success:function(res) {
                  // debugger
                   var data= JSON.parse(res);
                	 _self.listData=data.rows;
                   _self.getPathfrom(data)
                    // _self.listData = JSON.stringify(data.posts);
                    // console.log(_self.listData)
                }
            });
		 	 // $.ajax({   
     //            type: "post",
     //            dataType: "json",
     //            // url:allURL,
     //            url: urlfront + "log_server/queryGameInfo",
     //            success: function(json) {
     //                if (json.result==0) {
     //                	debugger
     //                  // var listData =json.rows;
     //                 this.item = JSON.stringify(json.rows);

     //                  // this.this.push(listData); 
     //                  console.log(item)
     //                    // alert('您已成功')
     //                    // $('.container').hide()
     //                    // $('.login-messaget').text('你已经填写成功！').fadeToggle(400).delay(5000).fadeToggle(400);
                         
                        
     //                } else {
     //                    alert(json.msg)
     //                    // $('.login-messaget').text(json.msg).fadeToggle(400).delay(5000).fadeToggle(400);
     //                }

     //            }
     //        });
		 },
        getUser:function(){
          var self = this;
          self.value = sessionStorage.getItem("key"); 
        },
        getPathfrom:function(data){
        for(var i=0;i < data.rows.length;i++){
            var pathfrom = data.rows[i].platform;
            if(pathfrom==0){
              this.isA=1;

            }
            else if(pathfrom == 1){
              this.isB=1;

            }else if(pathfrom == 2){
              this.isC=1;
            }
        }
      
        },
        exitSys:function(){
             var kys = sessionStorage.getItem("key"); 
            $.ajax({
                type: 'GET', 
                url: serverFront + "loginOut",
                data:{
                  "registEmail": sessionStorage.getItem("key")
                
                   // "productName":'ios',
                },
                success:function(res) {
                  debugger
                   if(res.success==0){
                   var msss=JSON.parse(res)
                     // sessionStorage.removeItem("key"); 
                   alert(msss)
                     // location.href="/";
                   }
                   // _self.listData=data.rows;
                   // _self.getPathfrom(data)
                    // _self.listData = JSON.stringify(data.posts);
                    // console.log(_self.listData)
                }
            });
        }

		},
	 
	}
</script>
 
