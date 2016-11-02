$(document).ready(function() {
    
    /*
    //Challenge A
    //Hide Button 1
    $("#button1").click(function() {
        $("#button1").hide(2000);
    });
    */
    
    //Challenge B
    //Hide paragraph above button
    $("#button1").click(function() {
        $("#card1 p").toggle();
    });

    //Challenge C
    //As above, but use slideToggle
    $("#button2").click(function() {
        $("#card2 p").toggle();
    });

    //Challenge D
    //Fade to 50% opacity and back to 100%
    $("#button3").mouseenter(function(){ 
        $("#button3").fadeTo(1000, 0.5);
    });
 
    $("#button3").mouseleave(function(){ 
        $("#button3").fadeTo(1000, 1);
    });


});

