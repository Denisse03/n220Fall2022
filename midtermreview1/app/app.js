// write an application that has a div with the number 10 in it when the div is clicked subtract one from the number and display the lower number in the div if the number is less than 1, display the word "liftoff" in the div.

let myDiv = document.getElementById("myDiv");
let count = 10;

function doThing() {
  // change count
  count = count - 1;
  myDiv.innerHTML = count;

  if (count < 1) {
    myDiv.innerHTML = "liftoff";
  }
}
