var body = d3.select("body");
body.append("p").text("I love Data");

var myDiv = d3.select("div");
myDiv.append("p").text("paragraph inside the div");

myDiv.attr("style", "background-color:#ddd; border:4px solid black; text-align:center");
myDiv.classed("smallBox", true);
myDiv.classed("smallBox", false);
myDiv.attr("style", "");
myDiv.remove();