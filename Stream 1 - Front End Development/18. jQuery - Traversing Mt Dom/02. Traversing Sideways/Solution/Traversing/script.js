$(document).ready(function() {
 
	$("#button1").on("click", function() {
		$(this).next().slideToggle('slow');
	});
}); 