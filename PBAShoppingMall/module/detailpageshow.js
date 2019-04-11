define(function(){

  class Depage{
				constructor(){
//					1.解析参数
					this.url="json/star.json";
					this.num=1;
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
                    this.display();
                    this.magn();
				}
				display(){
					var str="";
//					比对cookie和总数据
					for(var i=0;i<this.res.length;i++){
	                    	if(this.res[i].goodsId==this.goods[this.goods.length-1].id){
	                    		str+=`
									<div class="section-l">
									<img src="${this.res[i].src1}" />
									<span class="spn"></span>
									<p></p>
									</div>
									<div class="b_box">
											<img src="${this.res[i].src1}" />
										</div>
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
					this.addEvent();
				}
				magn(){
					var that=this;
					$(".section-l").mouseover(function(){
						$(".spn").show();
						$(".b_box").show();	
						$(".section-l").mousemove(function(eve){
								var e=eve||window.event;
								that.spanMove(e);
						});	
					});
					$(".section-l").mouseout(function(){
						$(".spn").hide();
						$(".b_box").hide();
					});			
				}
				spanMove(e){
					this.l=e.offsetX-$(".spn")[0].offsetWidth/2;
			    this.t=e.offsetY-$(".spn")[0].offsetHeight/2;
//			    console.log(this.l,this.t);
				//边界限定
				if(this.l<0) this.l=0;
				if(this.t<0) this.t=0;
				if(this.l>$(".section-l")[0].offsetWidth-$("span")[0].offsetWidth) 
						this.l=$(".section-l")[0].offsetWidth-$("span")[0].offsetWidth;
				if(this.t>$(".section-l")[0].offsetHeight-$("span")[0].offsetHeight) 
						this.t=$(".section-l")[0].offsetHeight-$("span")[0].offsetHeight;
				//span的移动
				$(".spn").css("left",this.l);
				$(".spn").css("top",this.t);
                console.log(this.l);
				//比例
				this.x=this.l/($(".section-l")[0].offsetWidth-$(".spn")[0].offsetWidth);
				this.y=this.t/($(".section-l")[0].offsetHeight-$(".spn")[0].offsetHeight);
				//根据大图移动
				this.move();		
				}
				move(){
					$(".b_box").children("img").css("left",-($(".b_box").children("img")[0].offsetWidth-$(".b_box")[0].offsetWidth)*this.x);
					$(".b_box").children("img").css("top",-($(".b_box").children("img")[0].offsetHeight-$(".b_box")[0].offsetHeight)*this.y);
				}
				addEvent(){
					var that=this;	
		    		$("b").on("click",function(event){
		    			if($(event.target).attr("class")=="minus"){
						 $(".num").val($(".num").val()-1);	
						 that.num=$(".num").val();
		    			}
		    			if($(event.target).attr("class")=="plus"){
		    			 $(".num").val($(".num").val()-0+1);
		    			 that.num=$(".num").val();
		    			}		    			
		    		});
		    		$(".add").click(function(){
					     that.id=that.goods[that.goods.length-1].id;
                         that.setCookie(that.num);
				});
    	}
		setCookie(num){
//				因为要使用一条cookie存商品,所以数据选择数组里面放对象[{},{}]
                this.goods2=getCookie("goods2");
                   if(this.goods2==""){
	                	this.goods2=[{
	                		id:this.id,
	                		num:num
	                	}];                           	
                   }else{
                   	this.goods2=JSON.parse(this.goods2);
                   	var onOff=1;
                    this.goods2.forEach((v)=>{
                    	if(v.id==this.id){
                   		var a=parseInt(v.num);
                    		a+=parseInt(this.num);
                    		v.num=a;
                    		onOff=0;
                    	}
                    });                   
                   }
                   if(onOff){
                   		this.goods2.push({
							id:this.id,
							num:num
						});
                   }
//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
                setCookie("goods2",JSON.stringify(this.goods2));
			}	
			}
return {
	mydepage:Depage
}
})