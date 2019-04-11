//购物车的模块化
require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"cookie":"../libs/cookie",
		"shopcar":"shopCar",
	}
})
require(["jq","cookie","shopcar"],function(_,_,shopcar){	
	var s = new shopcar.myshopcar({
				tbody:document.getElementById("tbody"),
				url:"json/star.json",
				sum:document.getElementById("sum"),
				prices:document.getElementById("prices")
		});		

})