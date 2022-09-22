function setup() {
  createCanvas(800, 600);
}

let ball = {
  x: 0,
  y: 50,
  size: 20,
  color: "blue",
};
function draw() {
  background(220);
  fill(ball.color);
  if (ball.x < 800) {
    ball.x++;
  } else if (ball.x === 800) {
    ball.x = 0;
  }
  circle(ball.x++, ball.y, ball.size);
}
