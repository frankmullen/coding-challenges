
    
    var svgWidth = 700;
    var svgHeight = 500;
    var spacing= 3;

    var margin = {top: 50, right: 0, bottom: 50, left: 50};
    var canvasWidth = svgWidth + margin.right + margin.left;
    var canvasHeight = svgHeight + margin.top + margin.bottom;

    d3.json("list.json", function(error, myData) {
     myData.forEach(function(d) {
       d.username = d.username;
       d.score = +d.score;   //the + here converts to a number
         });

    var canvas = d3.select("body")
              .append("svg")
              .attr("width",canvasWidth)
              .attr("height",canvasHeight)
              .attr("style","background-color:#ddd"); /* added some style*/

    var maxData = d3.max(myData, function(d) {
       return d.score;
    });

    var heightScale = d3.scale.linear()
                     .domain([0,maxData])
                     .range([0,svgHeight]); 

    var colorScale = d3.scale.linear() 
                      .domain([0,maxData])
                      .range(["blue","red"]);

    var yAxisScale = d3.scale.linear()
                       .domain([0, maxData])
                       .range([svgHeight , 0]);

    var tooltip = d3.select("body")
                     .append("div")
                     .classed("hidden",true)
                     .attr("id","tooltip");

    var yAxis = d3.svg.axis()
                .scale(yAxisScale)
                .orient("left")
                .ticks(5);

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
          .style("left", d3.event.pageX-40 + "px")  // in this case we need        
          .style("top", d3.event.pageY-40 + "px")   //to append px as units
          .classed("hidden", false);
          tooltip.html(d.score);            
        })
        .on("mouseout", function(){    
          d3.select("#tooltip")
                          .classed("hidden", true);            
        });

    canvas.append("g")
      .attr("class","axis")  // style axis via CSS
      .attr("transform","translate("+ (margin.left - 2) +"," + margin.bottom + ")")
      .call(yAxis);     
 });    



