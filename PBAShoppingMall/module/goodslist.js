define(function(){
	class List{
					constructor(){
	//					1.请求参数                   
	                    this.url="json/star.json";
	//                  2.请求数据
						this.load();
					}
				//初始化页面，不需要发送数据，直接开启ajax请求成功的数据
				load(){
					$.ajax({
						url:this.url,
						success:(res)=>{
							this.res=res;
							this.display();
						}
					});
				}
				display(){
					var str="";
					for(var i=0;i<this.res.length/2;i++){
						str+=`<li index="${this.res[i].goodsId}"><a href="detailspage.html" target="_blank">
								<img src="${this.res[i].src}" />
								<div class="goods-msg">
									<p class="goods-msg-t">${this.res[i].name}</p>
									<p class="goods-msg-c">${this.res[i].name1}</p>
									<p class="goods-msg-b">${this.res[i].price}</p>
							</div>
						</a></li>`;
					}
					$("#cont").children("ul").html(str);
				}		
			}
	return {
		mylist:List
	}
 })