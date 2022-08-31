function setup() {
  var green = "#66cc66";
  var blue = "#0345fc";
  createCanvas(800, 600);

  background(green);

  noStroke();
  fill(blue);
  rect(70, 60, 300, 50);

  stroke(0, 0, 0);
  strokeWeight(2);

  fill(128, 128, 128);

  ellipseMode(RADIUS);
  fill(255);
  ellipse(100, 125, 30, 30);
  ellipseMode(CENTER);
  fill(100);
  ellipse(100, 125, 30, 30);

  ellipseMode(RADIUS);
  fill(255);
  ellipse(340, 125, 30, 30);
  ellipseMode(CENTER);
  fill(100);
  ellipse(340, 125, 30, 30);

  stroke(2);
  line(0, 220, 1000, 30);

  noStroke();
  fill(blue);

  triangle(30, 55, 58, 20, 86, 75);
}
