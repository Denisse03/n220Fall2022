let tv = {
  height: 300,
  color: "#FFB6C1",
  width: 400,
};

let tvScreen = {
  height: 200,
  color: "#000000",
  width: 300,
};

let tvAntenna = {
  height: 10,
  color: "#000000",
  width: 100,
};

function setup() {
  createCanvas(800, 600);
  background(100);
}

function draw() {
  fill(tv.color);
  rect(tv.width / 2, tv.height / 2, tv.width, tv.height);

  fill(tvScreen.color);
  rect(tvScreen.width - 50, tvScreen.height, tvScreen.width, tvScreen.height);
  fill(tvScreen.color);
  line(200, 200, tvAntenna.width + 85, tvAntenna.height + 67);
}
