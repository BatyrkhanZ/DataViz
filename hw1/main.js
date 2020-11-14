const w = 500;
const h = 500;
var dots = []
for (var i = 0; i < 30; i++) {
  x_val = Math.round(Math.random() * (w))
  y_val = Math.round(Math.random() * (h))
  dots[dots.length] =  [x_val, y_val, "#000000"];
}

var rect = []
for (var i = 0; i < 30; i++) {
  x_val = Math.round(Math.random() * (w))
  y_val = Math.round(Math.random() * (h))
  rect[rect.length] = [x_val, y_val, "#00FF00"];
}


data = dots.concat(rect);

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
   .data(dots)
   .enter()
   .append("circle")
   .attr("cx", (d, i) => d[0])
   .attr("cy", (d, i) => h - d[1])
   .attr("r", 3)
   .style("fill", (d) => d[2]);

 svg.selectAll("rect")
    .data(rect)
    .enter()
    .append("rect")
    .attr('x', (d, i) => d[0])
    .attr('y', (d, i) => h - d[1])
    .attr('width', 6)
    .attr('height', 6)
    .attr('rx', 1)
    .attr('ry', 1)
    .style("fill", (d) => d[2]);

svg.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("x", (d) => d[0]+5)
   .attr("y", (d) => h - d[1])
   .text((d) => d[0]+', '+d[1])
   .style("fill", (d) => d[2]);
