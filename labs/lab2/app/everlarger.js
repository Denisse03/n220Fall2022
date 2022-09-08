function setup() {
  createCanvas(800, 600);
}

let ball = 1;
function draw() {
  background(220);
  if (ball < 200) {
    ball++;
  } else if (ball === 200) {
    ball = 1;
  }
  fill(0);
  circle(400, 300, ball);
}
