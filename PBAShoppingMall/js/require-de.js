//商品详情页的模块化
require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"cookie":"../libs/cookie",
		"detailpageshow":"detailpageshow"
	}
})

require(["jq","cookie","detailpageshow"],function(_,_,detailpageshow){	
	
	var de = new detailpageshow.mydepage();		

})