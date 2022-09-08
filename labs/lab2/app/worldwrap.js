function setup() {
  createCanvas(800, 600);
}

let ball = 0;
function draw() {
  background(220);
  if (ball < 800) {
    ball++;
  } else if (ball === 800) {
    ball = 0;
  }
  circle(ball++, 30, 20);
}
