<template>
	 <div class="bg-set">
	<!-- header -->
	  <header class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
       <div class="line">
        <a class="navbar-brand" href="/"> 
         <img src="static/img/logo.png" alt="">
        </a>
       </div>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">数据监测 <span class="sr-only">(current)</span></a> -->
            </li>
          
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        
        </header>
    <!-- content -->
     <div class="container-fluid">
     	<main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h3 class="c-data"><span class="data-bg"></span><span style="padding-right: 9px;">数据中心</span> 
            <span style="padding-right: 9px;">|</span><span>所有游戏</span>
          </h3>

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

          <!-- <h2>Section title</h2> -->
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>游戏*</th>
                  <th>设备激活</th>
                  <th>新增账号</th>
                  <th>活跃账户</th>
                  <th>收入</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listData">
                  <td><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p">
                  	<span class="game-name"><router-link to="/data-Detail" style="color:#707787;"> {{item.gameName}} </router-link>  </span>
                  	<a href="javascript:;" class="game-and"> </a>
                  	<a href="javascript:;" class="game-ios"></a>
                  </td>
                  <td>{{item.equipmentActivationNum}} </td>
                  <td>{{item.newAccountNum}}</td>
                  <td>{{item.activeAccountNum}}</td>
                  <td>{{item.incomeNum}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      
     </div>
 
</div>
</template> 
<script>
var urlfront="http://192.168.15.101:8080/";
var allURL="http://games.hoolai.com/cms/?json=get_category_posts&cat=245&include=title,content,categories,custom_fields&count=10000";
	export default{
		data(){
			return{
             listData: ''
			}
		},
		methods:{
          initData:function(){
          	var _self = this;
            $.ajax({
                type: 'GET',
                // url:allURL,
                url: urlfront + "log_server/queryGameInfo",
                success:function(res) {
                	// debugger
                   var data= JSON.parse(res);
                	 _self.listData=data.rows;
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
		 }
		},
		created:function() {
		 this.initData();
		}
	}
</script>