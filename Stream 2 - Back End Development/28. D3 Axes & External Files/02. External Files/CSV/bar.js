var svgWidth = 700;
var svgHeight = 500;
var spacing= 3;

var margin = {top: 50, right: 0, bottom: 50, left: 50};
var canvasWidth = svgWidth + margin.right + margin.left;
var canvasHeight = svgHeight + margin.top + margin.bottom;

d3.csv("list.csv", function(error, myData) {
     myData.forEach(function(d) {
       d.username = d.user;
       d.score = +d.highscore;   //the + here converts to a number
     });

      

      var maxData = d3.max(myData, function(d){return d.score;});

      var heightScale = d3.scale.linear()
                       .domain([0, maxData])
                       .range([0, svgHeight]); 

      var colorScale = d3.scale.linear() 
                        .domain([0, maxData])
                        .range(["blue","red"]);

      var yAxisScale = d3.scale.linear()
                         .domain([0, maxData])
                         .range([svgHeight , 0]);

      var xAxisScale = d3.scale.ordinal()
                  .domain(myData.map(function(d) { return d.username; }))
                  .rangeBands([0, svgWidth]);

      var tooltip = d3.select("body")
                       .append("div")
                       .classed("hidden",true)
                       .attr("id","tooltip");

      var yAxis = d3.svg.axis()
                  .scale(yAxisScale)
                  .orient("left")
                  .ticks(5);

      var xAxis = d3.svg.axis()
                .scale(xAxisScale)
                .orient("bottom")
                .ticks(myData.length);

      var canvas = d3.select("body")
            .append("svg")
            .attr("width",canvasWidth)
            .attr("height",canvasHeight)
            .attr("style","background-color:#ddd");

      canvas.append("g")
        .attr("class","axis")  // style axis via CSS
        .attr("transform","translate("+ (margin.left - 2) +"," + margin.bottom + ")")
        .call(yAxis);

      canvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+ margin.left +","+ (canvasHeight - (margin.bottom - 2)) + ")")
        .call(xAxis);

      canvas.append("g")
        .append("text")
        .text("Bar Chart")
        .attr("x", canvasWidth / 2)
        .attr("y", 30)
        .attr("class","title");

      var svg = canvas.append("g")
                .attr("width",svgWidth)
                .attr("height",svgHeight)
                .attr("style","background-color:#ddd") /* added some style*/
                .attr("transform","translate("+ margin.left +"," + margin.bottom + ")");

      svg.selectAll("rect")
         .data(myData)
         .enter()
         .append("rect")   
         .attr("x", function(d, i) {return i * (svgWidth / myData.length);})
         .attr("y", function(d){return svgHeight - (heightScale(d.score));}) 
         .attr("width", (svgWidth / myData.length) - spacing)
         .attr("height", function(d){return heightScale(d.score)})
         .attr("fill", function(d){return(colorScale(d.score));})
         // add an SVG title element contents of which is effectively rendered in a tooltip
         .on("mouseover", function(d){    
          d3.select("#tooltip")
            .style("left", d3.event.pageX + "px")  // in this case we need        
            .style("top", d3.event.pageY -50 + "px")   //to append px as units
            .classed("hidden", false);
            tooltip.html(d.score);            
          })
          .on("mouseout", function(){    
            d3.select("#tooltip")
              .classed("hidden", true);            
          });

      


 });    


