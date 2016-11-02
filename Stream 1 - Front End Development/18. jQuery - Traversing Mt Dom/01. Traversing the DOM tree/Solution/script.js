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
 	

 	/*$(".stream_nav#button1").on("click", function() {
 		$(".stream1").css("background-color")
 	}*/
}); 

