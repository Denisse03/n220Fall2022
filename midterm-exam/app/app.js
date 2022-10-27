let word = document.getElementById("word");
// this get the id from the index.html
let words = 3;
// this will help display the word I need but adding a number I can control what is being display
function textChange() {
  words = words - 1;
  // this is where I can control it by subtracting one I can display what I want.

  word.innerHTML = "are";
  // after two click it will display are
  if (words > 1) {
    word.innerHTML = "you";
  }
  // after one click it will display you
}
