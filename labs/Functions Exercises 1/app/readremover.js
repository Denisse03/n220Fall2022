let myColor = 0;
function setup() {
  createCanvas(800, 600);
  myColor = removeRed(color(300, 150, 150));
}

function draw() {
  background(237, 210, 135);

  fill(myColor);

  circle(50, 90, 30);
}

function removeRed(c) {
  c.setRed(0);
  return c;
}
