$(function(){
	var $oMore=$(".more");
	$oMore.hide();
	var $oFooter=$(".footer");
	$oFooter.hide();

	var $aImg=$(".pic img");
	var count=0;
	for(var i=0;i<$aImg.length;i++){
	var newImg=new Image();

	newImg.onload=function(){
		count++;
	if(count==$aImg.length){
	fallWater("main","box");
	}
	}
	newImg.src= $aImg.eq(i).attr("src");
	}

	var $oParent=$("#main");
	var dataInt={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"}]};
	var num=0;
	$(window).on("scroll",function(){
	if(scrollSlide() && num<3){
		$.each(dataInt.data,function(index,value){
			var $oBox=$('<div class="box"><div class="pic"><img src="img/pic/pb'+value.src+'" alt=""></div>');
			$oParent.append($oBox);

		});
	fallWater("main","box");
	num++;
	}
	if(num>=3){
		var $lastBox=$(".box:last");
		var lastT=$lastBox.position().top;
		lastT=lastT+$lastBox.innerHeight();
		$oMore.css({
			"left":"0",
			"top":lastT+20+"px"
		}).show();
		var moreT=$oMore.offset().top;
		moreT=moreT+$oMore.outerHeight();
		$oFooter.css({
			"left":"0",
			"top":moreT+20+"px"
		}).show();

	}
	});
	$oMore.click(function(){
		num=0;
		$oMore.hide();
		$oFooter.hide();
		$(window).scroll();
	})
})

function fallWater(parent,children){
	var $oParent=$("#"+parent);
	var $aBoxes=$("."+children);
	var boxW=$aBoxes.eq(0).innerWidth();
	var wrapW=$(".wrap").width();
	var cols=Math.floor(wrapW/boxW);
	$oParent.css({
		"width":boxW*cols+"px",
		"margin":"0 auto"
	});
	var hArr=[];
	$aBoxes.each(function(index,value){
		if(index<cols){
			hArr.push($(this).innerHeight());
		}else{
			var minH=Math.min.apply(null,hArr);


		if(!Array.indexOf)
		{
		    Array.prototype.indexOf = function(obj)
		    {              
		        for(var i=0; i<this.length; i++)
		        {
		            if(this[i]==obj)
		            {
		                return i;
		            }
		        }
		        return -1;
		    }
		}




			var index=hArr.indexOf(minH);
			$(value).css({
				"position":"absolute",
				"top":minH+"px",
				"left":$aBoxes.eq(index).position().left
			});
			hArr[index]=minH+$(this).innerHeight();
		}
	})

}

function scrollSlide(){
	var $oBox=$(".box:last");
	var boxT=$oBox.offset().top;
	boxT=boxT+Math.floor($oBox.innerHeight()/2);
	var winH=$(window).height()+$("html").scrollTop();
	return (winH>boxT)?true:false;
}


//回到顶部
$(function(){
		var $oDiv=$(".returntop");
		var CHeight=$(window).height();
		var beforeScrollTop=$("html").scrollTop();


	$(window).on("scroll",function(){
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

