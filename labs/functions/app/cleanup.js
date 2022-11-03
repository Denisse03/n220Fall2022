let clean = document.getElementById("clean");
let square = document.getElementById("square");

function cleanUp() {
  let str = clean.value;
  square.innerHTML = str.replace(/#/g, "");
}
