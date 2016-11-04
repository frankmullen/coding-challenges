$(document).ready(function() {
 
	$(".stream_nav").on("click", function() {

		var streamName = $(this).attr("id");

		if ($("." + streamName).css("background-color") == "rgb(235, 82, 85)") {
			$("." + streamName).css("background-color", "#fff"); 
		} else {
			$(".card").css("background-color", "#fff");
			$("." + streamName).css("background-color", "rgb(235, 82, 85)");
		}
	});

	$("p").on("click", function() {
		$(this).children("a").css("background-color", "yellow");
	});

	$("img").on("click", function() {
		$(this).next().children('p').slideDown();
		
	});

	$(".card").on("click", function() {
		$(this).toggleClass("addPink");
	});
 	
 	$("#navSelect").on("click", function() {
		$(".card:not(.addPink)").hide();
 	});

 	$("#navAll").on("click", function() {
 		$(".card").show();
 	})

 	
}); 

