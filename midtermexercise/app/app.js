let hello = document.getElementById("hello");
let hi = document.getElementById("hi");
let pizza = document.getElementById("pizza");
let candy = document.getElementById("candy");
let water = document.getElementById("water");
let soda = document.getElementById("soda");

let items = ["hello", "hi", "pizza", "candy", "water", "soda"];

function stuff() {
  items.forEach((item) => (eval(item).style.backgroundColor = "#ffffff"));
}

function changeText() {
  stuff();
  hello.style.textDecoration = "bold";
  hello.style.backgroundColor = "#00FF66";
}
function hiText() {
  stuff();

  hi.style.textDecoration = "bold";
  hi.style.backgroundColor = "#00FF66";
}

function pizzaText() {
  stuff();
  pizza.style.textDecoration = "bold";
  pizza.style.backgroundColor = "#00FF66";
}

function candyText() {
  stuff();

  candy.style.textDecoration = "bold";
  candy.style.backgroundColor = "#00FF66";
}

function waterText() {
  stuff();
  water.style.textDecoration = "bold";
  water.style.backgroundColor = "#00FF66";
}

function sodaText() {
  stuff();
  soda.style.textDecoration = "bold";
  soda.style.backgroundColor = "#00FF66";
}
