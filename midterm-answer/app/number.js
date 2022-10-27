let myElement = document.getElementById("myElement");
let myNumber = 100;

function divideNumber() {
  myNumber = myNumber / 2;

  myElement.innerHTML = myNumber.toString();
}
