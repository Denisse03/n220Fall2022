let myElement = document.getElementById("myElement");

function changeWord() {
  if (myElement.innerHTML == "Hello") {
    myElement.innerHTML = "world";
  } else {
    myElement.innerHTML = "Hello";
  }
}
