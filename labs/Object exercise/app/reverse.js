let tennis = {
  color: "#66f542",
  width: 100,
  height: 100,
  height2: 200,
};

let ball = {
  color: "#d1431f",
  width: 40,
  heigh: 45,
  x: 300,
  y: 100,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  fill(tennis.color);
  rect(tennis.width, tennis.height, tennis.width, tennis.height2);

  fill(ball.color);
  circle(ball.x, ball.y, ball.width, ball.heigh);

  if (keyIsDown(UP_ARROW)) {
    ball.y -= 1;
    tennis.height += 1;
    tennis.height2 += 1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ball.y += 1;
    tennis.height -= 1;
    tennis.height2 -= 1;
  }
}
