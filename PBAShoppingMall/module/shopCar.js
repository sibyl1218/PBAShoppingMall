 define(function(){	
    class ShopCar{
				constructor(options){
//					1.解析参数
					this.tbody=options.tbody;
					this.url=options.url;
					this.sum=options.sum;
					this.prices=options.prices;					
//					2.请求数据
                    this.load();
//                  3.绑定事件
                    this.addEvent();
                    
				}
				load(){
					$.ajax({
						url:this.url,
						success:(res)=>{
							this.res=res;
//							获取cookie
							this.getCookie();
						}
					});
				}
				getCookie(){
//					获取cookie,渲染页面
                    this.goods2=JSON.parse(getCookie("goods2"));
                    this.display();
                    this.check();
                    this.getSum();
				}
				display(){
					var str="";
//					比对cookie和总数据
					for(var i=0;i<this.res.length;i++){
	                    for(var j=0;j<this.goods2.length;j++){
	                    	if(this.res[i].goodsId==this.goods2[j].id){
	                    		str+=`<tr>
										<td><input type="checkbox" name="" id="" value="" /></td>
										<td><img src="${this.res[i].src}"/></td>
										<td>${this.res[i].name}</td>
										<td>${this.res[i].price}</td>
										<td><input type="number" value="${this.goods2[j].num}"></td>
										<td><em data-index="${this.res[i].goodsId}">删除</em></td>
									</tr>`;
	                    	}
	                    }
                   }
					this.tbody.innerHTML=str;
				}
				getSum(){
					var sum=0;
					var count=0;
					for(var i=0;i<this.goods2.length;i++){	
						sum+=parseInt(this.goods2[i].num);
						this.sum.innerHTML=sum;
						for(var j=0;j<this.res.length;j++){
							if(this.res[j].goodsId==this.goods2[i].id){
								var pri=this.res[j].price.slice(1);
								count+=parseFloat(pri)*parseInt(this.goods2[i].num);								
							}
							this.prices.innerHTML=count;
							
						}						
					}
					
				}
				addEvent(){
					this.tbody.addEventListener("click",(eve)=>{
						var e=eve||window.event;
						if(e.target.nodeName=="EM"){
//							找到点击商品的货号
							this.id=e.target.getAttribute("data-index");
//							删除dom元素
							e.target.parentNode.parentNode.remove();
//                          6.遍历cookie,找到符合条件的数据删除 
							var that=this;
							this.changeCookie(function(index){
//								8.删除并再次设置回去
 								that.goods2.splice(index,1);
							});
							
						}
					});
					this.tbody.addEventListener("input",(eve)=>{
						var e=eve||window.event;
						if(e.target.type=="number"){
//						10.先获取修改之后的数量,再获取当前商品的id
							this.value=e.target.value;
							this.id=e.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
//						11.遍历cookie,找到符合条件的数据,做修改
							var that=this;                           
							this.changeCookie(function(index){
								that.goods2[index].num=that.value;
							});						
						}
					});
				}
				changeCookie(callback){
//					7.找到符合条件的数据
					for(var i=0;i<this.goods2.length;i++){
						if(this.goods2[i].id==this.id)   break;
					}
					callback(i);
					//9.再设置回去
					setCookie("goods2",JSON.stringify(this.goods2));
				}
				check(){
					$("tr").on("click","input",function(){
						if($(event.target).prop("checked")==true){
							console.log(1);
						}
						
					})
				}
			}
       return {
       	myshopcar:ShopCar
       }
 });