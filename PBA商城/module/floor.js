//楼层   
define(function(){
	class Floor{
		constructor(){		
			this.init();
		}
		init(){
			$(".ul-floor").children("li").click(function(){
		    var index=$(this).index()+1;
		    var t=$(".floor"+index).offset().top;
		    $("html").animate({scrollTop:t});
		    });
		}	
}
	return {
		myfloor:Floor
	};
})