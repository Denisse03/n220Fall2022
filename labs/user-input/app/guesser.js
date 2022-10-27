let txtDieSize = document.getElementById("txtDieSize");
let x = 0;
let guess = document.getElementById("guess");

let randRoll = Math.floor(Math.random() * 20) + 1;

function rollDice() {
  let dieSize = Number(txtDieSize.value);

  if (dieSize > randRoll) {
    console.log("to high");
    guess.innerHTML = "to high";
  } else if (dieSize === randRoll) {
    console.log("equal");
    guess.innerHTML = "equal";
  } else if (dieSize < randRoll) {
    console.log("too low");
    guess.innerHTML = "too low";
  }
}
