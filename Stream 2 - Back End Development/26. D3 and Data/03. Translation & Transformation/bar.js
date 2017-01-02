var svgWidth = 500;
var svgHeight = 300;
var spacing= 10;
var myData = [10, 15, 20, 30, 45, 50, 40, 45 ,50 , 40, 42, 35, 30, 25, 10, 15, 20, 30, 45, 50, 40, 45 ,50 , 40, 42, 35, 30, 25];

var svg = d3.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
   .attr("style","background-color:#ddd");

var g = svg.append("g");

g.selectAll("rect")
   .data(myData)
   .enter()
   .append("rect") 
   .attr("x", 0)  
   .attr("y", 0)
   .attr("width", 0)  
   .attr("height", 0)
   .attr("opacity", 0)
   .transition().duration(5000)    
   .attr("x", function(d, i) {return i * (svgWidth / myData.length);})
   .attr("y", function(d){return svgHeight - d * 5;})
   .attr("width", (svgWidth / myData.length) - spacing)
   .attr("height", function(d){return d * 5})
   .attr("fill", "#30C5C7")
   .attr("opacity", 1)
   .attr("transform","translate(0,-20)");

