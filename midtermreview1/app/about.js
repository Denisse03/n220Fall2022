// using an array with the value 1, 20, 2, 30, 3, 40, 4, 50 write out the values in the array to the document if the number is less than 10, add an "a" in front of the number use a for loop wo write these values out

let myDivs = document.getElementById("myDivs");
let myData = [1, 20, 2, 30, 3, 40, 4, 50];

for (let i = 0; i < myData.length; i++) {
  if (myData[i] < 10) {
    myDivs.innerHTML += "a";
  }
  myDivs.innerHTML += myData[i] + "<br / >";
  //   console.log(myData[i]);
}
