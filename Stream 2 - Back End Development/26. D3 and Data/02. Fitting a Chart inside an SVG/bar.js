var svgWidth = 500;
var svgHeight = 300;
var spacing= 10;
var myData = [10, 15, 20, 30, 45, 50, 40, 45 ,50 , 40, 42, 35, 30, 25, 10, 15, 20, 30, 45, 50, 40, 45 ,50 , 40, 42, 35, 30, 25];

var svg = d3.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);

svg.selectAll("rect")
   .data(myData)
   .enter()
   .append("rect")     
   .attr("x", function(d, i) {return i * (svgWidth / myData.length);})
   .attr("y", function(d){return svgHeight - d * 5;})
   .attr("width", (svgWidth / myData.length) - spacing)
   .attr("height", function(d){return d * 5})
   .attr("fill", "#30C5C7");

