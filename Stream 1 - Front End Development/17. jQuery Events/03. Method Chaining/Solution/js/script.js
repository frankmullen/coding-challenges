$(document).ready(function() {
 
	$(".bottom_button").addClass("makeRed");

	$(".bottom_button").mouseenter(function() {
		$(".bottom_button").removeClass("makeRed").addClass("makeBorder");
	});

	$(".bottom_button").mouseleave(function() {
		$(".bottom_button").addClass("makeRed").removeClass("makeBorder");
	});
/*
	$(".bottom_button").click(function() {
		$("p").slideToggle(2000);
	}); 
	*/

/*
	$(".bottom_button").click(function() {
		$("p").toggle(2000);
	});
	*/

	$(".bottom_button").click(function() {
		$("p").fadeToggle(2000);
	});
 	
}); 

