require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"floor":"floor",
		"login":"login",
		"reg":"reg",
		"godetail":"godetail",
		"ss":"ss"
	}
})

require(["jq","floor","login","reg","godetail","ss"],function(_,floor,login,reg,godetail,ss){	
	//楼层
	var n = new floor.myfloor();	
	//登录
	var l = new login.mylogin();
	//注册
	var r = new reg.myreg();
	//详情页跳转
	var g= new godetail.mygodetail();
	//二级导航
	var s = new ss.myss();

})
