define(function(){
	class Register{
         	constructor(){
         		//接口
         		this.url="http://www.icodeilife.cn/ctrl/register.php";
         		//绑定事件
         		this.init();
         	}
         	init(){
         		var that=this;
         		$("#regbtn").click(function(){
         			//触发事件开启ajax
         			that.load();
         		});
         	}
         	load(){
         		$.ajax({
         			url:this.url,
         			success:function(res){
         				switch(res){
         					case "0":$("span").html("用户名重复");break;
         					case "1":
		         					$("span").html("注册成功，3秒钟跳转到登录界面");
		         					    this.res=JSON.parse(res);
								        console.log(this.res);
								        console.log(this.url)
		         					setTimeout(()=>{
		         						location.href="login.html";
		         					},3000);
		         					break;
         					case "2":$("span").html("数据不全");break;
         					
         				}
         			},
//       			发送数据
                    data:{
                    	tel:$(".user").val(),
                    	pass:$(".pass").val()
                    }
         		});
         	}
         }
       return {
       	myreg:Register
       }
})

