let score = 0;
var playerMove = "";
var computerMove = "";

function rock() {
  playerMove = "rock";
  playMove();
}

function paper() {
  playerMove = "paper";
  playMove();
}

function scissor() {
  playerMove = "scissor";
  playMove();
}

function guard() {
  playerMove = "guard";
  playMove();
}

function playMove() {
  //   console.log(playerMove);

  randomMove();
  tally();
  document.getElementById("player-move").innerHTML = playerMove;

  document.getElementById("computer-move").innerHTML = computerMove;
  //   console.log(computerMove);
}

function randomMove() {
  var randomNum = Math.floor(Math.random() * 4);
  if (randomNum == 0) {
    computerMove = "rock";
  } else if (randomNum == 1) {
    computerMove = "paper";
  } else if (randomNum == 2) {
    computerMove = "scissor";
  } else if (randomNum == 3) {
    computerMove = "guard";
  }
}

function tally() {
  if (playerMove === "guard") {
    score -= 0.5;
    document.getElementById("score").innerHTML = score;
  } else if (
    (playerMove === "rock" && computerMove === "scissor") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissor" && computerMove === "paper")
  ) {
    score++;
    document.getElementById("score").innerHTML = score;
  } else if (
    (playerMove === "scissor" && computerMove === "rock") ||
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissor")
  ) {
    score--;
    document.getElementById("score").innerHTML = score;
  }
}
