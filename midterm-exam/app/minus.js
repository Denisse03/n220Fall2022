let sub = document.getElementById("sub");
// this get the id from the about.html
let number = 100;
// this will be the number that displays in the html that is the same with the div in the about.html

function numDown() {
  number = number - 5;
  //   this will get the number that is equal to 100 and subtract it by 5
  sub.innerHTML = number;

  //   this will display what is happening which is the subtracting part
}
