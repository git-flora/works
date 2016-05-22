$(function(){
	//列表项
	var $aList=$(".shopcat-show>dl");
	$aList.hover(function(){
		$(this).addClass("cur");
		$(this).find(".shopcat-brand").css("display","block");
	},function(){
		$(this).removeClass("cur");
		$(this).find(".shopcat-brand").css("display","none");
	})
	//banner切换
	var $aBtn=$(".bannernum a");
	var index=0;
	var adTimer=null;
	$aBtn.mouseover(function(){
		index=$aBtn.index(this);
		showImg(index);

	}).eq(0).mouseover();
	$(".banner-big").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer=setInterval(function(){
			index++;
			if(index>=$aBtn.length){
				index=0;
			}
			showImg(index);
		},5000)
	}).mouseleave();
	$(".banner-rightBtn").click(function(){
		index++;
		if(index>=$aBtn.length){
			index=0;
		}
		showImg(index);
	})
	$(".banner-leftBtn").click(function(){
		index--;
		if(index<0){
			index=$aBtn.length-1;
		}
		showImg(index);
	})


	function showImg(index){
		var newhref=$aBtn.eq(index).attr("href");
		$(".banner-big>a:first").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$aBtn.eq(index).addClass("active").siblings().removeClass("active");
	}
})

$(function(){
	var $aLi=$(".hotsale-roll li");
	var $oUl=$(".hotsale-roll ul");
	var newWidth=$aLi.eq(0).outerWidth();
	newWidth=($oUl.find("li").length)*newWidth;
	$oUl.css("width",newWidth+"px");

})

$(function(){
	var $aLink=$(".hotsale-header a");
	var $oUl=$(".hotsale-roll ul");
	var $oBtn1=$(".roll-leftBtn");
	var $oBtn2=$(".roll-rightBtn");
	var index=0;
	$aLink.click(function(){
		index=$aLink.index(this);
		$(this).addClass("active").parent().siblings().find("a").removeClass("active");
		$oUl.eq(index).show()
					  .siblings().hide();
		$oBtn1.hide();
	var $curUl=$(".hotsale-roll ul:visible");
		if($curUl.find("li").length<=4){
			$oBtn2.hide();
		}else{
			$oBtn2.show();
		}
		$oUl.stop(true,true).css("left","0px");

	}).eq(0).click();
})

$(function(){
	var $oBtn1=$(".roll-leftBtn");
	var $oBtn2=$(".roll-rightBtn");
	var index=0;
	var page=4;
	$oBtn2.click(function(){
		$oBtn1.show();
		$oBtn2.show();
	var $oUl=$(".hotsale-roll ul:visible");
	var dis=$oUl.find("li").length-page;
	var newWidth=$oUl.find("li").eq(0).outerWidth();
	var targetDis=newWidth*-dis;
	if($oUl.position().left!==targetDis && !$oUl.is(":animated")){
		$oUl.animate({left:"-="+newWidth},300);
		if($oUl.position().left+(-newWidth)==targetDis){
			$oBtn2.hide();
		}
	}
	})

	$oBtn1.click(function(){
		$oBtn1.show();
		$oBtn2.show();
	var $oUl=$(".hotsale-roll ul:visible");
	var newWidth=$oUl.find("li").eq(0).outerWidth();
	if($oUl.position().left!==0 && !$oUl.is(":animated")){
		$oUl.stop(true,false).animate({left:"+="+newWidth},300);
		if($oUl.position().left+newWidth==0){
			$oBtn1.hide();
		}
	}
	})

})

//detail
$(function(){
	var $aInput=$(".selectnums-con input");
	var $price=$(".money strong");
	var price=parseInt($price.text());
	var reg=/^[0-9]+$/;
	var $oBtn1=$(".plus-left");
	var $oBtn2=$(".plus-right");
	$aInput.keyup(function(){
	var num=$aInput.val();
	console.log(reg.test(num));
		if(!reg.test(num)|| parseInt(num)<=0){
			num=1;
		}
			num=parseInt(num);
			var total=num*price;
			$(".shopCar-total strong").text(total);

	})
	$oBtn2.click(function(){
	var num=$aInput.val();
	// console.log(reg.test(num));
	if(reg.test(num) && parseInt(num)>=1){
		num=parseInt(num);
		num++;
		$aInput.val(num);
		$aInput.keyup();
	}		
	})
	$oBtn1.click(function(){
	var num=$aInput.val();
	if(reg.test(num) && parseInt(num)>1){
		num=parseInt(num);
		num--;
		$aInput.val(num);
		$aInput.keyup();
	}		
	})

})

//switchImg
$(function(){
	var $aImg=$(".detail-smImg img");
	var $oImg=$(".detail-bigImg img");
	var $oLink=$(".detail-bigImg a")
	$aImg.click(function(){
		$aImg.each(function(){
			$(this).removeClass("active");
		})
		console.log("a");
		$(this).addClass("active");
		var imgSrc=$(this).attr("src");
		var i=imgSrc.lastIndexOf(".");
		imgSrc=imgSrc.substring(0,i);
		var imgSmall=imgSrc+"_small.jpg";
		var imgBig=imgSrc+"_big.jpg";
		$oImg.attr("src",imgSmall);
		$oLink.attr("href",imgBig);
	})
})


//switchColor
$(function(){
	var $aSpan=$(".selectcolor span");
	var $oEm=$(".selected-type em");
	$aSpan.click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var spanId=$(this).attr("id");
		$(".detail-smImg").hide();
		$("."+spanId).show();
		$("."+spanId).find("img").eq(0).click();
		var txt=$(this).text();
		$oEm.text(txt);
	})

})



//回到顶部
$(function(){
		var $oDiv=$(".returntop");
		var CHeight=$(window).height();
		var beforeScrollTop=$("html").scrollTop();


	$(window).scroll(function(){
		var afterScrollTop=$("html").scrollTop();
		var delta=beforeScrollTop-afterScrollTop;
		if($("html").scrollTop()>CHeight && delta<0){
			$oDiv.animate({bottom:"200px"},800);
			// $oDiv.css("bottom","200px");	
		}
		if($("html").scrollTop()==0){
			beforeScrollTop=$("html").scrollTop();			
		}
		if($("html").scrollTop()<CHeight && delta<0){
			$oDiv.stop(true,true).css("bottom","-100px");	
		}
	})
	$oDiv.click(function(){
		beforeScrollTop=$("html").scrollTop();
		$("html").animate({scrollTop:"0"},500);
		$oDiv.stop(true,true).animate({bottom:CHeight+30+"px"},800,function(){
			$oDiv.css("bottom","-100px");
		});
	})
})
