let bop = document.getElementById("bop");

for (let i = 0; i <= 25; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    bop.innerHTML += i + "<br>";
  } else if (i % 3 == 0 && i % 5 != 0) {
    bop.innerHTML += "beep" + "<br>";
  } else if (i % 5 == 0 && i % 3 != 0) {
    bop.innerHTML += "bop" + "<br>";
  } else if (i % 3 == 0 && i % 5 == 0) {
    bop.innerHTML += "beepbop" + "<br>";
  }
  console.log(bop);
}
