define(function(){
	class Login{
				constructor(){
					//接口
         		this.url="http://www.icodeilife.cn/ctrl/login.php";
         		//绑定事件
         		this.init();
				}
				init(){
					var that=this;
					$("#logbtn").click(function(){
						that.load();
					});
				}
				load(){
					var that=this;
					$.ajax({
						url:this.url,
						data:{
							user:$(".user").val(),
							pass:$(".pass").val()
						},
						success:function(res){
							switch(res){
								case "0":$("span").html("用户名密码不符");break;
								case "1":$("span").html("重新登录");break;
//								因为接口问题,返回json数据时表示成功,json数据不好判断,所以,直接使用default判断								
								default:
								        $("span").html("登录成功，得到自己的用户数据");
								        that.res=JSON.parse(res);
								        console.log(that.res);
								        setTimeout(()=>{
		         						location.href="index.html";
		         					},3000);
							}
						}					
					});
				}
				
			}
	return {
		mylogin:Login
	};
})

     