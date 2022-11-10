let guessTxt = document.getElementById("guessTxt");
let outcome = document.getElementById("outcome");

function winScore() {
  var stringGuess = guessTxt.value;

  let myGuess = stringGuess.split(",");

  let oneCount = 0;
  let isWinner = false;

  for (let i = 0; i < myGuess.length; i++) {
    if (myGuess[i] == 1) {
      oneCount += 1;
    } else {
      oneCount = 0;
    }

    if (oneCount == 3) {
      outcome.innerHTML = "Winner";
      console.log("winner");
      isWinner = true;
      break;
    }

    // console.log(myGuess);
    // console.log(oneCount);
  }

  if (isWinner == false) {
    outcome.innerHTML = "Not Winner";
    console.log("not winner");
  }
}
