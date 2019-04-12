//商品列表的模块化
require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"goodslist":"goodslist",
		"godetail":"godetail"
	}
})

require(["jq","goodslist","godetail"],function(_,goodslist,godetail){	
	
	var goods = new goodslist.mylist();
   //详情页跳转
	var g= new godetail.mygodetail();
})