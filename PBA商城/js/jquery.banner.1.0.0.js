;(function($){
	"use strict"
	$.fn.extend({
		banner:function(options){
		this.LOCAL={
			list:options.list?options.list:false,
			delaytime:options.delaytime?options.delaytime:2000,
			movetime:options.movetime?options.movetime:1000,
			index:0,
			prev:options.items.length-1
		}
		if(options.autoPlay||options.autoPlay===undefined){
			options.autoPlay=true;
		}else{
			options.autoPlay=false;
		}
		var that=this;
		this.LOCAL.rightbtn=function(){
				if(that.LOCAL.index==options.items.length-1){
					that.LOCAL.index=0;
					that.LOCAL.prev=options.items.length-1;
				}else{
					that.LOCAL.index++;
					that.LOCAL.prev=that.LOCAL.index-1;
				}
				//开始移动图片
				that.LOCAL.move(-1);
			}
		this.LOCAL.move=function(type){
				options.items.eq(that.LOCAL.prev).css({
					left:0
				}).stop().animate({
					left:options.items.eq(0).width()*type
				},that.LOCAL.movetime).end().eq(that.LOCAL.index).css({
					left:-options.items.eq(0).width()*type
				}).stop().animate({
					left:0
				},that.LOCAL.movetime)
			if(that.LOCAL.list){
				$(".list").children("span").eq(that.LOCAL.index).css({
					background:"red"
				}).siblings().css({
					background:""
				})
			   }
			}
		
		if(options.left!=undefined&&options.left.length>0&&options.right!=undefined&&options.right.length>0){
//			console.log(options.left.on("click",function(){}))
			options.left.on("click",function(){
			
				if(that.LOCAL.index==0){
					that.LOCAL.index=options.items.length-1;
					that.LOCAL.prev=0;
				}else{
					that.LOCAL.index--;
					that.LOCAL.prev=that.LOCAL.index+1;
				}
				//开始移动图片
				that.LOCAL.move(1);
			})
			options.right.on("click",this.LOCAL.rightbtn);
	
		}
		if(this.LOCAL.list){
			var str="";
			for(var i=0;i<options.items.length;i++){
				str+=`<span>${i+1}</span>`
			}
			this.append($("<div>").html(str).addClass("list"));
			$(".list").children("span").on("click",function(){
				if($(this).index()>that.LOCAL.index){
					//向左
					that.LOCAL.listMove(-1,$(this).index())
				}
				if($(this).index()<that.LOCAL.index){
					//向右
					that.LOCAL.listMove(1,$(this).index())
				}
			that.LOCAL.index=$(this).index();
			})
			this.LOCAL.listMove=function(type,iNow){
				options.items.eq(that.LOCAL.index).css({
					left:0
				}).stop().animate({
					left:options.items.eq(0).width()*type
				},that.LOCAL.movetime).end().eq(iNow).css({
					left:-options.items.eq(0).width()*type
				}).stop().animate({
					left:0
				},that.LOCAL.movetime)
			}
		}
		
		
		
		if(this.LOCAL.autoPlay){
			this.timer=setInterval(function(){
				options.left.on("click",that.LOCAL.rightbtn);
			},this.LOCAL.delaytime)
			
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.timer=setInterval(function(){
				options.left.on("click",that.LOCAL.rightbtn);
			},this.LOCAL.delaytime)
			})
		}
	}
})		
})(jQuery)
