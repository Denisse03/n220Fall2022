let size = 10;

function setup() {
  createCanvas(800, 600);
  console.log(size);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    size = size + 1;
  }
  circle(mouseX, mouseY, size);
}
