let random = document.getElementById("random");

function numberGuess() {
  document.getElementById("random").innerHTML = Math.floor(Math.random() * 11);
  //   console.log(numberGuess);
}
