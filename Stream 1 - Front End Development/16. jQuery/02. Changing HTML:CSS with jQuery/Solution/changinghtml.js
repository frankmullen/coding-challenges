//Challenge A 
//Change text of all p elements at the same time
$("p").text("You have been hacked!");

//Challenge B
//Append a paragraph to every paragraph already on the page
$("p").append("<p>This is the end my friend</p>");

//Remove all links from the page
$("a").empty();

//Empty all cards
$(".card").empty();

//Challenge C
//Eir.ie
//Load jQuery
var script = document.createElement('script');
script.src = "//code.jquery.com/jquery-latest.min.js";
document.head.appendChild(script);

//Find out the font family used for the paragraphs
$("p").css("font-family");

//Find out the font family use for <h1>s
$("h1").css("font-family");

//Change the text of each <h2> to your name
$("h2").text("Frank Mullen");

//Wikipedia
//Get the background color
$("body").css("background-color");

//Change the background color
$("body").css("background-color", "black");

//Change font-family for paragpraph
$("p").css("font-family", "Times New Roman")
