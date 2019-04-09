//define(function(){
//	class Depage{
//				constructor(){
////					1.解析参数
//					this.url="json/star.json";					
////					2.请求数据
//                  this.load();					
//				}
//				load(){
//					$.ajax({
//						url:this.url,
//						success:(res)=>{
//							this.res=res;
////							获取cookie
//							this.getCookie();
//						}
//					});
//				}
//				getCookie(){
////					获取cookie,渲染页面
//                  this.goods=JSON.parse(getCookie("goods"));
////                  console.log(this.goods[this.goods.length-1].id);
//                  this.display();
//				}
//				display(){
//					var str="";
////					比对cookie和总数据
//					for(var i=0;i<this.res.length;i++){
//	                    	if(this.res[i].goodsId==this.goods[this.goods.length-1].id){
////	                    		console.log(1)
//	                    		str+=`
//									<img src="${this.res[i].src1}" class="section-l"/>
//									<div class="section-r">
//										<div class="goods-name">
//											<h1>${this.res[i].name}</h1>
//											<p>${this.res[i].name1}</p>
//										</div>
//										<span class="goods-price">${this.res[i].price}</span>
//										<div class="goods-num">
//											<label>数量：</label>
//											<p>
//											<b class="minus">-</b>
//											<input type="text" value="1" class="num" />
//											<b class="plus">+</b>
//											</p>
//										</div>
//										<em class="add">加入购物车</em>
//									</div>`;
//	                    	}	                    
//               }
//					$("section").html(str);
//				}
//			}
//	return {
//		mydepage:Depage
//	}
//})
class Depage{
				constructor(){
//					1.解析参数
					this.url="json/star.json";					
//					2.请求数据
                    this.load();					
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
                    this.goods=JSON.parse(getCookie("goods"));
//                  console.log(this.goods[this.goods.length-1].id);
                    this.display();
				}
				display(){
					var str="";
//					比对cookie和总数据
					for(var i=0;i<this.res.length;i++){
	                    	if(this.res[i].goodsId==this.goods[this.goods.length-1].id){
//	                    		console.log(1)
	                    		str+=`
									<img src="${this.res[i].src1}" class="section-l"/>
									<div class="section-r">
										<div class="goods-name">
											<h1>${this.res[i].name}</h1>
											<p>${this.res[i].name1}</p>
										</div>
										<span class="goods-price">${this.res[i].price}</span>
										<div class="goods-num">
											<label>数量：</label>
											<p>
											<b class="minus">-</b>
											<input type="text" value="1" class="num" />
											<b class="plus">+</b>
											</p>
										</div>
										<em class="add">加入购物车</em>
									</div>`;
	                    	}	                    
                 }
					$("section").html(str);
				}
			}

new Depage();
