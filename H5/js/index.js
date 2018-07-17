(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/500;
ss=250*(1-s);

$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);


$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 11) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}	
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
})

$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row ==4 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}
	if (last.row ==4 && last.col==2) { now.row = last.row; now.col = 3; pageMove(towards.left);}
	if (last.row ==4 && last.col==3) { now.row = last.row; now.col = 4; pageMove(towards.left);}
	if (last.row ==4 && last.col==4) { now.row = last.row; now.col = 5; pageMove(towards.left);}
	if (last.row ==5 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}
	if (last.row ==6 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}
	if (last.row ==6 && last.col==2) { now.row = last.row; now.col = 3; pageMove(towards.left);}
	if (last.row ==6 && last.col==3) { now.row = last.row; now.col = 4; pageMove(towards.left);}
	if (last.row ==6 && last.col==4) { now.row = last.row; now.col = 5; pageMove(towards.left);}
	if (last.row ==6 && last.col==5) { now.row = last.row; now.col = 6; pageMove(towards.left);}
	if (last.row ==6 && last.col==6) { now.row = last.row; now.col = 7; pageMove(towards.left);}
	if (last.row ==6 && last.col==7) { now.row = last.row; now.col = 8; pageMove(towards.left);}

	// console.log(last.row,last.col);
	// if(last.row == 4 && last.col < 5) { console.log('yesssss'); now.row = last.row; now.col = (++last.col); pageMove(towards.left);}
})

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	// if (last.row>1 && last.row<5 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}
	if (last.row ==4 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}
	if (last.row ==4 && last.col==3) { now.row = last.row; now.col = 2; pageMove(towards.right);}
	if (last.row ==4 && last.col==4) { now.row = last.row; now.col = 3; pageMove(towards.right);}
	if (last.row ==4 && last.col==5) { now.row = last.row; now.col = 4; pageMove(towards.right);}
	if (last.row ==5 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}
	if (last.row ==6 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}
	if (last.row ==6 && last.col==3) { now.row = last.row; now.col = 2; pageMove(towards.right);}
	if (last.row ==6 && last.col==4) { now.row = last.row; now.col = 3; pageMove(towards.right);}
	if (last.row ==6 && last.col==5) { now.row = last.row; now.col = 4; pageMove(towards.right);}
	if (last.row ==6 && last.col==6) { now.row = last.row; now.col = 5; pageMove(towards.right);}
	if (last.row ==6 && last.col==7) { now.row = last.row; now.col = 6; pageMove(towards.right);}
	if (last.row ==6 && last.col==8) { now.row = last.row; now.col = 7; pageMove(towards.right);}	
})

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		$(lastPage).find(".round").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		$(nowPage).find(".round").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();