let colors = [
  " #042A2B",
  " #5EB1BF",
  " #CDEDF6",
  " #EF7B45",
  " pk love",
  " purple",
];

// for (let i = 0; i < colors.length; i++) {
//   console.log("hi! - " + i + "" + colors[i]);
// }

// colors[4] = "red";

// console.log(colors);

function placeDiv(event) {
  console.log("placediv");
  for (var i = 0; i < colors.length; i++) {
    let aDiv = document.createElement("div");
    aDiv.innerHTML = colors[i];
    aDiv.style.width = "100px";
    aDiv.style.height = "100px";
    aDiv.style.position = "absolute";

    aDiv.style.top = Math.random() * 200 + event.clientY + "px";
    aDiv.style.left = Math.random() * 200 + event.clientX + "px";

    aDiv.style.background = colors[i];
    document.body.appendChild(aDiv);
  }
}
