$(function(){
	$("#fullpage").fullpage({
		anchors:["page1","page2","page3","page4"],
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:["首页","技能","介绍","作品"],
		afterLoad:function(anchorLink,index){
				switch(index){
					case 1:
						$(".intro-txt").animate({top:"220px",opacity:1},1500);
					break;
					case 2:
						$(".parts-ball1").animate({bottom:"20%"},1000);
						$(".parts-ball2").animate({top:"32%"},1000);
						$(".detail-list").animate({opacity:1},1000);
						$(".detail-para1").animate({top:"25px",opacity:1},800,function(){
							$(".detail-para2").animate({top:"75px",opacity:1},800,function(){
								$(".detail-para3").animate({top:"125px",opacity:1},800,function(){
									$(".detail-para4").animate({top:"175px",opacity:1},800);
								})
							})
						});
						$(".section2-con>hr").css("animation","hmove 2s ease-in-out forwards");
						
					break;
					case 3:
						$(".parts-star1").animate({top:"60%",opacity:"1"},700);
						$(".parts-star2").animate({top:"19%",opacity:"1"},700);
						$(".parts-star3").animate({top:"50%",opacity:"1"},700);
						$(".section3-con li img").animate({
							width:"87px",
							height:"100px",
							opacity:"1"
						},1000);
						$(".section3-con>hr").css("animation","hmove 2s ease-in-out forwards");	
					break;
					default:
						// $(".parts-birds1").css("animation","birds 1s ease-in-out forwards");
						// $(".parts-birds2").css("animation","birds 1s ease-in-out forwards");
						// $(".parts-birds1").animate({
						// 	width:"458px",
						// 	height:"331px"
						// },1000);
						// $(".section4-con>hr").css("animation","hmove 2s ease-in-out forwards");
						// $(".section4-list img").css("animation","picMove 1s ease-in-out forwards");							

					break;
				}
			
		},
		onLeave:function(index,nextIndex,direction){
				switch(index){
					case 1:
						$(".intro-txt").animate({top:"280px",opacity:0},200);
					break;
					case 2:
						$(".parts-ball2").animate({top:"-100px"},1000);
					break;						
		}

	}
});
	// $(".nav-list a").click(function(){
	// 	$(this).addClass("active").parent().siblings().find("a").removeClass("active");
	// })

	//第四屏鼠标移入移出列表效果
	var $anno=$(".annotation");
	var $aList=$(".section4-list>a");
	var $aImg=$(".list-wrap img");
	$anno.hide();
	$aList.hover(function(){
		var index=$aList.index(this);
		$anno.eq(index).stop(false,false).fadeIn(300);
		$aImg.eq(index).stop(false,false).animate({opacity:0.7},300);
	},function(){
		var index=$aList.index(this);
		$anno.eq(index).stop(false,false).fadeOut(300);
		$aImg.eq(index).stop(false,false).animate({opacity:1},300);
	});


	//第四屏二维码效果
	var x=5;
	var y=5;
	$aList.eq(1).hover(function(e){
		$oDiv=$('<div class="tooltip"><img src="http://i4.buimg.com/e972c3255d83fa37.png" alt="tooltip" style="width:160px"><p style="color:#000">移动端手机相册</p></div>');
		$(".section4").append($oDiv);
		$(".tooltip").css({
			"left":x+e.pageX+"px",
			"top":y+e.pageY+"px"
		})
	},function(){
		$(".tooltip").remove();
	}).mousemove(function(e){
		$(".tooltip").css({
			"left":x+e.pageX+"px",
			"top":y+e.pageY+"px"		
		})
	});
})
