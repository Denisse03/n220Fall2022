function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(237, 210, 135);

  let res = polarPoint(30);
  translate(100, 100);
  circle(res.x, res.y, 20);
}

function polarPoint(r) {
  let x = r * Math.sin(mouseX);
  let y = r * Math.cos(mouseY);

  return createVector(x, y);
}
