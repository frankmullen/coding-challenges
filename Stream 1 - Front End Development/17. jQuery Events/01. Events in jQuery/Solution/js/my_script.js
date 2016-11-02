$(document).ready(function() {
    
    //when p clicked, change color of all p tags to read
    $("p").click(function() {
    	$("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass("h2_color");   
    });

    $("#h_html").hover(function() {
    	$("#h_mysql").removeClass("h2fontsize");
    	$("#h_python").removeClass("h2fontsize");
    	$("#h_jquery").removeClass("h2fontsize");
    	$("#h_django").removeClass("h2fontsize");
    	$("#h_css").removeClass("h2fontsize");
    	$("#h_html").addClass("h2fontsize");
    });

    $("#h_mysql").hover(function() {
    	$("#h_mysql").addClass("h2fontsize");
    	$("#h_python").removeClass("h2fontsize");
    	$("#h_jquery").removeClass("h2fontsize");
    	$("#h_django").removeClass("h2fontsize");
    	$("#h_css").removeClass("h2fontsize");
    	$("#h_html").removeClass("h2fontsize");
    });

    $("#h_python").hover(function() {
    	$("#h_mysql").removeClass("h2fontsize");
    	$("#h_python").addClass("h2fontsize");
    	$("#h_jquery").removeClass("h2fontsize");
    	$("#h_django").removeClass("h2fontsize");
    	$("#h_css").removeClass("h2fontsize");
    	$("#h_html").removeClass("h2fontsize");
    });

    $("#h_jquery").hover(function() {
    	$("#h_mysql").removeClass("h2fontsize");
    	$("#h_python").removeClass("h2fontsize");
    	$("#h_jquery").addClass("h2fontsize");
    	$("#h_django").removeClass("h2fontsize");
    	$("#h_css").removeClass("h2fontsize");
    	$("#h_html").removeClass("h2fontsize");
    });

    $("#h_django").hover(function() {
    	$("#h_mysql").removeClass("h2fontsize");
    	$("#h_python").removeClass("h2fontsize");
    	$("#h_jquery").removeClass("h2fontsize");
    	$("#h_django").addClass("h2fontsize");
    	$("#h_css").removeClass("h2fontsize");
    	$("#h_html").removeClass("h2fontsize");
    });

    $("#h_css").hover(function() {
    	$("#h_mysql").removeClass("h2fontsize");
    	$("#h_python").removeClass("h2fontsize");
    	$("#h_jquery").removeClass("h2fontsize");
    	$("#h_django").removeClass("h2fontsize");
    	$("#h_css").addClass("h2fontsize");
    	$("#h_html").removeClass("h2fontsize");
    });

    $(".bottom_button").mouseenter(function(){ 
    	$("body").addClass("bodyback");
 	});
 
	$(".bottom_button").mouseleave(function(){ 
	 	$("body").removeClass("bodyback");
 	});

});

