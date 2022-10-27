let enterName = document.getElementById("enterName");
let info = document.getElementById("info");

function txtName() {
  let name = enterName.value;

  info.innerHTML = "Hello " + name;
}
