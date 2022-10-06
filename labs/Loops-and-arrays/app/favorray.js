let myDivs = document.getElementById("myDivs");
let myFood = ["burger", "fries", "steak", "dount", "pizza"];

// console.log(myFood);

let statement = "";

for (let i = 0; i < myFood.length; i++) {
  statement += myFood[i] + " is one of my favorite things" + "<br />";
}
myDivs.innerHTML = statement;
