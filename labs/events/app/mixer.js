let blockColor = document.getElementById("blockColor");
let colorTxt = document.getElementById("colorTxt");
blockColor.addEventListener("click", addColor);
let r = 100;
let g = 100;
let b = 100;

blockColor.style.width = "300px";
blockColor.style.height = "300px";
blockColor.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

colorTxt.innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";

function addColor(event) {
  let paint = event.target.getAttribute("data-color");
  let value = event.target.getAttribute("data-value");
  //   event.target.style.backgroundColor = paint;
  //   event.target.innerHTML = paint;

  if (paint === "r") {
    r += parseInt(value);
    if (r > 255) {
      r = 255;
    }
  }

  if (paint === "g") {
    g += parseInt(value);
    if (g > 255) {
      g = 255;
    }
  }

  if (paint === "b") {
    b += parseInt(value);
    if (b > 255) {
      b = 255;
    }
  }

  blockColor.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  colorTxt.innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";
}
