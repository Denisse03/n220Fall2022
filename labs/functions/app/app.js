let seven = document.getElementById("seven");
let x = 0;
let guess = document.getElementById("guess");

let randGuess = Math.floor(Math.random() / 7);

function divideNum() {
  let numb = Number(seven.value);

  if (numb % 7 == 0) {
    console.log("true");
    guess.innerHTML = "true";
  } else if (numb % 7 != 0) {
    console.log("false");
    guess.innerHTML = "false";
  }
}
