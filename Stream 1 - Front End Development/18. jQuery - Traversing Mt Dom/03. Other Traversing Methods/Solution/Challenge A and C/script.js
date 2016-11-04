$(document).ready(function(){

	//Challenge A
/*
	//When a coloured panel is clicked, all panels vanish
	$(".theButton").on("click", function() {
		$(".theButton").hide();
	});
*/
/*
	//When a coloured panel is clicked, just that panel vanishes
	$(".theButton").on("click", function() {
		$(this).hide();
	});
*/

/*
	//When a panel is clicked, all siblings fade to 10% opacity
	$("#panel .container").on("click", function() {
		$(this).siblings().addClass("fade10");
	});

	//When reset is clicked, all panels revert to full opacity.
	$(".superButton").on("click", function() {
		$("#panel .container").removeClass("fade10");
	});

*/
/*
	//When the mouse hovers over a panel, that panel turns black 
	//(new CSS class would be helpful here )
	$(".theButton").mouseenter(function() {
		$(this).addClass("makeBlack");
	});

	$(".theButton").mouseleave(function() {
		$(this).removeClass("makeBlack");
	});
*/
	//Change the text in the reset button to display the colour 
	//(RGB) of the selected panel.
	$(".theButton").click(function() {
		var displayColor = $(this).css("background-color");
		$(".superButton").text(displayColor);
	});
	
});
