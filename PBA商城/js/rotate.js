//轮播   
			$(".banner-t-r").banner({
					items:$(".banner-t-r .imgbox a"),  //必传项，表示要移动的图片
					btnL:$(".banner-t-r .btns #btnL"), //可选
					btnR:$(".banner-t-r .btns #btnR"), //可选
					isList:false,
					delayTime:3000,
					moveTime:10
					});