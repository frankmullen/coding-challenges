
var myData = [10, 15, 20, 30, 45, 50, 40, 45 ,50 , 40, 42, 35, 30, 25];

var svg = d3.select("body")
	.append("svg")
	.attr("width", 500)
	.attr("height", 300);

svg.selectAll("rect")
   .data(myData)
   .enter()
   .append("rect")     
   .attr("x", function(d,i){return i * 31;}) 
   .attr("y", function(d){return 300 - d * 5;})
   .attr("width", 30)
   .attr("height", function(d){return d * 5})
   .attr("fill", "#30C5C7");
