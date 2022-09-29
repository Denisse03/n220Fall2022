let circle = document.getElementById("circle");
circle.style.backgroundColor = "#FFAAAA";
let wid = 300;
let hei = 300;
circle.style.width = wid + "px";
circle.style.height = hei + "px";
circle.style.backgroundColor = "green";

function flipCircle() {
  circle.innerHTML += "div";
  circle.style.color = "#00FF66";
  circle.style.backgroundColor = "#000000";
  document.body.appendChild(flipCircle);
}
