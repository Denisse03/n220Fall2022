let eyeObject = {
  height: 150,
  color: "#FFB6C1",
  width: 150,
};

function setup() {
  createCanvas(800, 600);
  background(100);
}

function draw() {
  fill(eyeObject.color);
  rect(
    eyeObject.width / 2,
    eyeObject.height / 2,
    eyeObject.width,
    eyeObject.height
  );
}
