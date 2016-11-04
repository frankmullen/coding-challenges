$(document).ready(function(){

	//When a table header is clicked, the corresponding row should highlight
	//When another table header (on the row) is clicked, the corresponding row 
	//should highlight and all others should turn white.
	$("tr th").click(function() {
		$("tr th").siblings().removeClass("makeYellow");
		$(this).siblings().addClass("makeYellow");
	});

	

});