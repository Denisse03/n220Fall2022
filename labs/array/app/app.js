let numTxt = document.getElementById("numTxt");
let num = document.getElementById("num");

function calcScore() {
  var stringVals = numTxt.value;

  let myArray = stringVals.split(",");
  //   letmyArray = [2, 4, 6, 8, 10];

  let sum = 0;

  for (let i = 0; i < myArray.length; i++) {
    sum += Number(myArray[i]);
  }

  num.innerHTML = sum;

  console.log(sum);

  numTxt.value = "";
}
