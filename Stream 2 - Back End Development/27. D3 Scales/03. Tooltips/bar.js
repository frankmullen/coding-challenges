var svgWidth = 700;
var svgHeight = 500;
var spacing= 3;
var myData = [10, 15, 20, 30, 45, 50, 40, 45, 50, 40];

myData.sort();

var svg = d3.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
   .attr("style","background-color:#ddd");

var heightScale = d3.scale.linear()
                 .domain([0,d3.max(myData)])
                 .range([0,svgHeight]); 

var colorScale = d3.scale.linear() 
                  .domain([0,d3.max(myData)])
                  .range(["blue","red"]);

var tooltip = d3.select("body")
                 .append("div")
                 .classed("hidden",true)
                 .attr("id","tooltip");

/*var yAxis = d3.svg.axis()
              .scale(heightScale)
              .orient("left")
              .ticks(5);*/

var g = svg.append("g");

g.selectAll("rect")
   .data(myData)
   .enter()
   .append("rect")   
   .attr("x", function(d, i) {return i * (svgWidth / myData.length);})
   .attr("y", function(d){return svgHeight - (heightScale(d));}) 
   .attr("width", (svgWidth / myData.length) - spacing)
   .attr("height", function(d){return heightScale(d)})
   .attr("fill", function(d){return(colorScale(d));})
   // add an SVG title element contents of which is effectively rendered in a tooltip
   .on("mouseover", function(d){    
    d3.select("#tooltip")
      .style("left", d3.event.pageX-40 + "px")  // in this case we need        
      .style("top", d3.event.pageY-40 + "px")   //to append px as units
      .classed("hidden", false);
      tooltip.html(d);            
    })
    .on("mouseout", function(){    
      d3.select("#tooltip")
                      .classed("hidden", true);            
    });

svg.append("g")
  .attr("class","axis")  // style axis via CSS
  .attr("transform","translate(35,0)")
  .call(yAxis);

