let allDiv = document.getElementById("allDiv");

let objects = [
  { color: "#FF0000", height: 100, width: 300 },

  { color: "#FFFF00", height: 200, width: 200 },

  { color: "#ff0000", height: 300, width: 100 },
];

let div = [];

for (let i = 0; i < objects.length; i++) {
  console.log(objects);
  div[i] = document.createElement("div");
  div[i].style.backgroundColor = objects[i].color;
  div[i].style.height = objects[i].height + "px";
  div[i].style.width = objects[i].width + "px";

  document.body.appendChild(div[i]);
}
