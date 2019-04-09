//跳转详情页   
define(function(){
	class Godetail{
		constructor(){
			this.init();
		}
		init(){
			var that=this;
			$(".goods").on("click","li",function(event){
                 var target=$(event.target).parents("li");
                 that.id=target.attr("index");
//               console.log(this.id);  
                 that.setCookie();                
			});
		}
		setCookie(){
//				因为要使用一条cookie存商品,所以数据选择数组里面放对象[{},{}]
                this.goods=getCookie("goods");
                console.log(this.goods)
                	this.goods=[{
                		id:this.id,
                	}];

//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
                setCookie("goods",JSON.stringify(this.goods));
			}
}
	return {
		mygodetail:Godetail,
	};
})