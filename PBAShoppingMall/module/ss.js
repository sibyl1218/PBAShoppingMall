//二级导航
define(function(){
	class Ss{
				constructor(){
//					1.解析参数
					this.url="json/star1.json";
//					2.请求数据
                    this.load();	                    
				}
				load(){					
					$.ajax({
						url:this.url,
						success:(res)=>{
							this.res=res;
                            this.addEvent(this.res);
						}
					});
				}
				addEvent(res){
					var that=this;		
					$(".banner-t-l").on("mousemove","li",function(event){	
							$(".secondnav").css("display","block");	
							$(".secondnav").on("mouseenter",function(){
								$(".secondnav").css("display","block");
					         });
					        $(".secondnav").on("mouseleave",function(){
								$(".secondnav").css("display","none");
					         });
							for(var k=0;k<res.length;k++){
								for(var j in res[k]){
									if($(event.target).attr("class")==j){
										that.display(res,j,k);
									}
								}								
							}
					});
					$(".banner-t-l").on("mouseout",function(){
							$(".secondnav").css("display","none");	
						});					
				}
				display(res,j,k){
					var str="";               				
					for(var i=0;i<5;i++){
						str+=`
						 <li><a href="goodslist.html">
								<img src="${res[k][j][i].src}" />
								<span>${res[k][j][i].name}</span>
						</a></li>
						`;						
					}
					$(".secondnav").children("ul").html(str);
				}
			}	
		return {
			myss:Ss
		}
})