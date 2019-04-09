class List{
				constructor(options){
//					1.请求参数
                    this.cont=options.cont;
                    this.url=options.url;
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
				var str1="";
				for(var i=0;i<this.res.length;i++){
					if(i<=4){
						str+=`<li index="${this.res[i].goodsId}"><a href="detailspage.html" target="_blank">
							<img src="${this.res[i].src}" />
							<div class="goods-msg">
								<p class="goods-msg-t">${this.res[i].name}</p>
								<p class="goods-msg-c">${this.res[i].name1}</p>
								<p class="goods-msg-b">${this.res[i].price}</p>
						</div>
					</a></li>`; 	
					this.cont[0].innerHTML=str;		
					}					
					if(i>4){
						str1+=`<li index="${this.res[i].goodsId}"><a href="detailspage.html" target="_blank">
							<img src="${this.res[i].src}" />
							<div class="goods-msg">
								<p class="goods-msg-t">${this.res[i].name}</p>
								<p class="goods-msg-c">${this.res[i].name1}</p>
								<p class="goods-msg-b">${this.res[i].price}</p>
						</div>
					</a></li>`; 
					this.cont[1].innerHTML=str1;
					}
				}
//				console.log(this.cont[1].childNodes[2].getAttribute("index"))
			}
		}	
new List({
			cont:document.querySelectorAll(".goods"),
			url:"json/star.json"
			});