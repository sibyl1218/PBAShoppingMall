require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"floor":"floor",
		"login":"login",
		"reg":"reg",
		"godetail":"godetail",
//		"detailpageshow":"detailpageshow"
	}
})

require(["jq","floor","login","reg","godetail"],function(_,floor,login,reg,godetail){	
	//楼层
	var n = new floor.myfloor();	
	//登录
	var l = new login.mylogin();
	//注册
	var r = new reg.myreg();
	//详情页跳转
	var g= new godetail.mygodetail();
	//详情页渲染
//	var d = new detailpageshow.mydepage();

})
