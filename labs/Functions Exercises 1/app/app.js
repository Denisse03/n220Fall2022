function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(237, 210, 135);

  rect(mouseX, mouseY, 95, 55);
  circle(mouseX, mouseY + 50, 30);
  circle(mouseX + 100, mouseY + 50, 30);

  rect(mouseX, mouseY + 150, 95, 55);
  circle(mouseX, mouseY + 200, 30);
  circle(mouseX + 100, mouseY + 200, 30);

  rect(mouseX, mouseY + 300, 95, 55);
  circle(mouseX, mouseY + 350, 30);
  circle(mouseX + 100, mouseY + 350, 30);
}
