$(function(){
	var $shareout=$('#share-out');
	var $shade=$('#shade');
	var $check=$("#check");
	var $btn=$("#btn");
	var $result=$("#result");
	var $newBtn=$("#newBtn");
	var $message=$("#message");
	var $submit=$("#submit");
	var $code=$("#code");
	var $newBack=$("#newBack");
	$('#share').on('click',function(){
		$shade.show();
		$shareout.show();
	});

	$shade.on('click',function(){
		$shade.hide();
		$shareout.hide();
		$result.hide();		
	});

	$btn.on('click',function(){
		$shade.show();
		$result.show();		
	});


	$newBtn.on('click',function(e){
		$result.hide();
		$message.show();
		e.stopPropagation();

	});

	$submit.on('click',function(e){
		$message.hide();
		$code.show();
		e.stopPropagation();
	});
	$newBack.on('click',function(e){
		$shade.hide();
		$code.hide();
	})



})