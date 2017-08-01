$(document).ready(function(){
	//console.log(12);
	var menu=$("#menu");
	console.log(menu.scrollTop());
	menu.scroll(function(){
		console.log($(this).scrollTop());
	if($(this).scrollTop > 200){
		menu.addClass("fix");
		
	}
	else{
		menu.removeClass("fix");
	}
	});
});
