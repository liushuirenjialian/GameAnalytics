<template>
	 <div class="bg-set">
     <!-- <router-link :to="{path: '/home', params: {productId: 1,platform: 1}}"></router-link> -->
   	  <header class="navbar  navbar-dark fixed-top bg-dark">
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
      </header>
     <div class="container-fluid">
     	<main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <div class="title">
          <h3 class="c-data">
            <span class="data-bg"></span><span style="padding-right: 9px;">数据中心</span> 
          </h3>
          <div class="right-ope">
            <button class="xinjian"><router-link to='/data-Rebuilt' style="color:#707787;">新建应用</router-link></button>
            <input type="text" placeholder="输关键字进行检索" class="search">
          </div> 
        </div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>游戏名称</th>
                  <th>应用平台</th>
                  <th>应用类别</th>
                  <th>排序id</th>
                  <th>排重点击</th>
                  <th>激活率</th>
                  <th>自然激活</th>
                  <th>激活总量</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <!-- <router-link :to="{path: '/home?productId=' + item.productId+'&platform='+item.platform}" >{{item.productName}} </router-link> -->
                <tr v-for="(item,xh) in listData">
                  <td @click="eventAdd(item.productId,item.platform)"><img src="https://www.talkingdata.com/game/v3/images/default-logo.png" alt="photo" class="game-p">
                  <span class="game-name"><a>{{item.productName}}</a></span>
                  </td>
                 <td v-if="item.platform == 0":class="and"></td>
                 <td v-if="item.platform == 1":class="ios"></td>
                 <td v-if="item.platform == 2":class="wap"></td>
                  <!-- <td :attr="item.platform">{{item.platform}}</td> -->
                   <!-- v-bind:class="{ 'class-a': isA, 'class-b': isB,'class-c':isC }" -->
                  <td>游戏</td>
                  <td>{{item.productId}}</td>
                  <td>{{item.clickNoRepetition}}</td>
                  <td>{{item.activeRate}}</td>
                  <td> {{item.natureActive}}</td>
                  <td>{{item.amountActive}}</td>
                  <td><button type="button" class="btn btn-default bt-md" @click="Edit(item)">修改</button>  
                   <button type="button" class="btn btn-default bt-md" @click="deleteId(xh,item.productId)">删除</button></td> 
                </tr>
              </tbody>
            </table>
            <div class="EditMo" style="display:none;">
                        <!-- <td><input type="text" class="form-control">游戏名称</td> -->
                        <td><input type="text" class="form-control" v-model="rowtemplate.productName" /></td>
                        <td><input type="text" class="form-control" v-model="rowtemplate.productId" disabled="disabled" /></td>
                        <td><input type="text" class="form-control" v-model="rowtemplate.platform" style="display:none;"></td>
                        <td><button type="button" class="btn btn-primary" v-on:click="Save">保存</button></td>
            </div>
          </div>
        </main>
     </div>
     <!-- shadow -->
     <div class="shadow_pop"  style="display:none;"></div>

     <!-- /tanchukuang -->
       <div class="modal fade" id="mymodal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">提示</h4>
            </div>
            <div class="modal-body">
              <p>确定要删除 '{{removegood}}' 吗？</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteId(xh,item.productId)">确定</button>
            </div>
          </div>
         
        </div>
      
      </div>
</div>
</template> 
<script>
   // var serverFront="http://188.188.0.116:8080/dataservice/";
	export default{
		data(){
			return{
             listData: '',
             value:0,
             isB:0,
             isA:0,
             isC:0,
             removegood:'',         //要删除的物品
             rowtemplate:[],
             isshow:false,
             isshadow:false,
             productName:'',
             pathfromVal:'',
             and:'class-a',
             ios:'class-b',
             wap:'class-c'
			}
		},
    created: function() {
      this.getUser();
      this.initData();
      this.getImg();

    },
		methods:{
            getImg:function(){

            },
            eventAdd:function(id,pat){
             this.$router.push({
                            path: '/Home',
                            query: {
                               productId:id,
                               platform:pat
                            }
                        })
            // this.$router.push({  
            //   name:'Home',
            //   params:{
            //   }
            // })
            },
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
                },
                success:function(res) {
                   var data= JSON.parse(res);
                	 _self.listData=data.rows;
                   debugger
                   _self.getPathfrom(data)
                    // _self.listData = JSON.stringify(data.posts);
                    // console.log(_self.listData)  
                }
            });
		 },
        getUser:function(){
          var self = this;
          self.value = sessionStorage.getItem("key"); 
        },
        getPathfrom:function(data){
        for(var i=0;i < data.rows.length;i++){
            var pathfromVal = data.rows[i].platform;
            if(pathfromVal==0){
              this.isA=1;
            }
            else if(pathfromVal == 1){
              this.isB=1;

            }else if(pathfromVal == 2){
              this.isC=1;
            }
        }
      
        },
        exitSys:function(){
           var _self = this;
           var kys = sessionStorage.getItem("key"); 
            $.ajax({
                type: 'GET', 
                url: serverFront + "loginOut",
                data:{
                  "registEmail": sessionStorage.getItem("key")
                },
                success:function(res) {
                  debugger
                    var status=JSON.parse(res);
                   if(status.success==0){
                     // var status=JSON.parse(res);
                     // sessionStorage.removeItem("key"); 
                   alert(status.msg);
                   _self.$router.push({ path: '/' })

                     }
                   // _self.listData=data.rows;
                   // _self.getPathfrom(data)
                    // _self.listData = JSON.stringify(data.posts);
                    // console.log(_self.listData)
                }
            });
        },
        deleteId:function(id,productId){
           var _self = this;
           debugger
           _self.nowIndex = id;
            if(id >= 0){
              _self.removegood = _self.listData[id].productName;
            }
            _self.name='您确定要删除：'+_self.removegood;
            // $("#mymodal").modal("show");  
                    // $('#mymodal').addClass('in');
            var con;
            con=confirm(_self.name); //在页面上弹出对话框
            console.log(con)
            if(con==true){
              $.ajax({
                type: 'GET', 
                url: serverFront + "prodctDelete", 
                data:{
                  "productId":productId 
                   // "productName":'ios',
                },
                success:function(res) {
                  // debugger
                   var data= JSON.parse(res);
                   if(data.success==1){
                    alert(data.msg);
                   }else if(data.success==0){
                    console.log('success');
                    _self.initData();
                   }
                }
            });
            }
           if(con=false) {console.log(不删除操作);}
          
        },
          Edit: function (ssss) {
            debugger
                this.rowtemplate = ssss;
                $('.EditMo,.shadow_pop').show();
                // $(".EditMo,.")
                // this.isshow=true;
                // this.isshadow=true;
            },
           Save: function (event) {
                if (this.rowtemplate.productId) {
                    //设置当前新增行的Id ,把数据加到数据库。
                    debugger
                     var _self = this;
                     var data = {};
                      data.productName =_self.rowtemplate.productName;
                      data.productId = _self.rowtemplate.productId;
                      data.platform = _self.rowtemplate.platform;
                      console.log(_self.platform)
                         $.ajax({
                          type: 'GET', 
                          url: serverFront + "prodctUpdate", 
                          data:data,
                          success:function(res) {
                             var status= JSON.parse(res);
                             if(status.success !=0){
                              alert(status.msg);
                             }else if(status.success==0){
                               $('.EditMo,.shadow_pop').hide();

                              // this.isshow = false;
                              // this.isshadow = false;
                              // _self.initData();
                             }
                    // _self.listData = JSON.stringify(data.posts);
                    // console.log(_self.listData)
                            }
                        });
                    // this.rowtemplate.Id = this.item.length + 1;
                    // this.item.push(this.rowtemplate);
                }
                //还原模板
                // this.rowtemplate = [];
            },

		},
	 
	}
</script>
<style>
  
</style> 
