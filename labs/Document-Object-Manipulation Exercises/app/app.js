let growSquare1 = document.getElementById("square");
growSquare1.style.backgroundColor = "green";
let wid = 100;
let hei = 100;
// growSquare.style.width = wid + ".1px";
// growSquare.style.height = hei + ".1px";

growSquare1.style.width = wid + "px";
growSquare1.style.height = hei + "px";

function growSquare() {
  wid = wid + 10;
  hei = hei + 10;
  growSquare1.style.width = wid + "px";
  growSquare1.style.height = hei + "px";

  growSquare1.innerHTML = "";
  document.body.appendChild(growSquare1);
}
