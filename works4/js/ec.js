function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}




function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0";
	}
	if(!elem.style.top){
		elem.style.top="0";
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	var dist=0;
	if(xpos==final_x && ypos==final_y){
		return true;
	}
	if(xpos<final_x){
		dist=Math.ceil((final_x-xpos)/10);
		xpos+=dist;
	}
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}











function prepareSlideshow(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("bannernumber")) return false;
	var bannernum=document.getElementById("bannernumber");
	var links=bannernum.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[0].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",0,0,30);

		}
		links[1].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",-810,0,30);
		}
		links[2].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",-1620,0,30);
		}
		links[3].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",-2430,0,30);
		}
		links[4].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",-3240,0,30);
		}
		links[5].onmouseover=function(){
			for (var j = 0; j < links.length; j++) {
				links[j].className="";
			};
			this.className="active";
			moveElement("bannerImg",-4050,0,30);
		}
	};
}


addLoadEvent(prepareSlideshow);