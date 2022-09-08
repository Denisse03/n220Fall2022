function setup() {
  createCanvas(800, 600);
}

let x = 50;
let y = 50;

let greeting = "Hello world";

greeting += "d";

function draw() {
  text(greeting, x + 50, y + 100);
}
