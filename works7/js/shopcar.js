$(function(){
	var $trap=$("#trap");
	var $shade=$("#shade");
	var $cancel=$("#cancel");
	$trap.on('click',function(){
		$shade.show();
	});
	$cancel.on('click',function(){
		$shade.hide();
	})
})